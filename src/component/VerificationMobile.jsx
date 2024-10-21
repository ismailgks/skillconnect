import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import WaitingWhite from './waiting-white';
import { useLocation } from 'react-router-dom';
import Waitingz from './EnterOtp';
import MobileVerificationStatus from './VerificationMobileStatus';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function MobileVerification() {
  let navigate = useNavigate();
  const location = useLocation();
  const usernamevalue = location.state?.usernamevalue || "No value passed";
  const emailvalue = location.state?.emailvalue || "No email passed";
  const [text, setText] = useState('');
  const [childData, setChildData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enterotp, setEnterotp] = useState(false);
  const [responseDt, setResponseDt] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
    let mobile = '9645124005'

  let username = 9645124005 //numbervalue;
  const handleDataFromChild = (data) => {
    setChildData(data);
    alert('otp is:',data)
    setEnterotp(false);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/master/Otp/SendOtp', { 'username': usernamevalue })
      .then(response => setResponseDt('err', response.error),
        // console.log(responseDt)
      )
      .catch(error => setError(error));

  }

  const backTo = () => {
    console.log('Clicked ...')
  }

  const sentOTPCode = (e) => {
    e.preventDefault();

    // var path3 = '/emailverify';
    // navigate(path3, { state: { username: usernamevalue, email: emailvalue } })

    setLoading(true)
    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/master/Otp/SendOtp?username='+usernamevalue)
    const timer = setTimeout(() => {
      setLoading(false);
      setEnterotp(true)
    }, 3000);
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
          <div className='verifyForm'>
            <form>
              <fieldset>
                <input type='text' className='textboxs' placeholder='88888' value={usernamevalue} />
              </fieldset>
              <div className='verifyText'>
                <p>We will send a 6 digit verification code on your number to confirm its you.</p>
              </div>
              <button value='Login' className={!enterotp ? 'forgtBtn' : 'btnDisable'} onClick={sentOTPCode}>Sent Code</button>
            </form>
          </div>
        </div>
        <div className="mobileVerificationRight"> <div className='spinner-bg'>
          {loading ? <Waiting></Waiting> : ''}
          {/* <Waiting></Waiting> */}
        </div>
          {enterotp ? <EnterOtp sendDataToParent={handleDataFromChild}></EnterOtp> : ''}

          {childData ? <MobileVerificationStatus></MobileVerificationStatus> : ''}
          {/* <Waiting></Waiting> */}
          {/* {loading?<VerifyStatus></VerifyStatus>:''} */}
        </div>
      </div>
    </div>
  );
}

export default MobileVerification;