import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import Timer from './img/timerIco.png';
import StarIcon from './img/starIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Helpico from './img/helpIco.png';
import TimerLine from './img/timerLine.png';
import pl1 from './img/pl1.png';
import pl2 from './img/pl2.png';
import pl3 from './img/pl3.png';
import C1 from './img/Councillor1.png';
import pl4 from './img/pl4.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function SubmittedCounsellingRequest() {
  const [isActive, setIsActive] = useState(false);
  const selectedItem = (e) => {
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
              <li className='activeMenu'><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} /><span>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /><span>Exam History</span></Link></li>
            </ul>
          </div>
          <div className="content hauto">
            <div className="mailWrapper startExamWrapper bookCounsellingWrapper  hauto bookPaymentCounsellingWrapperContent">
              <div className="topbar">Counselling</div>
              <div className="bookCounsellingWrapperContent">
                <span className='examStartedTitle'>Submitted counselling request</span>
                <div className='margin2 mt-40'>
                the scheduled date and time will be displayed in your dashboard and also notified in your inbox.  You can join the session through the "Join Counselling" section.
                </div>

              </div>

              <div className="dashboardHelp effect2">
                <div className="helpIco">
                  <img src={Helpico} ></img>
                </div>
                <h3>Need help ?</h3>
                <p>if you need any help or clarification, you can reach out via email, and we will get back you soon.</p>
                <button value='Login' className='helpBtn'> Support</button>
              </div>
            </div></div>
        </div>
      </div>
    </div>
  );
}

export default SubmittedCounsellingRequest;