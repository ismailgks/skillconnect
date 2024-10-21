// src/components/PasswordStrengthMeter.js
import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './PasswordStrengthMater.css'; // Import the CSS file for styling

const PasswordStrengthMeter = ({ onSendData }) => {
  const [passwordText, setPasswordText] = useState('');
  const [passwordMatch, setPasswordMatch] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');
  const [strength, setStrength] = useState(0);
  const [width, setWidth] = useState(0);
  const [message, setMessage] = useState('');
  const [validation, setValidation] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    getStrengthWidth();
    if (confirmPassword == passwordText) {
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

  const handleChange = (e) => {
    setStatus(getStrengthStatus())
    const passwordText = e.target.value;
    setPasswordText(passwordText);
    const score = evaluatePassword(passwordText);
    setStrength(score);
    onSendData(passwordText);
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
    setShowPassword(!showPassword);
  };
  const handleToggle2 = () => {
    setShowPassword2(!showPassword2);
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

    if (confirmPassword == passwordText) {
      console.log('Success', passwordText)

    }
    else {
    }

  };
  return (
    <div>
      <fieldset className='passwordEye'>
        <label htmlFor="">Enter password</label>
        <input type={showPassword ? 'text' : 'password'} name='password' value={passwordText} onChange={handleChange}
          placeholder="Enter your password" className='textboxs reg_textbox mt-8 fL cstmpwd' maxLength={10}
        />
        <span class="password-toggle-icon" onClick={handleToggle}><FontAwesomeIcon icon={faEyeSlash} /></span>
      </fieldset>
      <fieldset className='passwordEye'>
        <label htmlFor="">Confirm password</label>
        <input type={showPassword2 ? 'text' : 'password'} className='textboxs reg_textbox mt-8 fL cstmpwd' placeholder='Confirm password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
        <span class="password-toggle-icon" onClick={handleToggle2}><FontAwesomeIcon icon={faEyeSlash} /></span>
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

export default PasswordStrengthMeter;
