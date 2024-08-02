// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import './Page.css';

const About = () => {
  return (<>
    <Card>
        <h2>About Me</h2>
        <p>I'm a recent computer science graduate aspiring to become a software engineer.</p>
      </Card>

    <Card>
        <h2>Education</h2>
        <p>I went to <Link className='link' to='https://www.cpp.edu/'>Cal Poly Pomona</Link>, where I graduated with a 3.3 overall, and a 
          3.4 in my major, and was on the dean's list for 2 terms.</p>
        <p>There, I also participated in extracircular clubs and activities, 
          connecting to my fellow students and volunteering to help research 
          the use of AI methods in precision agriculture.</p>
      </Card>

    <Card>
        <h2>Interests</h2>
        <p>I am deeply interested in the use of information technology to make the world a 
          better place. I am also wary of the ill uses of it.</p>
        <p>Software is the fastest moving field possible, and can only be limited by the 
          power of the hardware the software runs on and our creative work. I believe that this makes it the 
          most important field to think deeply about.</p>
        <p>Interacting with other technologies, software can create great value in nearly any field.</p>
      </Card>
    </>);

};

export default About;
