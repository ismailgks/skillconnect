import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function MailInbox() {
    return (
        <div className="App">
        <div className="strip"></div>
      <div className="editprofileWrapper">
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


          <div className="content">
              <div className="mailWrapper">
            <span className='backLink'>
            <Link to="/studentdashboard"><FontAwesomeIcon icon={faArrowLeft} /> <span>Inbox</span></Link> </span>
              <div className="mailthread">
              <div> Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard. </div>
              <span className='mailtime'>1hr ago</span>
              </div>

            </div>
          </div>
        </div>



      </div>
    </div>
    )
}

export default MailInbox;