import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function RequestConsellingConfirm() {
const [show,setShow]=useState(true)
const toggleModal = () => {
  setShow(!show);
};

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
              <h1 className="examPackDetailTitle mb-20"><span>About Exam</span></h1>

              <h1 className="examPackDetailTitle mt-20"><span>All exams attended</span></h1>

            <div className="formWrap">
              <div className="formWrapLeft">
                <div className="formrow">
                <label>Report number</label></div>
                <div className="formrow">
                <label>Date</label></div>
                <div className="formrow">
                <label>Name</label></div>
                <div className="formrow">
                <label>School / Institution</label></div>
                <div className="formrow">
                <label>Class / Course / Designation</label></div>
                <div className="formrow">
                <label>Age</label></div>
                <div className="formrow">
                <label>Gender</label></div>
              </div>
              <div className="formWrapRight">API Data</div>
              <div className="examattendFooter">
              <div className='examattendFooterText'>You can talk with counsellor for 15 minutes for free, extension on paid basis.</div>
              <div className="btnWrapAttndExam">
              <button className="btnRequestCounsel btnAttendedRequestCounsel">Request counseling</button>
              <button className="btnRequestCounsel btnAttendedRequestCounsel">View & Download</button>
              </div>
              {show && (
              <div className="modelWrap">
              <div className="cnf_desc">
                <div className="modelLeft">
                  <div className="closeModal" onClick={toggleModal}><FontAwesomeIcon icon={faClose} /></div>
                  <div className="tickIcon"><span><FontAwesomeIcon icon={faCheck} /></span></div>
                </div>
                <div className="modelContent">
                  <div className='attanddmodel_title02'>Request Submitted.<br></br><br></br></div><div className="attanddmodel-desc">A certified representative will reach out to you shortly. The schedule details will show in your dashboard.<br></br><br></br> You can join the session through the "Join Counselling" section.</div></div>
              </div>
            </div>)}
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

export default RequestConsellingConfirm;