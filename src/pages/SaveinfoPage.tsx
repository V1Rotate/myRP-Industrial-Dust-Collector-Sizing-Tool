import React from 'react';
import ApplicationImage from '../../src/assets/images/application.jpg';
import { Link } from 'react-router-dom';

const SaveinfoPage: React.FC = () => {
  const print = () => {
    window.print();
  };

  return (
    <div className='save'>
      <div className='save-header'>
        <h1>SELECTION NOTES</h1>
      </div>
      <div className='save-grid'>
        <div className='save-grid__item'>Project Name</div>
        <div className='save-grid__item'>
          <input type='text' placeholder='What is the name of your project?' />
        </div>
        <div className='save-grid__item'>Customer Name</div>
        <div className='save-grid__item'>
          <input type='text' placeholder='What is your customer name?' />
        </div>
        <div className='save-grid__item'>Customer Location</div>
        <div className='save-grid__item'>
          <input type='text' placeholder='Where is the job site located?' />
        </div>
        <div className='save-grid__item'>RP Model Selected</div>
        <div className='save-grid__item'>
          <input
            type='text'
            placeholder='Which RP Dust Collector model selected?'
          />
        </div>
        <div className='save-grid__item'>Type of Application</div>
        <div className='save-grid__item'>
          <input
            type='text'
            placeholder='What is the process that is generating dust?'
          />
        </div>
        <div className='save-grid__item'>Additional notes</div>
        <div className='save-grid__item additionalNotes'>
          <textarea name='additionalnotes' value='...' />
        </div>
      </div>
      <div className='save-buttons'>
        <button className='save-buttons__select saveBtn' onClick={print}>
          <div>Print</div>
        </button>

        <button className='save-buttons__back saveBtn'>
          <div>
            <Link to='/selection' className='save-link '>
              Back
            </Link>
          </div>
        </button>
        <button className='save-buttons__signOut saveBtn'>
          <div>
            <Link to='/' className='save-link'>
              Sign Out
            </Link>
          </div>
        </button>
      </div>
      <img
        src={ApplicationImage}
        alt='Dust Collector Applicatio'
        className='save__image'
      />
    </div>
  );
};
export default SaveinfoPage;
