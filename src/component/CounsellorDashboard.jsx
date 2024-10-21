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
import outIco from './img/outIco.png'
import CircleSpinner from './CircleSpinner';
import CounsellorMenu from './CounsellorMenu';

function CounsellorDashboard() {

  return (
    <div className="App">
      <div className="strip"></div>
      <div className="dashboardWrapper">
        <div className='dashboardHeader'>
          <div className='dashboardlogo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
            <CounsellorMenu></CounsellorMenu>
          <div className="menu_wrap">
            <Link to="/studentinbox"><input type="submit" value="Inbox" className='btnInbox' /></Link>
            <a href="/studentprofile" className='userMenu'>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <Menu></Menu>
          </div>
        </div>


        <div className="counsellorWrapper">
          <div className='counsellorTitleWrap'>
            <h1>Your Dashboard</h1>
          </div>
          <div className="suggestedTitle mt-5">
            <div class="counsellordbpacktitle">Suggested Pack</div></div>

            <div className="packboxWrap">
          <div className="packBox">
            <div className="grade">5th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div>
          <div className="packBox packBox1">
            <div className="grade">6th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div>
          <div className="packBox packBox1">
            <div className="grade">7th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div>
          <div className="packBox packBox1">
            <div className="grade">8th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div>
          <div className="packBox  packBox1">
            <div className="grade">9th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div></div>
          <div className="packboxWrap packboxWrap2">
          <div className="packBox  packBox1">
            <div className="grade">9th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div>
          <div className="packBox  packBox1">
            <div className="grade">9th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div>
          <div className="packBox  packBox1 packboxWrap2-margin">
            <div className="grade">9th</div>
            <div className='outIco'>
              <img src={outIco} alt="" />
            </div>
            <div className="titleSuggestedPack">7th standard pack</div>
            <div className="meterTitle">
              <span>Total</span>
              <span>Used</span>
              <span>Balance</span>
            </div>
            <CircleSpinner></CircleSpinner>
          </div></div>
          <div className="bundleWrapper">
            <span>Buy bundle pack</span>
            <a href="" className='accordion-arrow'></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CounsellorDashboard;