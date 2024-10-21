import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import CouncillorBg from './img/CouncillorBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import AutoLoading from './AutoLoading';

function AboutCounselling() {
  let navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(true);
  const [loading, setLoading] = useState(true);
  const bookCounselling = () => {
    let path = '/bookCounselling'
    navigate(path);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  })
  return (
    <div className="App">
      {loading ? <AutoLoading></AutoLoading> : ''}
      <div className="strip"></div>
      <div className="dashboardWrapper">
        <div className='dashboardHeader'>
          <div className='dashboardlogo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>

          <div className="menu_wrap">
            <Link to="/studentinbox">
              <input type="submit" value="Inbox" className='btnInbox' /></Link>
            <a href="/studentprofile" className='userMenu'>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <Menu></Menu>
          </div>
        </div>
        <div className="contentWrapper">
          <div className="sideMenu">
            <ul>
              <li className={activeMenu ? 'dashboardNew' : ''}><Link to="/studentdashboard"><span className='custom-padding'>Dashboard</span></Link></li>
              <li className='counsellingNew'><Link to="/aboutcounselling"><span className='custom-padding'>Counselling</span></Link></li>
              <li className='counsellingNew examhistoryNew'><Link to="/examhistory"><span className='custom-padding'>Exam History</span></Link></li>
            </ul>
          </div>
          <div className="content">
            <div className="aboutExamWrapper">
              <div className='examTitleWrap'>
                <h1 className="abouttitle">Work with Counsellors</h1>
                <span className='title05'>Take the opportunity to talk with counsellor and discuss your future studies to make informed decisions about your educational path</span>
                <div className="workcounsellor-dp">
                  <img src={CouncillorBg} />
                </div>
              </div>
              <textarea id="textarea" className='descAboutExam' placeholder='Counselling plays a crucial role in your educational journey by offering personalized guidance and support. It helps you understand your progress, set realistic goals, and develop plans to overcome challenges. Additionally, it provides a space to discuss any concerns, seek career advice, and receive encouragement, all of which contribute to your overall academic success and personal development. After completing the exam, you can take advantage of a free 15-minute counselling session with a certified counsellor to review your results and get feedback. For more detailed support, you can also book additional paid counselling sessions.' rows="4" cols="46" />
              <button value="Login" class="btnPurchase btnCounselling" onClick={bookCounselling}> Book Counselling </button>
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

export default AboutCounselling;