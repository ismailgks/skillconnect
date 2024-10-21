import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import SplashScreenLogo from './img/splash-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const [text, setText] = useState('');
  let navigate = useNavigate();
  const directToLogin = () => {
    let path = '/'
    navigate(path);
  }
    useEffect(() => {
        const timer = setTimeout(() => {
            directToLogin()
        }, 1000);
      })
  return (
    <div className="App">
      <div className="splashScreen">
        <img src={SplashScreenLogo} />
      </div>
    </div>
  );
}

export default SplashScreen;