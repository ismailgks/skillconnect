// SignUp.js
import React, { useState, useEffect } from 'react';
import './Style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './img/logo.png';
import StudentType from './img/studentType.png';
import ParentType from './img/parentType.png';
import CounsellorType from './img/counsellorType.png';
import InstitutionType from './img/institutionType.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    let navigate = useNavigate();
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isOpted, setIsOpted] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    var path2 = '/';
    const submitForm =()=>
        {
          var path3 = '/newaccount';
              navigate(path3)
        }
    const backTo = () => {
        navigate(path2);
    }

    const selectType = () => {
        navigate(path2);
        submitForm()
    }

    const optionImageSelected = () => {
        console.log('Image Clicked 123 ...')
    }

    const optionSelected = (e) => {
        let selected = e.target
        const parentLi = selected.closest('li');
        let selectParent5 = selected.parentElement
        let getIdOf = selectParent5.id
        let pid = parentLi.id
        if (pid == "option1") {
            setIsOpted(true)
            setIsActive1(!isActive1)
            setIsActive3(false)
            setIsActive4(false)
            setIsActive2(false)
        }
        else if (pid == "option2") {
            setIsOpted(true)
            setIsActive2(!isActive2)
            setIsActive3(false)
            setIsActive4(false)
            setIsActive1(false)
        }
        else if (pid == "option3") {
            setIsOpted(true)
            setIsActive3(!isActive3)
            setIsActive1(false)
            setIsActive4(false)
            setIsActive2(false)
        }
        else if (pid == "option4") {
            setIsOpted(true)
            setIsActive4(!isActive4)
            setIsActive3(false)
            setIsActive1(false)
            setIsActive2(false)
        }
    }

    useEffect(() => {
        if (!isActive1 || !isActive2) {
            setIsOpted(false)
        }
        if (isActive1 === true) {
            setIsOpted(true)
        }
        else if (isActive2 === true) {
            setIsOpted(true)
        }
        else if (isActive3 === true) {
            setIsOpted(true)
        }
        else if (isActive4 === true) {
            setIsOpted(true)
        }
    }, [isActive1, isActive2, isActive3, isActive4]);
    return (
        <div className="App">
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

                <div className='signup-content'>
                    <div className='signupTitle'>
                        <h1>Select your User type</h1>
                    </div>
                    <ul className='userType'>
                        <li id="option1" className={`my-div ${isActive1 ? 'option1 option-selected' : 'option1'}`} onClick={optionSelected} >
                            <h3>Student</h3>
                            <div className='imgWrap' onClick={optionImageSelected}>
                                <img src={StudentType} onClick={optionImageSelected} />
                            </div>
                        </li>
                        <li id="option2" className={`my-div ${isActive2 ? 'option1 option-selected' : 'option1'}`} onClick={optionSelected}>
                            <h3>Parent</h3>
                            <img src={ParentType} />
                        </li>
                        <li id="option3" className={`my-div ${isActive3 ? 'option1 option-selected' : 'option1'}`} onClick={optionSelected}>
                            <h3>Counsellor</h3>
                            <img src={CounsellorType} />
                        </li>
                        <li id="option4" className={`my-div ${isActive4 ? 'option1 option-selected' : 'option1'}`} onClick={optionSelected}>
                            <h3>Institution</h3>
                            <img src={InstitutionType} />
                        </li>
                    </ul>
                    <div className='signBtnWrap'>
                        <div className='haveAccountType'><span>Already have an account ? </span>
                            <Link to="/"><b>Sign In</b></Link>
                        </div>  <button value='Next' onClick={selectType} className={`${isOpted ? 'nextBtn' : 'nextBtn disabled'}`}>Next</button>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default SignUp;
