// Spinner.js
import React, { useEffect } from 'react';
import './Style.css';
import tick from './img/successtick.png';
import { useNavigate } from "react-router-dom";

const VerifyStatus = () => {

  let navigate = useNavigate();
  const directToLogin = () => {
    let path = '/splash'
    navigate(path);
  }
    useEffect(() => {
        const timer = setTimeout(() => {
            directToLogin()
        }, 2000);
      })
    return (
        <div className='otpWrapper statusWrapper verifyEmailStatusWrapper'>
            <h2>Mobile Verification Successful</h2>
            <div className='statustick'>
               <img src={tick} />
            </div>
        </div>
    )
};

export default VerifyStatus;
