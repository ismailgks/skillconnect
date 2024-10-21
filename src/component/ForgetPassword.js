import './Style.css';
import React, { useState, useEffect } from "react";
import Logo from './img/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AutoLoading from './AutoLoading';

function ForgetPassword() {
  const navigate = useNavigate();
  var base5 = 'http://192.168.4.97:3000/forgotpassword';
  const [error, setError] = useState('');
  const [forgetPwdMail, setForgetPwdMail] = useState('');
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: 0,
    email: "ismail.tk18@gmail.com",
    userName: "9645124005",
    userId: "",
    token: "",
    baseurl: "",
    name: ""
  });
  const backTo = () => {
    navigate('/')
  }
  const submitLogin = () => {
    console.log('Loggined ...')
  }
  // const forgtPass = () => {
  //   // navigate('/startexam', {email: 'ismail@gmail.com'})
  //   const data = { email: forgetPwdMail };
  //   navigate('/startexam', { state: { data }});
  // }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      console.log(loading);
    }, 1000);
    return () => clearTimeout(timer);
    setForgetPwdMail(forgetPwdMail)
  })
  const checkMail = () => {
    let data =
      axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/ForgotPassword', { formData })
        .then(response =>
          console.log(response)
        )
        .catch(error => setError(error));

    let path = '/checkemail'
    const item = { email: forgetPwdMail };
    navigate(path, { state: { item } });
  }
  return (
    <div className="App">
      {loading ? <AutoLoading></AutoLoading> : ''}
      <div className="wrapper">
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
          <div className='backtoWrap'>
            <button className='backtoweb' onClick={backTo}>
              <FontAwesomeIcon icon={faAngleLeft} /> Back to Login
            </button>
          </div>
        </div>
        <div className='forgetContent'>
          <div className='left'>
            <h1 className='title'>Forgot your <br />password?</h1>
            <p className='forgetpassword'>No worries! We’ll send a password reset link to your registered email address once you confirm the forget password option</p>
            <p className='enteremailspan fL'>
              Please enter your registered email address or username
            </p>
            <div>
              <input type='text' placeholder='Enter your registered email address or username' onChange={(e) => setForgetPwdMail(e.target.value)} className='forgetemailtextbox fL' value={forgetPwdMail}>
              </input>
              <button value='Login' className='forgtBtn fL' onClick={checkMail}>Forget Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;