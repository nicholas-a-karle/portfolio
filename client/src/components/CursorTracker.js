import React, { useState, useEffect, useRef } from 'react';
import './CursorTracker.css';

const CursorTracker = ({ move_time_ms = 400, move_update_ms = 10 }) => {
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [cursorPositions, setCursorPositions] = useState({ x: [], y: [] });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [isMouseClicked, setIsMouseClicked] = useState(false);

  const timeoutRef = useRef(null); // Use ref to store the timeout ID

  const prop = 1 - Math.pow(0.001, move_update_ms / move_time_ms);

  // Adjusted mouse move handler to account for scrolling
  const mouseMoveHandler = (event) => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const x = event.clientX + scrollX;
    const y = event.clientY + scrollY;
    
    setCursorPosition({ x, y });
    setCursorPositions(prevPositions => {
      const newX = [...prevPositions.x, x];
      const newY = [...prevPositions.y, y];
      return { x: newX, y: newY };
    });

    if (cursorPositions.x.length === 0 && cursorPositions.y.length === 0) {
      setFollowerPosition({ x, y });
    }
  };

  const mouseDownHandler = () => {
    setIsMousePressed(true);
    setIsMouseClicked(true);
    // Set a timeout to reset isMouseClicked after 0.1s
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsMouseClicked(false);
    }, 100); // 100ms delay
  };

  const mouseUpHandler = () => {
    setIsMousePressed(false);
    setIsMouseClicked(false);
    // Clear the timeout when mouse button is released
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorPositions.x.length > 0 && cursorPositions.y.length > 0) {
        const moveAlongPath = (A, C, prop) => {
          const dist = (p1, p2) => ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2) ** 0.5;
          const sumDist = points => points.reduce((sum, point, i) => sum + (i > 0 ? dist(points[i - 1], point) : 0), 0);

          let dist_total = sumDist([C, ...A]);
          let dist_move = prop * dist_total;

          let updatedA = [...A];

          while (dist_move > 0 && updatedA.length > 0) {
            let dist_next = dist(C, updatedA[0]);
            if (dist_move >= dist_next) {
              C = updatedA.shift();
              dist_move -= dist_next;
            } else {
              let ratio = dist_move / dist_next;
              C = {
                x: C.x + ratio * (updatedA[0].x - C.x),
                y: C.y + ratio * (updatedA[0].y - C.y)
              };
              dist_move = 0;
            }
          }

          return { C, updatedA };
        };

        const A = cursorPositions.x.map((x, i) => ({ x, y: cursorPositions.y[i] }));
        const { C, updatedA } = moveAlongPath(A, followerPosition, prop);

        // Check if follower is within 5 pixels of the cursor position
        const distanceBetween = ((cursorPosition.x - C.x) ** 2 + (cursorPosition.y - C.y) ** 2) ** 0.5;

        setFollowerPosition(C);

        if (A.length > updatedA.length) {
          setCursorPositions({
            x: updatedA.map(point => point.x),
            y: updatedA.map(point => point.y)
          });
        }
      }
    }, move_update_ms);

    return () => clearInterval(interval);
  }, [cursorPositions, followerPosition, cursorPosition, move_update_ms, prop]);

  // followerSize goes closer to 12px as it gets further away (1/(1+dist)) * size + (1 - 1/(1+dist)) * 12
  const distanceBetween = ((cursorPosition.x - followerPosition.x) ** 2 + (cursorPosition.y - followerPosition.y) ** 2) ** 0.5;
  const inverseDistance = 10 / (10 + distanceBetween);
  const followerSizeRaw = (isMouseClicked ? 2 : (isMousePressed ? 4 : 8)) * inverseDistance + 1 * (1 - inverseDistance);
  const followerSize = `${followerSizeRaw}px`;
  const cursorSizeRaw = (isMouseClicked ? 40 : (isMousePressed ? 20 : 10)) * inverseDistance + 12 * (1 - inverseDistance);
  const cursorSize = `${cursorSizeRaw}px`

  return (
    <>
      <div
        className="follower"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          width: followerSize,
          height: followerSize,
        }}
      />
      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          width: cursorSize,
          height: cursorSize,
        }}
      />
    </>
  );
};

export default CursorTracker;
