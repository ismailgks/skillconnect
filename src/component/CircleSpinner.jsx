import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const buyMore=()=>{
  alert('Got 100 packs!!')
}
function CircleSpinner() {
  const percentage = 50;
  const percentage1 = 70;
  const percentage2 = 100;
  return (
    <div className="App">
      <div className="spinnerWrapper">
        <div className="wrapSpin spin1">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 15, 15)`,
              textColor: '#f88',
              trailColor: '#fff',
              backgroundColor: '#ccc',
            })}
          />
          <div className='dataPercent'>{percentage}</div>
        </div>
        <div className="wrapSpin spin2">
          <CircularProgressbar
            value={percentage1}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(11, 255, 157, ${percentage1 / 100})`,
              textColor: '#f88',
              trailColor: '#fff',
              backgroundColor: '#ccc',
            })}
          />
          <div className='dataPercent'>{percentage1}</div>
        </div>
        <div className="wrapSpin spin3">
          <CircularProgressbar
            value={percentage2}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 120, 11, ${percentage2 / 100})`,
              textColor: '#f88',
              trailColor: '#fff',
              backgroundColor: '#ccc',
            })}
          />
          <div className='dataPercent'>{percentage2}</div>
        </div>

        <button value='Buymore' className='buttonTheme' onClick={buyMore}> Buy more </button>
      </div>
    </div>
  );
}

export default CircleSpinner;