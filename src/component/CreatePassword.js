import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PasswordStrengthMeter from './Passcheck';import { useNavigate } from "react-router-dom";
import WaitingBlu from './WaitingBlue';

function CreateNewPassword() {
  const navigate = useNavigate();

  const [childData, setChildData] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('ds');
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  const backTo = () => {
    navigate('/')
  }
  const submitLogin = () => {
    console.log('Loggined ...')
  }
  const handleChange = (event) => {
  }
  return (
    <div className="App">
      {/* <WaitingBlu></WaitingBlu> */}
      <div className="strip"></div>
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
            <h1 className='title'>Create a secure <br />password</h1>
            <div className='loginForm'>



              <form>
                <fieldset>
                  <PasswordStrengthMeter setPassword={setPassword} onSendData={handleDataFromChild} ></PasswordStrengthMeter>
                </fieldset>
                <fieldset>

                  <div className='links'>
                    <div className='pwdcontain'>Must contain at least</div>

                    <ul>
                      <li>
                        <div className="passwordCorrect"><FontAwesomeIcon icon={faCheck} /></div>
                        <label for="rememberme"> 8 characters</label>
                      </li>
                      <li>
                        <div className="passwordInCorrect"></div>
                        <label for="rememberme"> 1 lower case character</label>
                      </li>
                      <li>
                      <div className="passwordInCorrect"></div>
                      <label for="rememberme"> 1 lower case character</label>
                      </li>
                    </ul>
                    <div className="warn">

                    </div>

                    <div className="warn">

                    </div>

                    <div className="warn">

                    </div>

                  </div>
                  <button value='Login' className='signBtn btnPassNew' onClick={submitLogin}> Continue</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;