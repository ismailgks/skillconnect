import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';

function VerificationMobileLoading() {
  const [text, setText] = useState('');
  const backTo = () => {
    console.log('Clicked ...')
  }
  const submitLogin = () => {
    console.log('Loggined ...')
  }
  const handleChange = (event) => {
  }
  return (
    <div className="App">
      <div className="verficationWrapper">
        <div className='left'>
          <div className='header'>
            <div className='logo'>
              <img src={Logo} alt="logo" title='logo' />
            </div>
          </div>
          <h1 className='title'> Mobile Verification</h1>
          <div className='verifyForm'>{text}
            <form>

              <fieldset>  
                <input type='text' className='textboxs' placeholder='88888' />
              </fieldset>

            
            <div className='verifyText'>
            <p>We will send a 4 digit verification code on your number to confirm its you.</p>
            </div>
            <button value='Login' className='forgtBtn' onClick={submitLogin}>Sent Code</button>
            </form>
          </div>
        </div>
        <div className="right">
          <Waiting></Waiting>
          {/* <EnterOtp></EnterOtp> */}
          {/* <VerifyStatus></VerifyStatus> */}
        </div>
      </div>
    </div>
  );
}

export default VerificationMobileLoading;