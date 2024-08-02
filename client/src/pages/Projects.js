import React from 'react';
import './Projects.css';

import ImageTextCard from '../components/ImageTextCard';

const Projects = () => {
  return (<>
      <ImageTextCard
        title="brewith.us"
        image={`/projectImages/brewithus.PNG`}
        link="/projects/brewithus"
      >
        <h3>brewith.us</h3>
        <p>This website is built to discover nearby coffee shops, 
          tea shops, or anywhere that prepares and sells either using AI. 
          I worked on the backend and external API calls and dataflow.</p>
      </ImageTextCard>
      <ImageTextCard
        title="Coco's Courier Company"
        image={`/projectImages/cocos.PNG`}
        description=""
        link="/projects/cocos"
      >
        <h3>Coco's Courier Company</h3>
        <p>This game is about a delivery woman who 
          flies on a broomstick to deliver packages. 
          It was built in Unity. I worked on what I would call the backend</p>
      </ImageTextCard>
    </>);
};

export default Projects;
