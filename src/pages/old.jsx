import React from 'react';
import Particles from 'react-particles-js';
import oldProfileImage from '../../old/img_compressed.png';
import { AiFillLinkedin as LinkedIn } from '../../node_modules/react-icons/all';
import { AiFillGithub as GitHub } from '../../node_modules/react-icons/all';
import { AiFillMediumSquare as Medium } from '../../node_modules/react-icons/all';
import { SiTwitter as Twitter } from '../../node_modules/react-icons/all';
import { FaFacebookF as Facebook } from '../../node_modules/react-icons/all';
import { particlesParams as params } from '../constants/particles.js';

const OldWebsite = () => {
  return (
    <div>
      <Particles canvasClassName="particles" params={params} />
      <div id="intro">
        <img src={oldProfileImage} alt="" />
        <br />
        <h2 className="header-font text-2xl">Hemanth Kotagiri</h2>
        <br />
        <center>
          <hr />
        </center>
        <br />
        <div className="iconsList">
          <a
            href="https://www.linkedin.com/in/hemanth-kotagiri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="white" size="2rem" />
          </a>
          <a
            href="https://www.github.com/hemanth-kotagiri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub color="white" size="2rem" />
          </a>
          <a
            href="https://hemanth-kotagiri43.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium color="white" size="2rem" />
          </a>
          <a
            href="https://twitter.com/hemanth043"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter color="white" size="2rem" />
          </a>
          <a
            href="https://www.facebook.com/hemanth.kotagiri.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="white" size="2rem" />
          </a>
        </div>
      </div>
      <div className="old-footer">
        <h1 className="old-footer-top">For you, Forever</h1>
        <h1 className="old-footer-bottom">For Precious, With Patience</h1>
      </div>
    </div>
  );
};

export default OldWebsite;
