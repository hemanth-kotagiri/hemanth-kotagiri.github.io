import React from 'react';
import { AiFillLinkedin as LinkedIn } from '../../../node_modules/react-icons/all';
import { AiFillGithub as GitHub } from '../../../node_modules/react-icons/all';
import { AiFillMediumSquare as Medium } from '../../../node_modules/react-icons/all';
import { SiTwitter as Twitter } from '../../../node_modules/react-icons/all';
import { FaFacebookF as Facebook } from '../../../node_modules/react-icons/all';

const OldIconsList = () => {
  return (
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
  );
};

export default OldIconsList;
