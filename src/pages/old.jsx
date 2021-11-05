import React from 'react';
import Particles from 'react-particles-js';
import oldProfileImage from '../../old/img_compressed.png';
import { AiFillLinkedin as LinkedIn } from '../../node_modules/react-icons/all';
import { AiFillGithub as GitHub } from '../../node_modules/react-icons/all';
import { AiFillMediumSquare as Medium } from '../../node_modules/react-icons/all';
import { SiTwitter as Twitter } from '../../node_modules/react-icons/all';
import { FaFacebookF as Facebook } from '../../node_modules/react-icons/all';

const particlesParams = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const OldWebsite = () => {
  return (
    <div>
      <Particles canvasClassName="particles" params={particlesParams} />
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
    </div>
  );
};

export default OldWebsite;
