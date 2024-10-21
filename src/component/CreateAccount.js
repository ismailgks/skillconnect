import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PasswordStrengthMeter from './Passcheck';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { countries } from 'country-data'
import Flag from 'react-world-flags';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateAccount({ setWeatherData }) {
  let navigate = useNavigate();
  const [password, setPassword] = useState('Ismail@123');
  const [existError, setExistError] = useState(false)
  const [formData, setFormData] = useState({
    "fullName": "Ismail",
    "email": "ismail.tk8422@gmail.com",
    "country": "india",
    "countryCode": "in",
    "username": "9643343325",
    "phoneNumber": "964534095",
    "password": "Ismail@123",
    "baseUrl": "string",
    "referralCode": "string",
    "refferedByCode": "string",
    "role": "STUDENT"

  });

  const [errors, setErrors] = useState({});
  const [childData, setChildData] = useState('');
  const [isExistUsername, setIsExistUsername] = useState(false);
  const [isExistEmail, setIsExistEmail] = useState(false);
  const [outData, setOutData] = useState('');
  const [lowerCasePsw, setLowerCasePsw] = useState(false);
  const [eightCharPsw, setEightCharPsw] = useState(false);
  const [specialCharPsw, setSpecialCharPsw] = useState(false);
  const [countryName, setCountryName] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  const [text, setText] = useState('');
  const [countryCode, setCountryCode] = useState('')
  const countries = getCountries();
  const { getCode, getName } = require('country-list');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(true);
  const [responseDt, setResponseDt] = useState(null);
  const [error, setError] = useState('');
  var path2 = '/newaccount';
  const backTo = () => {
    navigate(path2)
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setIsExistEmail(false)
    setIsExistUsername(false)
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
    try {
      const response = await axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/Register/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResponseDt(response)
        .catch(error => setError(error));
      console.log(777, error)
    } catch (err) {
      setExistError(err)
      console.log(existError)
      // if(!err.response.status==409)
        var path3 = '/mobileverify';
        navigate('/mobileverify', { state: { usernamevalue: formData.username, emailvalue: formData.email }})
      // if (err.response.data.message == 'Email already exists!') {
      //   setIsExistEmail(true)
      // }
      // else if (err.response.data.message == 'User name already exists!') {
      //   setIsExistUsername(true)
      // }
      // else {
      //   setIsExistEmail(false)
      //   setIsExistUsername(false)
      // }
      // setError(err.response ? err.response.data : err.message);
    } finally {

    }

  };
  const submitForm = () => {
    const mobileNumber = 9846745651

  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    // axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/Register', formData)
    //   .then(response => setResponseDt(response.data),
    //     setLoginError(true)
    //   )
    //   .catch(error => setError(error));
    let mobile = formData.mobilenumber
    var path3 = '/mobileverify';
    navigate(path3, { state: { phonenumber: mobile } })
  };

  const CountryFlag = ({ countryCode }) => {
    return (
      <div className='flag'>
        <Flag code={countryCode} />
      </div>
    );
  };

  const countryNameCode = () => {
    setFormData((prevData) => ({
      ...prevData,
      [password]: childData,
    }));
  }

  useEffect(() => {
    var regix = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (password.length >= 8) {
      setEightCharPsw(true)
    }
    else {
      setEightCharPsw(false)
    }
    if (password.search(/[a-z]/) < 0) {
      setLowerCasePsw(false)
    }
    else {
      setLowerCasePsw(true)
    }


    setFormData((prev) => ({
      ...prev, phoneNumber: formData.username, username: formData.username, password: password
    }))


    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (isContainsSymbol.test(password)) {
      setSpecialCharPsw(true)
    }
    else {
      setSpecialCharPsw(false)
    }
    setCountryCode(getCode(countryName))
    console.log(999, responseDt)
  }, [responseDt])

  const handleDataFromChild = (data) => {
    setPassword(data);
    console.log('Your password is', password)
  };

  const sampleClick = () => {
    console.log('Clicked')
    handleDataFromChild();
  }

  const submitLogin = (e) => {
    e.stopPropagation();
    const formData = (name, email, password, countryCode)
    console.log(JSON.parse(formData))
  }
  const handleChange = (event) => {

  }
  const handleChangeSelect = (event) => {
    setSelectedCode(event.target.value);
    alert('abc ')
    setCountryName(getName(selectedCode))
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <div className="App">
      <div className="strip" onClick={countryNameCode}> {password} {formData.password}
      </div>
      <div className="wrapper">
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt="logo" title='logo' onClick={sampleClick} />
          </div>
        </div>
        <div className='createAccount'>
          <div className="sample">
          </div>
          <div className='left'>
            <h1 className='title'>Create a new account</h1>
            <div className='createNewAcForm'>
              <form onSubmit={handleSubmit2}>
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    className='textboxs reg_textbox'
                    placeholder='Full name'
                    onChange={handleChange2}
                  />
                  {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
                </div>
                <div className='mb20'>
                  <input
                    type="email"
                    id="email"
                    className='textboxs reg_textbox mb-0'
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange2}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                  {isExistEmail ? (
                    <p style={{ color: 'red' }}>Email id is already exist</p>) : ''
                  }
                </div>
                <div className='textboxs reg_textbox country-code codeItem'>
                  <CountryFlag countryCode={countryCode} />
                  <div className='countryName'>{countryName}</div>
                  <select onChange={(event) => setCountryName(getName(event.target.value))}>
                    {countries.map((country) => {
                      const code = getCountryCallingCode(country);
                      return (
                        <option key={country} value={country}>
                          ({code ? `+${code}` : 'No code'})
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="">Mobile number (username) </label>
                  <input
                    type="text"
                    className='textboxs reg_textbox mb-0'
                    id="username"
                    name="username"
                    placeholder='Mobile Number'
                    maxlength='10'
                    value={formData.username}
                    onChange={handleChange2}
                  />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                  {isExistUsername ? (
                    <p style={{ color: 'red' }}>Username is already exist</p>) : ''}
                </div>
                <div className='links must-contain'>
                  <PasswordStrengthMeter name='password' onSendData={handleDataFromChild} ></PasswordStrengthMeter>
                  <p className='progressWrapText w-100'>Must contain at least</p>
                  <div className="warn">
                    <div className={eightCharPsw ? 'passwordCorrect' : 'passwordInCorrect'}>
                      {eightCharPsw ? <FontAwesomeIcon icon={faCheck} /> : ''}
                    </div>
                    <label for="rememberme"> 8 characters</label>
                  </div>

                  <div className="warn">
                    <div className={lowerCasePsw ? 'passwordCorrect' : "passwordInCorrect"}>
                      {lowerCasePsw ? <FontAwesomeIcon icon={faCheck} /> : ''}
                    </div>
                    <label for="rememberme"> 1 lower case character</label>
                  </div>

                  <div className="warn">
                    <div className={specialCharPsw ? 'passwordCorrect' : "passwordInCorrect"}>
                      {specialCharPsw ? <FontAwesomeIcon icon={faCheck} /> : ''}
                    </div>
                    <label for="rememberme"> 1 special character</label>
                  </div>
                </div>
                <fieldset>
                  <button value='Login' className='signBtn contBtn' type='submit'> Continue</button>
                </fieldset>
              </form>
              <div className='newAccountHaveAccount'><span>Already have an account ?</span> <Link to="/"><a href='#'>Sign In</a></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;