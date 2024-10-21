import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Helpico from './img/helpIco.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import { useNavigate } from "react-router-dom";
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function FinishExam() {
  let navigate = useNavigate();
const reqCounsel =()=> {
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
              <li><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} /><span>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /></Link><span>Exam History</span></li>
            </ul>
          </div>
          <div className="content hauto">
            <div className="mailWrapper startExamWrapper">
              <span className='backLink'>
                <Link to="/studentdashboard"><FontAwesomeIcon icon={faArrowLeft} /> <span>Exam</span></Link> </span>
              <div className="finishExamTitle">Congratulation</div>
              <div className="finishExamSubtitle">Completed exams</div>
              <div className='margin2'><b>We are thrilled to acknowledge your hard work and dedication. Completing an exam is a significant achievement, and you should be proud of your efforts.</b></div>
              <div className="examAnswer">
                <div className='nextStepTitle'>Next Steps</div>
                Free 15-Minute Counselling Session: You are eligible for a complimentary 15-minute counselling session with a certified counsellor. This session will help you review your exam results, receive constructive feedback, and understand areas for improvement.
              </div>
              <div className="examAnswer">
                Book Additional Sessions: For more in-depth support, consider booking additional paid counselling sessions. These sessions will allow you to dive deeper into your results, discuss strategies for academic growth, and explore potential career paths.
              </div>
              <div className="btnCounselWrap m75">
                <button className="btnRequestCounsel" onClick={reqCounsel}>Request counseling</button>
              </div>
              <div className='mx-2 examCompleteFooter'>
                <b>Once again, congratulations on your accomplishment! We wish you continued success in your educational journey.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishExam;