import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import Timer from './img/timerIco.png';
import StarIcon from './img/starIcon.png';
import StarRating from './img/starrating.png';
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

import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';

function AttendedCounselling() {
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
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /></Link><span>Exam History</span></li>
            </ul>
          </div>
          <div className="content hauto">
            <div className="mailWrapper startExamWrapper bookCounsellingWrapper  hauto bookPaymentCounsellingWrapperContent">
              <div className="topbar">Counselling</div>
              <div className="bookCounsellingWrapperContent">
                <div className='counsellingStartedTitle01'>JOIN Counselling</div>
                <div className='counsellingStartedTitle02'>You have attended the counselling session</div>
                <div className='counsellingStartedTitle03 w-100'>Details</div>
                <div id='1' className='joinCounselingWrap w-100'><img src={C1} alt="" />
                      <div className="aboutCouncillor joinCounselDp">
                        <div className="starWrap">
                          <img src={StarIcon} alt="" className="starContent" />4.18</div>
                        <div className="details">
                          <div className="detailContent">
                            <span className='special'>Specialization</span>
                            <div className='rate'>500/Session</div>
                            <div className='name'>Councillor Name</div></div>
                        </div>
                      </div>
                      <span className='rateTitle'>Rate the Counsellor</span>
                      <div className="rating">
                        <img src={StarRating} alt="" />
                        <img src={StarRating} alt="" />
                        <img src={StarRating} alt="" />
                        <img src={StarRating} alt="" />
                        <img src={StarRating} alt="" />
                        <div className='subTitle'>Please take a moment to rate your counsellor</div>
                      </div>
                      <div className='mt-20 fL'>If you have any further questions or need additional support, please don't hesitate to reach out. You can also book additional sessions through the "Booking Counselling" section</div>
                    </div>

                <div className='margin2 mt-40 buttonWrap'>
                <button className="btnChooseCounsellor">Book Counselling</button>
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

export default AttendedCounselling;