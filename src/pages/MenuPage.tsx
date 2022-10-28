import React from 'react';
import MenuImage from '../../src/assets/images/menuImage-removebg-preview.png';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

const MenuPage: React.FC = () => {
  return (
    <div className='menu'>
      <div className='menu-header'>
        <h1>MENU</h1>
      </div>
      <div className='grid-container'>
        <button>
          <div className='grid-container__button1'>
            <Link to='/selection' className='menu-link'>
              Select Model
            </Link>
          </div>
        </button>
        <div className='grid-container__comment1'>
          Make your RP baghouse dust collector selection
        </div>
        <button>
          <div className='grid-container__button2'>
            <ExternalLink
              href={'https://www.youtube.com/watch?v=9gIRjeQbFfk&t=238s'}
              target='_blank'
              className='external-link'
            >
              About RP
            </ExternalLink>
          </div>
        </button>
        <div className='grid-container__comment2'>
          Donaldson RP Dust Collector Video Presentation
        </div>
        <button>
          <div className='grid-container__button3'>
            <ExternalLink
              href={
                'https://www.donaldson.com/en-us/industrial-dust-fume-mist/equipment/dust-collectors/baghouse/rugged-pleat-baghouse/'
              }
              target='_blank'
              className='external-link'
            >
              Donaldson
            </ExternalLink>
          </div>
        </button>
        <div className='grid-container__comment3'>
          Visit The Donaldson Company website
        </div>
        <button>
          <div className='grid-container__button4'>
            <Link to='/login' className='menu-link'>
              Sign Out
            </Link>
          </div>
        </button>
        <div className='grid-container__comment3'>Sign Out from myRP Tool</div>
      </div>
      <img src={MenuImage} alt='Menu Page Img' className='menu__image' />
    </div>
  );
};

export default MenuPage;
