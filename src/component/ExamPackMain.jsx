import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';


function ExamPackMain() {

  const [activeMenu, setActiveMenu] = useState(true);
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
          <div className="examPackContent">
            <div className="aboutExamWrapper">
              <div className='examTitleWrap'>
              <h1 className="examPackDetailTitle"><span>Exam pack</span></h1>

              <div className="notification examPacknotification">
                <div className='total'>
              7th
              </div>
              <div className="title02">Standard exam</div>
              </div>
            </div>
            <h1 className="examDetailsTitle"><span>Exam details</span></h1>
              <div className='pricePack'> ₹1000 / pack </div>
              <div className="pricePackPayment">Already made your payment? Submit your proof for verification  <button value="Login" class="btnProof"> Submit Payment Proof <span> <FontAwesomeIcon icon={faPaperclip} /> </span></button> <button value="Login" class="btnEnquiry"> Enquiry </button></div>
          <div className="paragraphs">
            <div className="paragraph1">There is an <b>Enquiry Button</b> that provides the contact details, and a certified representative will reach out to you shortly. You can talk with them if you have any questions or need any clarification. Once you make the payment, the exam pack will be manually assigned to you, and the pack will be accessible from the dashboard.</div>
            <div className="paragraph1 paragraph2">If you have made a payment manually or outside of the app, you can use the <b>Submit Payment</b> Proof button to upload your payment confirmation for verification. Once verified, the exam pack will be assigned to you and accessible from the dashboard.</div>
            </div>  </div>


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

export default ExamPackMain;