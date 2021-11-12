import React from 'react';
import Particles from 'react-particles-js';
import { particlesParams as params } from '../constants/particles.js';
import OldIntro from '../components/old-intro/index.jsx';
import OldFooter from '../components/old-footer/index.jsx';

const OldWebsite = () => {
  return (
    <div>
      <Particles canvasClassName="particles" params={params} />
      <OldIntro />
      <OldFooter />
    </div>
  );
};

export default OldWebsite;
