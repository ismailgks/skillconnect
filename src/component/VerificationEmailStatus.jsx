import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Waiting from './Loading';
import EmailpVerificationStatus from './Upload.js';

function EmailQVerificationStatus() {
  let navigate = useNavigate();
  const [text, setText] = useState('');
  const [formData, setFormData] = useState({
    userName: '111',
    currentPassword: '228',
    newPassword: '333'
  });


  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const backTo = () => {
    console.log('Clicked ...')
  }

  const submitLogin = () => {
    console.log('Loggined ...')
  }

  const handleChange = (event) => {
  }

  const completeStudent = () => {
    let path = '/stdProfileComplt'
    navigate(path);
  }

  return (
    <div className="App">
        <div className="strip"></div>
      <div className="verficationWrapper">
        <div className='left'>
          <div className='header'>
            <div className='logo'>
              <img src={Logo} alt="logo" title='logo' />
            </div>
          </div>
          <h1 className='title'> Email Verification</h1>
          <div className='verifyForm'>{text}
            <form>

              <fieldset>
                <input type='text' className='textboxs' placeholder='88888' />
              </fieldset>


            <div className='verifyText'>
            <p>Successfully verified.</p>
            </div>
            <button value='Login' className='forgtBtn' onClick={completeStudent}>Next</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EmailQVerificationStatus;