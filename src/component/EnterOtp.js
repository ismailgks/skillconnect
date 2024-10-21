// Spinner.js
import React, { useState } from 'react';
import './Style.css';
import Logo from './img/loading.png';
import axios from 'axios';

const Waitingz = ({ sendDataToParent }) => {

    const [enterotp, setEnterotp] = useState(false);
    const [responseDt, setResponseDt] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [otpText, setOtpText] = useState('');
    const [otpInputs, setOtpInputs] = useState({});
    let username = '9645124005'
    let otp = '589747'

    const otpChange = (e) => {
        setOtpText(e.target.value)
    }

    const handleKeyDown = (event) => {

        if (event.key === 'Enter') {

        // let fOtp = otpText
        // alert('Your Otp is: ',fOtp)
        // axios.post('https://dev-skillsconnectgateway.onzitr.com/api/master/Otp/VerifyOtp?username=' + username + '&' + 'otp=' + otpText)


        // if (event.key === 'Enter') {
        //     sendDataToParent(true);
        // }
        }

    }
    return (
        <div className='otpmainwrap'>
            <div className='otpWrapper'>
                <h1>Enter Code</h1>
                <span>Code is sent to {username}</span>
                <div className='otpWrap'>
                    <div>
                        <input type='text' maxLength={6} onChange={otpChange} onKeyDown={handleKeyDown} id='otp1' />
                    </div>
                </div>
                <span className='shortNote'>Didn't receive a code? <a href='#'>Resend</a></span>
            </div>
        </div>
    )
};

export default Waitingz;
