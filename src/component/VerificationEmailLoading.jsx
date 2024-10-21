import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import EmailQVerificationStatus from './VerificationEmailStatus';

function EmailVerificationLoading() {
  const backTo = () => {
    console.log('Clicked ...')
  }

  return (
    <div className="App">
      <div className="verficationWrapper">
        </div>
      </div>
  );
}

export default EmailVerificationLoading;