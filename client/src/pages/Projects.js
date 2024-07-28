import React from 'react';
import './Projects.css';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className='projectCardContainer'>
      <ProjectCard
        title="brewith.us"
        image={`${process.env.PUBLIC_URL}/projectImages/brewithus.png`}
        description="This website is built to discover nearby coffee shops, tea shops, or anywhere that prepares and sells either using AI. I worked on the backend and external API calls and dataflow."
        link="https://www.brewith.us/"
      />
      <ProjectCard
        title="Coco's Courier Company"
        image={`${process.env.PUBLIC_URL}/projectImages/cocos.png`}
        description="This game is about girl who flies on a broomstick to deliver packages. It was built in Unity. I worked on what I would call the backend"
        link="https://yawgmoth.github.io/CocoBuild/"
      />
    </div>
  );
};

export default Projects;
