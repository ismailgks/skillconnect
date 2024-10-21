import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import EmailVerificationStatus from './Upload.js';
import EmailVerifyStatus from './EmailVerificationStatus.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import WaitingWhite from './WaitingWhite';
import { useLocation } from 'react-router-dom';
function EmailVerificationStart() {
  const location = useLocation();
  const emailvalue = location.state?.email || "No value passed";
  const numbervalue = location.state?.username || "No value passed";
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [otpSend, setOtpSend] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    email: '',
    userName: "9074498649",
    token: '',
    baseurl: 'http://192.168.4.97:3000/emailverify',
    name: ''
  });
  const [confirmFormData, setConfirmFormData] = useState({
    "email": emailvalue,
    "userName": numbervalue
  });
  const backTo = () => {
    let path2 = '/'
    navigate(path2);
  }
  useEffect(() => {
    if(success){

    }
    setFormData(prevState => ({
      ...prevState,
      email: emailvalue
    }));
    const verifySuccess = setTimeout(() => {
      setSuccess(false)
      let path = '/'
      navigate(path);
    }, 5000)
    const timer = setTimeout(() => {
      setOtpSend(false);
      setSuccess(true)
    }, 3000);

    return () => clearTimeout(timer,verifySuccess);
  },[])
  const EmailOtpSend = (e) => {
    e.preventDefault();
    console.log(otpSend)
    setOtpSend(true)
    setSuccess(true)
    console.log(otpSend)


    const timer2 = setTimeout(() => {
      setSuccess(false)
      let path = '/'
      navigate(path);
    }, 6000);
  }

  const sentCode = (e) => {
    e.preventDefault()
    setOtpSend(true)
    // let path2 = '/mobileverify';

    // navigate(path2, { state: {value:numbervalue}});

    // let path = '/stdProfileComplt'
    // navigate(path);



// setFormData({
//   id: 0,
//   email: "ismail18@gmail.com",
//   userName: "5554445556",
//   userId: "",
//   token: "",
//   baseurl: "",
//   name: 'Ismail'
//     });



    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/SendEmailVerify', formData)
      .then(response =>
        console.log(response)
      )
      .catch(error => setError(error));







      axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/ConfirmEmail', confirmFormData, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response =>
          setConfirmFormData(response.data)
        )
        .catch(error => setError(error));
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
          <h1 className='title'> Email Verification </h1>
          <div className='verifyForm'>
            <form>
              <fieldset>
                <input type='text' className='textboxs' value={emailvalue} placeholder='name@gmail.com' />
              </fieldset>
              <div className='verifyText'>
                <p>We will send a verification link to your email to confirm it's you.</p>
              </div>
              <button value='Login' type='' className='forgtBtn' onClick={sentCode}>Sent Code</button>

            </form>
          </div>
        </div>
        <div className="emailVerifyRight">
          {otpSend ? <WaitingWhite></WaitingWhite> : ''}
          {success ? <EmailVerifyStatus></EmailVerifyStatus> : ''}
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationStart;