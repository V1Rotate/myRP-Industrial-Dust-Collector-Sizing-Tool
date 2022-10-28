import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

import welcomeVideo from '../assets/video/rpvideo.mp4';

const WelcomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <div className='welcomePage'>
      <div className='modal'>
        <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)} />
      </div>
      <div className='overlay' />
      <video src={welcomeVideo} autoPlay loop muted />
      <div className='content-wrapper'>
        <div className='content'>
          <div className='content-header'>
            <h1>Donaldson myRP Tool</h1>
          </div>
          <button className='welcomeBtn'>
            <Link to='/login' className='welcomeBtn__continue'>
              Continue
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
