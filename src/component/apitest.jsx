import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, json } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Loading';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ApiTest() {

  const [responseDt, setResponseDt] = useState(null);
  const [gradeData, setGradeData] = useState(null);
  const [responseDetailDt, setResponseDetailDt] = useState(null);
  const [username, setUsername] = useState('9074498649');
  const [password, setPassword] = useState('Divya@123');
  const [rememberMe, setRememberMe] = useState(null);
  const [loginError, setLoginError] = useState(true);
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const userData = useState({
    uname: 'user1',
    pass: '12345',
    uname: 'user2',
    pass: '12345'
  });
  let findex='';
  let navigate = useNavigate();
  var path2 = '/studentdashboard';

  useEffect(() => {
    getGrade()
    localStorage.setItem('userData', JSON.stringify(userData));
  });

  const requestCounselling = () => {
    let path = '/requestcounselling'
    navigate(path);
  }

  const backTo = () => {
    console.log('Clicked ...')
  }

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
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

  const getGrade = () => {
    let dt='';
    let ww='';
    axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetGradeByStudentId?id=5')
      .then(response =>
       console.log(response.data.grade)
      )
      .catch(error => setError(error));

  }
  const studentDetail = (event) => {
    // axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetAll')
    //   .then(response => setResponseDetailDt(response.data)
    //   )
    //   .catch(error => setError(error));
    //   let index = responseDetailDt.findIndex(item => item.userName == username);
    //   findex=responseDetailDt[index].id;
    //   console.log(findex)

      // getGrade()


  }

  const handlePost = (event) => {
    event.preventDefault();

    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/Login', { 'username': username, 'password': password, 'rememberMe': rememberMe })
      .then(response => setResponseDt(response.data),
        setLoginError(true),
        navigate(path2)
      )
      .catch(error => setError(error));

    if (responseDt) {
      setLoginError(false)
      let path = '/studentdashboard'
      navigate(path);
    }
    else {
    }
    // alert('Hi')
    // studentDetail();
    // getGrade();
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
            <p className='subTitle'>Login as Student</p>
            <div className='loginForm'>
              {/* <form onSubmit={handlePost}> */}
              <form onSubmit={handlePost}>
                <fieldset>
                  <label>User Name</label>
                  <br />
                  <input type='text' className='textboxs' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' />
                </fieldset>
                <fieldset>
                  <label>Password</label>
                  <br />
                  <input type='password' className='textboxs' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                </fieldset>
                <div className='links'>
                  <input type="checkbox" id="rememberme" checked={rememberMe} onChange={handleCheckboxChange} name="rememberme" value="Remember Me"></input>
                  <label for="rememberme"> Remember Me</label>
                  <Link to="/forgotpassword"><a href='#' className='forget'>Forgot Password ?</a></Link>
                </div>
                <div className="validationError fL">
                  {!loginError ? 'Incorrect Username or Password' : ''}
                </div>
                <button type="submit" value='Login' className='signBtn'> Submit</button>
                <Link to="/studentdashboard">  </Link>
              </form>
            </div>
            <div className='noaccount'><span>Don't have an account ?</span> <Link to="/newaccount"> <a href='#'>Sign Up</a></Link></div>
          </div>
          <div className='right'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiTest;