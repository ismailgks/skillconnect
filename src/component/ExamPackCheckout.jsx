import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';

function ExamPackCheckout() {

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
              <div className="pricePackPayment"> <button value="Login" class="btnBuyPage"> Buy </button></div>
              <div className="paragraphs">
                <div className="paragraph1">There is a <b>Direct Buy</b> option. If you are already logged in with a referral code or have a discount coupon, you don't need to go through the initial process. You can directly buy the pack. Once you make the payment, the exam pack will be assigned to you after verification, and the pack will be accessible from the dashboard.</div>
              </div>  </div>
            <div className="examCheckout">
              <span className='paymentTitle'>Payment</span>
              <form className='checkoutForm'>
                <fieldset>
                  <label>Enter discount coupon if available</label><br></br>
                  <input type='text' className='amounttextbox' placeholder='Coupon code' />

                <button value='Login' className='btnApply'>Apply</button></fieldset>
              </form>

              <div className='paymentPlan'>
                <span>Amount to pay</span>
                <span>₹1000</span>
              </div>
              <button value='checkout' className='btnCheckout'>Check out</button>
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

export default ExamPackCheckout;