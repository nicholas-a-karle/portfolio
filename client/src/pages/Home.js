// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import './Page.css';

const Home = () => {
  return (
  <Card>
    <h2>Nicholas Karle</h2>
    <p>Hi, I'm a recent computer science graduate aspiring to become a software engineer</p>
    <p>If you want to learn more about me, look at the <Link className="link" to="/about">about</Link> page. 
      If you need to contact me, check the <Link className="link" to="/contact">contact</Link> page. 
      If just want to check out my projects, check the <Link className="link" to="/projects">projects</Link> page.</p>
  </Card>
  );
};

export default Home;
