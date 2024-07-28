import React from 'react';
import './Projects.css';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (<>
    <div className='projectCardContainer'>
      <ProjectCard
        title="brewith.us"
        image={`/projectImages/brewithus.PNG`}
        description="This website is built to discover nearby coffee shops, tea shops, or anywhere that prepares and sells either using AI. I worked on the backend and external API calls and dataflow."
        link="https://www.brewith.us/"
      />
    </div>
    <div className='projectCardContainer'>
      <ProjectCard
        title="Coco's Courier Company"
        image={`/projectImages/cocos.PNG`}
        description="This game is about girl who flies on a broomstick to deliver packages. It was built in Unity. I worked on what I would call the backend"
        link="https://yawgmoth.github.io/CocoBuild/"
      />
    </div>
    </>);
};

export default Projects;
