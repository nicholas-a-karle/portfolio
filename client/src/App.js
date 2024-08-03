// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import CursorTracker from './components/CursorTracker';

import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <>
            <Navbar />
            <CursorTracker />
            <Home />
            <Contact />
            </> } />
          <Route path="/about" element={ <>
            <Navbar />
            <CursorTracker />
            <About />
            <Contact />
            </>} />
          <Route path="/projects" element={ <>
            <Navbar />
            <CursorTracker />
            <Projects />
            <Contact />
            </>} />
        </Routes>
    </Router>
  );
};

export default App;
