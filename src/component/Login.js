import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, json } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Loading';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

  const [gradeData, setGradeData] = useState(null);
  const [responseDetailDt, setResponseDetailDt] = useState(null);
  const [username, setUsername] = useState('9074498649');
  const [loginData, setLoginData] = useState({});
  const [password, setPassword] = useState('Divya@123');
  const [rememberMe, setRememberMe] = useState(true);
  const [token, setToken] = useState('');
  const [token131, setToken131] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTA3NDQ5ODY0OSIsImp0aSI6IjllOTQ2MGUxLTU5ZWQtNGQzMC05ZGZjLWVhY2E5NjJiYWMyNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMzczZDQ5YzEtMGM4OS00MjQ4LTgxNjUtNDM0MDI1ZTQwMWEwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU1RVREVOVCIsImV4cCI6MTcyODk2ODM1NX0.C2RPjRO5kvX7nBz_tW2FU64pSHsIAeZq0jl38edWPGg');
  const [currentUser, setCurrentUser] = useState({});
  const [loginError, setLoginError] = useState(false);
  const [responseDt, setResponseDt] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loginToken, setLoginToken] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  let tokenq = ''

  let token2 = 'lk';
  let findex = '';
  let navigate = useNavigate();
  var path2 = '/stdProfileComplt';
  // var path2 = '/studentdashboard';
  useEffect(() => {
    setCurrentUser(prevCurrentUser => currentUser)
    console.log(77,currentUser)
    setLoginData(prevLoginData => loginData)
    console.log(444, loginData)

    if (loginData) {
      localStorage.setItem('AccessToken', loginData.token);
      localStorage.setItem('UserID', currentUser.id);
      localStorage.setItem('UserName', currentUser.userName);
      localStorage.setItem('Name', currentUser.fullName);
      localStorage.setItem('RefreshToken', loginData.refreshToken);
      setLoginError(false)
      setAccessToken(loginData.token)
      console.log(1123456, loginData.token)
      let path = '/studentdashboard'
      // navigate(path);
    }


  });

  const getCurrentUser = () => {
    console.log(accessToken)

    console.log('ozzz', currentUser)
    console.log(444,currentUser)
    // localStorage.setItem('userId', gradeData.id);
    // localStorage.setItem('fullName', gradeData.fullName);
    // localStorage.setItem('userName', gradeData.userName);
    // localStorage.setItem('email', gradeData.email);
    // localStorage.setItem('id', gradeData.user_id);

  }

  const requestCounselling = () => {
    let path = '/requestcounselling'
    navigate(path);
  }

  const backTo = () => {
    console.log('Clicked ...')
  }

  const handleCheckboxChange = (event) => {
    setRememberMe(true);
  };

  const submitLogin = (e) => {

    e.preventDefault();
    if (!username || !password) {
      alert('Both fields are required');
      return;
    }
    if (username == 'user1' && password == '12345') {
      console.log('Loggined ...')
      let path = '/studentdashboard'
      navigate(path);
    }
    else {
      alert('Incorrect Username or password.');
    }
  }


  const studentDetail = (event) => {
    // axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetAll')
    //   .then(response => setResponseDetailDt(response.data)
    //   )
    //   .catch(error => setError(error));
    //   let index = responseDetailDt.findIndex(item => item.userName == username);
    //   findex=responseDetailDt[index].id;
    //   console.log(findex)

  }
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const handlePost = (event) => {
    event.preventDefault();
    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/Login/Login', { 'username': username, 'password': password, 'rememberMe': rememberMe })
      .then(response =>
        // setLoginToken(response.data.token),
        setLoginData(response.data)
      )
      .catch(error => setError(error));

    // getCurrentUser();

    console.log(112,loginData)
    if (loginData) {
    localStorage.setItem('UzerId', 123456789);
      setLoginError(false)
      const timer = setTimeout(() => {
      let path = '/studentdashboard'
      navigate(path);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
    }
    else {
    }
    // alert('Hi')
    // studentDetail();
    // console.log(loginData)
    // console.log(1123,loginToken)
    // console.log(222,loginData.token)

    // if(loginData.token) {
    //   navigate(loginData)
    //   localStorage.setItem('tokenQQ', loginToken);
    // }
    // else {
    //   console.log('Not . .')
    // }

  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
          <div className='backtoWrap'>
            <button className='backtoweb' onClick={backTo}>
              <FontAwesomeIcon icon={faAngleLeft} /> Back to website {findex}
            </button>
          </div>
        </div>
        <div className='content'>
          <div className='left'>
            <h1 className='title'>Hello,<br />Welcome to Skills Connect</h1>
            <div className='loginForm'>
              <form onSubmit={handlePost}>
                {/* <form onSubmit={handlePost}> */}
                <fieldset className="fieldSetDefault">
                  <label>User Name</label>
                  <br />
                  <input type='text' className='textboxs' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' />
                </fieldset>
                <fieldset className="fieldSetDefault">
                  <label>Password</label>
                  <br />
                  <input type={showPassword ? 'text' : 'password'} className='textboxs' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                  <span class="login-password-toggle-icon" onClick={handleToggle}><FontAwesomeIcon icon={faEyeSlash} /></span>
                </fieldset>

                <div className='links'>
                  <div className="rememberWrap">
                    <input type="checkbox" id="rememberme" name="rememberme" value="Remember Me"></input>
                    <label for="rememberme"> Remember Me</label>
                  </div>
                  <Link to="/forgotpassword"><span className='forget'>Forgot Password ?</span></Link>
                </div>
                <div className="validationError fL">
                  {loginError ? 'Incorrect Username or Password' : ''}
                </div>
                <button type="submit" value='Login' className='loginBtn'> Login </button>
              </form>
            </div>
            <div className='noaccount ml-0'><span>Don't have an account ?</span> <Link to="/signup"> <a href='#'>Sign Up</a></Link></div>
          </div>
          <div className='right'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;