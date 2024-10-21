import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function AboutExam() {

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
              <li><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} />  <span>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /><span>Exam History</span></Link></li>
            </ul>
          </div>
          <div className="content">
            <div className="aboutExamWrapper">
              <div className='examTitleWrap'>
              <h1 className="abouttitle">About Exam</h1>
                <span className='title04'>Purchase the pack and begin<br></br> a new journey</span>

              <div className="notification fR">
                <div className='total'>
              7th
              </div>
              <div className="title02">Standard exam</div>
              </div>
            </div>
            <textarea id="textarea" className='descAboutExam' placeholder='Description'  rows="4" cols="46" />
            <button value="Login" class="btnPurchase"> Purchase Pack</button>
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

export default AboutExam;