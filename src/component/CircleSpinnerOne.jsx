import React, { useState } from 'react';
import './SpinnerStyle.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function CircleSpinOne() {
  const percentage = 76;
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

      </div>
    </div>
  );
}

export default CircleSpinOne;