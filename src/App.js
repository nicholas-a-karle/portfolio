// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import CursorTracker from './components/CursorTracker';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <>
            <CursorTracker />
            <Home />
            </> } />
          <Route path="/about" element={ <>
            <CursorTracker />
            <About />
            </>} />
          <Route path="/projects" element={ <>
            <CursorTracker />
            <Projects />
            </>} />
          <Route path="/contact" element={ <>
            <CursorTracker />
            <Contact />
            </>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
