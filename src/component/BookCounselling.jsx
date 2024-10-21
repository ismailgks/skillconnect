import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import Timer from './img/timerIco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Helpico from './img/helpIco.png';
import TimerLine from './img/timerLine.png';
import pl1 from './img/pl1.png';
import pl2 from './img/pl2.png';
import pl3 from './img/pl3.png';
import pl4 from './img/pl4.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Menu from './menuDashboard';

function BookCounselling() {
const [isActive, setIsActive] = useState(false);
const selectedItem=(e)=>{
}
let navigate = useNavigate();
const chooseCounsellor =()=>{
  let path = '/choosecounsellor'
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
              <li className='activeMenu'><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} /><span>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /><span>Exam History</span></Link></li>
            </ul>
          </div>
          <div className="content hauto">
            <div className="mailWrapper startExamWrapper bookCounsellingWrapper ">
              <div className="topbar">Counselling</div>
              <div className="bookCounsellingWrapperContent">
              <span className='examStartedTitle'>Book Counselling</span>
              <div className='margin2'>
              You can book counselling sessions by choosing available counsellors and filtering by location and language proficiency. Counsellors will set their own availability, and once a time slot is booked, it will be marked as unavailable. After making the payment, the scheduled date and time will be displayed on your dashboard and notified in your inbox. <br /> <br /> You can join the counselling session by clicking the "Join" button from the dashboard, or it will be updated here.

              </div>
              <div className='requestCounsellingText'><b>Request counselling</b></div>
                <button className="btnChooseCounsellor" onClick={chooseCounsellor}>Choose Counsellor</button>
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

export default BookCounselling;