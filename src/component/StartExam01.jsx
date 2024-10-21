import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function StartExam01() {

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
            <div className="aboutExamWrapper">
              <div className='examTitleWrap'>
              <h1 className="examPackDetailTitle"><span>Exam pack</span></h1>
              <div className="startExam">
                <p><b>Start the Exam:</b> When you're ready, click on the "Start Exam" button.</p>
              <p><b>Answering Questions:</b> You will see one question at a time. Each question has 4 possible answers. Choose the one you think is correct. If you’re unsure, you can select more than one answer.</p>
              <p><b>Navigating Questions:</b> You can move to the next question by clicking the "Next" button. If you want to review or change your answers, click the "Back" button to return to previous questions. You can always go back to check and update your answers anytime during the exam.</p>
              <p><b>Time Tracker:</b> A timer will be visible at the top of the screen. It records the total time you spend on the exam. Keep an eye on it to manage your time.</p>
              <p><b>Saving Progress:</b> Don’t worry about losing your answers! The system saves your progress automatically as you go along</p>
              <p><b>Finishing the Exam:</b> Once you have answered all the questions and are satisfied with your answers, click the "Finish" button to complete the exam.</p>
              <p><b>Review Your Answers:</b> After you submit, you can view your results and check your answers in the "Exam History" section.</p>
            </div></div>
              <div className="pricePackPayment"> <button value="Login" class="btnBuyPage"> Start Exam </button></div>
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

export default StartExam01;