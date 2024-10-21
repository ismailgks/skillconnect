// src/components/ChangePasswd.js
import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './PasswordStrengthMater.css'; // Import the CSS file for styling

const ChangePasswd = ({ onStatesChange }) => {
  const [passwordText, setPasswordText] = useState('');
  const [passwordMatch, setPasswordMatch] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');
  const [strength, setStrength] = useState(0);
  const [width, setWidth] = useState(0);
  const [message, setMessage] = useState('');
  const [validation, setValidation] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confPwd, setConfPwd] = useState('');
  const [formData, setFormData] = useState({
    userName: '111',
    currentPassword: '228',
    newPassword: '333'
  });

  useEffect(() => {
    getStrengthWidth();
    if (newPwd == confPwd) {
      setMessage('')
      setValidation(false)
    }
    else {
      setValidation(true)
      setMessage('Password do not match.')
    }
  });
  const evaluatePassword = (password) => {
    const result = zxcvbn(password);
    return result.score;
  };

  const handleCurrentChange = (event) => {
    const currentPwd = event.target.value;
    setCurrentPassword(currentPwd)
  }
  const handleNewChange = (event) => {
    const newPassword = event.target.value;
    setNewPwd(newPassword)
  }
  const handleCnfChange = (event) => {
    const pwdText = event.target.value;
    setConfPwd(pwdText)
    console.log(confPwd)
    // console.log(currentPwd)
  }
  const handleChange = (event) => {
    setStatus(getStrengthStatus())
    const passwordText = event.target.value;
    setPasswordText(passwordText);
    const score = evaluatePassword(passwordText);
    setStrength(score);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
      case 1:
        return '#da5a5a';
      case 2:
        return '#e9c055';
      case 3:
        return '#bbca56'
      default:
        return 'lightgray';
    }
  };

  const getStrengthStatus = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Strong';
      case 3:
        return 'Excellent';
      default:
        return 'Weak';
    }
  };

  const getStrengthWidth = () => {
    if (getStrengthColor() == 'red') {
      setWidth(33)
      setStatus('Weak')
    }
    else if (getStrengthColor() == 'orange') {
      setWidth(66)
      setStatus('Strong')
    }
    else if (getStrengthColor() == 'green') {
      setWidth(100)
      setStatus('Excellent')
    }
  }

  const handleToggle = () => {
    setShowPassword1(!showPassword1);
  };
  const handleToggle2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleToggle3 = () => {
    setShowPassword3(!showPassword3);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
  };

  const validatePasswords = () => {
    console.log(passwordText, confirmPassword)
  };

  const handlePasswordChange = (e) => {
    setPasswordText(e.target.value);
    validatePasswords();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords();

    if (confirmPassword == newPwd) {
      console.log('Success..')
      onStatesChange(newPwd, currentPassword);
    }
    else {

    }

  };
  return (
    <div>
      <fieldset className='passwordEye'>
        <label htmlFor="">Enter current password</label>
        <input
          type={showPassword1 ? 'text' : 'password'}
          name='password'
          value={currentPassword}
          onChange={handleCurrentChange}
          placeholder="Enter your password"
          className='textboxs reg_textbox mt-8 fL cstmpwd'
          maxLength={10}
        />
        <span class="password-toggle-icon" onClick={handleToggle}><FontAwesomeIcon icon={faEyeSlash} /></span>
      </fieldset>
      <fieldset className='passwordEye'>
        <label htmlFor="">Enter new password {newPwd}</label>
        <input
          type={showPassword2 ? 'text' : 'password'}
          name='password'
          value={newPwd}
          onChange={handleNewChange}
          placeholder="Enter your password"
          className='textboxs reg_textbox mt-8 fL cstmpwd'
          maxLength={10}
        />
        <span class="password-toggle-icon" onClick={handleToggle2}><FontAwesomeIcon icon={faEyeSlash} /></span>
      </fieldset>
      <fieldset className='passwordEye'>
        <label htmlFor="">Confirm password</label>
        <input type={showPassword3 ? 'text' : 'password'} className='textboxs reg_textbox mt-8 fL cstmpwd' placeholder='Confirm password' value={confPwd}
        onChange={handleCnfChange} />
        <span class="password-toggle-icon" onClick={handleToggle3}><FontAwesomeIcon icon={faEyeSlash} /></span>
        <p style={{ color: 'red', float: 'left', fontSize: '12' }}>{validation ? message : ''}</p>
      </fieldset>
      <div className='stWrap'>
        <p className='progressWrapText'>Password strength</p>
        <div className="progress-container">
          <div className='ProgressWrapper'>
            <div
              className="progress-bar"
              style={{
                width: `${(strength / 3) * 100}%`,
                backgroundColor: getStrengthColor()
              }}
            />
            <div className="strength-label" style={{ backgroundColor: getStrengthColor(), width: width, borderRadius: 10, height: 8, marginTop: 15 }}>
            </div>
          </div>
        </div>
        <div className='passwordStatus'> {status} </div>
      </div>
    </div>
  );
};

export default ChangePasswd;
