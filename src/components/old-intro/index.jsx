import React from 'react';
import oldProfileImage from '../../../old/img_compressed.png';
import OldIconsList from '../old-icons-list';

const OldIntro = () => {
  return (
    <div id="intro">
      <img src={oldProfileImage} alt="" />
      <br />
      <h2 className="header-font text-2xl">Hemanth Kotagiri</h2>
      <br />
      <center>
        <hr />
      </center>
      <br />
      <OldIconsList />
    </div>
  );
};

export default OldIntro;
