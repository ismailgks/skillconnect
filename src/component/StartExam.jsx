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
import Menu from './menuDashboard';
import EnterOtp from './EnterOtp';
import { useNavigate } from "react-router-dom";
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function StartExam() {
  const location = useLocation();
  // const emailReceive = JSON.stringify(location.state?.data.email);
  // console.log(11,emailReceive[0])
  const [activeMenu, setActiveMenu] = useState(false);
  let navigate = useNavigate();
  const StartingExam =()=>{
    let path = '/startedexam'
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
            <li className={activeMenu?'dashboardNew dashboardNewActive':'counsellingNew'}><Link to="/studentdashboard"><span className='custom-padding'>Dashboard</span></Link></li>
              <li className='counsellingNew'><Link to="/aboutcounselling"><span className='custom-padding'>Counselling</span></Link></li>
              <li className='counsellingNew examhistoryNew'><Link to="/examhistory"><span className='custom-padding'>Exam History</span></Link></li>
</ul>
          </div>
          <div className="content hauto">
            <div className="mailWrapper startExamWrapper">
            <span className='backLink mb-15'>
            <Link to="/studentdashboard"><FontAwesomeIcon icon={faArrowLeft} /> <span>Exam</span></Link> </span>
              <div className="examStartTitle"><b>Exam procedure</b></div>
              <div className='margin2'><b>Start the Exam:</b> When you're ready, click on the "Start Exam" button.</div>

              <div className="examAnswer">
              <b>Answering Questions:</b>
              <ul className='startExam'>
                <li>You will see one question at a time. </li>
                <li>Each question has 4 possible answers. </li>
                <li>Choose the one you think is correct. If you’re unsure, you can select more than one answer.</li>
              </ul>
              </div>

              <div className='mx-2'>
                <b>Navigating Questions:</b>
                <ul className='startExam'>
                <li>You can move to the next question by clicking the "Next" button. </li>
                <li> If you want to review or change your answers, click the "Back" button to return to previous questions. </li>
                <li>You can always go back to check and update your answers anytime during the exam.</li></ul></div>

              <div className='mx-2'>
                <b>Time Tracker</b>
                <ul className='startExam'>
                <li>A timer will be visible at the top of the screen. </li>
                <li>It records the total time you spend on the exam </li>
                <li>Keep an eye on it to manage your time.</li></ul></div>
              <div className='mx-2'>
                <b>Saving Progress</b>
                <ul className='startExam'>
                <li>Don’t worry about losing your answers! The system saves your progress automatically as you go along. </li>
                </ul>
                </div>
              <div className='mx-2'>
                <b>Finishing the Exam:</b>
                <ul className='startExam'>
                <li>Once you have answered all the questions and are satisfied with your answers, click the "Finish" button to complete the exam. </li>
                </ul>
                </div>
                <button className="btnJoinCounsel" onClick={StartingExam}>Start Exam</button>
                </div>
                <div className="dashboardHelp effect2">
              <div className="helpIco">
                <img src={Helpico} ></img>
              </div>
              <h3>Need help ?</h3>
              <p>if you need any help or clarification, you can reach out via email, and we will get back you soon.</p>
              <button value='Login' className='helpBtn'> Support</button>

            </div>

            </div>
        </div>



      </div>
    </div>
  );
}

export default StartExam;