import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";
import PasswordStrengthMeter from './Passcheck';

const RegForm = () => {
  const [formData, setFormData] = useState({
    name: 'Ism',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    baseUrl: '',
    country: 'india',
    countryCode: 'IN'
  });
  let navigate = useNavigate();
  let loginPath = '/'
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleDataFromChild = (data) => {
    setPassword(data)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/SignUp', formData);
      setResponse(res.data);
      navigate(loginPath);

    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
<div>
          <input
            type="text"
            name="username"
            className='textboxs fL mt-10'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
          />
</div>
<div>
          <input
            type="password"
            name="password"
            className='textboxs fL mt-10'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          /></div>
          <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder='Phone Number'
            className='textboxs fL mt-10'
            value={formData.phoneNumber}
            onChange={handleChange}
          /></div>
          <div>

          <input
            type="email"
            name="email"
            className='textboxs mt-10 fL'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          <PasswordStrengthMeter name='password' setPassword={setPassword} onSendData={handleDataFromChild} ></PasswordStrengthMeter>


        <button type="submit" className='signBtn fR mt-10 btnRegister'>Submit</button>
        <div className='links'>
                  <div className="warn">
                    <div className="passwordCorrect"><FontAwesomeIcon icon={faCheck} /></div>
                    <label for="rememberme"> 8 characters</label>
                  </div>

                  <div className="warn">
                    <div className="passwordInCorrect"></div>
                    <label for="rememberme"> 1 lower case character</label>
                  </div>

                  <div className="warn">
                    <div className="passwordInCorrect"></div>
                    <label for="rememberme"> 1 lower case character</label>
                  </div>
                </div>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default RegForm;
