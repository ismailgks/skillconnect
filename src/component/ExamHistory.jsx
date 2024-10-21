import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function ExamHistory() {

  let navigate = useNavigate();
  const requestCounselling = ()=>{
      let path = '/requestcounselling'
      navigate(path);
  }

  return (
    <div className="App">
        <div className="strip"></div>
      <div className="dashboardWrapper">
        <div className='dashboardHeader'>
          <div className='dashboardlogo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
          <div className="menu_wrap">
            <Link to="/studentinbox"><input type="submit" value="Inbox" className='btnInbox' /></Link>
            <a href="/studentprofile" className='userMenu'>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <Menu></Menu>
          </div>
        </div>


        <div className="contentWrapper">
          <div className="sideMenu">
            <ul>
            <li className='dashboard'><Link to="/studentdashboard">Dashboard</Link></li>
              <li><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} />  <span className='custom-padding'>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /><span>Exam History</span></Link></li>
             </ul>
          </div>
          <div className="examPackContent">
            <div className="aboutExamWrapper examAttendedWrapper">
              <div className='examTitleWrap'>
              <h1 className="examPackDetailTitle"><span>About Exam</span></h1>

              <h1 className="examPackDetailTitle mt-20"><span>All exams attended</span></h1>
              <div className="notification examPacknotification dahboardExamNotification examAttend" onClick={requestCounselling}>
                <div className='total'>
              7th
              </div>
              <div className="title02">Standard exam</div>
              <div className="attendDate">
                <div className="date-row">
                  <span>Date : </span><span>20 / 07 /2024</span>
                </div>
                <div className="date-row">
                  <span>Time : </span><span>11 : 12 am</span>
                </div>
              <div className="nextIco">
                <a href=''>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
              </div>
              </div>
              </div>
            </div>
            </div>


            <div className="dashboardHelp effect2">
              <h3>Need help ?</h3>
              <p>if you need any help or clarification, you can reach out via email, and we will get back you soon.</p>
              <button value='Login' className='helpBtn'> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamHistory;