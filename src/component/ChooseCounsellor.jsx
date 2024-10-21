import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import LineOut from './img/Line_outIco.png';
import StarIcon from './img/starIcon.png';
import FilterIco from './img/filter.png';
import Timer from './img/timerIco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClose } from '@fortawesome/free-solid-svg-icons';
import Helpico from './img/helpIco.png';
import TimerLine from './img/timerLine.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import pl1 from './img/pl1.png';
import pl2 from './img/pl2.png';
import pl3 from './img/pl3.png';
import pl4 from './img/pl4.png';
import C1 from './img/Councillor1.png';
import C9 from './img/Councillor9.png';
import C11 from './img/Councillor7.png';
import C5 from './img/Councillor5.png';
import C6 from './img/Councillor6.png';
import C8 from './img/Councillor8.png';
import C7 from './img/Councillor7.png';
import { faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Menu from './menuDashboard';

function AvailableCounsellor() {

  let navigate = useNavigate();
  const bookCounsellor = () => {
    let path = '/bookCounsellingPayment'
    navigate(path);
  }
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const [isVisible, setIsVisible] = useState(false);

  const selectedCounselor = (index) => {
    setSelectedIndex(index);
  };
  const filterOptions = (e) => {
    setIsVisible(!isVisible);
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
            <div className="mailWrapper startExamWrapper bookCounsellingWrapper hauto">
              <div className="bookCounsellingWrapperContent">
                <span className='examStartedTitle'><FontAwesomeIcon icon={faArrowLeft} /> Available Counsellors</span>
                <div className="counselorFilter"><img src={FilterIco} onClick={filterOptions}></img> </div>
                <div className='margin2'>

                  <ul className='availableCouncillor'>
                    <li id='1' className='selected' onClick={bookCounsellor}><img src={C1} alt="" />
                      <div className="aboutCouncillor">
                        <div className="starWrap">
                          <img src={StarIcon} alt="" className="starContent" />4.18</div>
                        <div className="details">
                          <div className="detailContent">
                            <span className='special'>Specialization</span>
                            <div className='rate'>500/Session</div>
                            <div className='name'>Councillor Name</div></div>
                        </div>
                      </div>
                    </li>

                    <li className='marginX selectedCounselor' onClick={bookCounsellor} id='2'> <img src={C5} alt="" />  <div className="aboutCouncillor">

                      <div className="starWrap">
                        <img src={StarIcon} alt="" className="starContent" />4.18

                      </div>
                      <div className="lineOut">
                        <img src={LineOut} alt="" className='lineArrow' />
                      </div>
                      <div className="details">
                        <div className="detailContent">
                          <span className='special'>Specialization</span>
                          <div className='rate'>500/Session</div>
                          <div className='name'>Councillor Name</div></div>
                      </div>
                    </div>
                    </li>

                    <li id='3' className='selected' onClick={bookCounsellor}>
                      <img src={C9} alt="" />
                      <div className="aboutCouncillor">
                        <div className="starWrap">
                          <img src={StarIcon} alt="" className="starContent" />4.18</div>

                        <div className="lineOut">
                          <img src={LineOut} alt="" className='lineArrow' />
                        </div>
                        <div className="details">
                          <div className="detailContent">
                            <span className='special'>Specialization</span>
                            <div className='rate'>500/Session</div>
                            <div className='name'>Councillor Name</div></div>
                        </div>
                      </div> </li>



                    <li id='4'><img src={C6} alt="" /> <div className="aboutCouncillor">

                      <div className="starWrap">
                        <img src={StarIcon} alt="" className="starContent" />4.18</div>
                      <div className="lineOut">
                        <img src={LineOut} alt="" className='lineArrow' />
                      </div>
                      <div className="details">
                        <div className="detailContent">
                          <span className='special'>Specialization</span>
                          <div className='rate'>500/Session</div>
                          <div className='name'>Councillor Name</div>
                        </div>
                      </div>
                    </div> </li>

                    <li className='marginX' id='5'><img src={C9} alt="" /> <div className="aboutCouncillor">

                      <div className="starWrap">
                        <img src={StarIcon} alt="" className="starContent" />4.18</div>
                      <div className="lineOut">
                        <img src={LineOut} alt="" className='lineArrow' />
                      </div>
                      <div className="details">
                        <div className="detailContent">
                          <span className='special'>Specialization</span>
                          <div className='rate'>500/Session</div>
                          <div className='name'>Councillor Name</div></div>
                      </div>
                    </div> </li>

                    <li id='6'><img src={C8} alt="" /> </li>
                    <li id='4'><img src={C11} alt="" /> <div className="aboutCouncillor">

                      <div className="starWrap">
                        <img src={StarIcon} alt="" className="starContent" />4.18</div>
                      <div className="lineOut">
                        <img src={LineOut} alt="" className='lineArrow' />
                      </div>
                      <div className="details">
                        <div className="detailContent">
                          <span className='special'>Specialization</span>
                          <div className='rate'>500/Session</div>
                          <div className='name'>Councillor Name</div></div>
                      </div>
                    </div> </li>
                    <li className='marginX' id='5'><img src={C5} alt="" /> <div className="aboutCouncillor">

                      <div className="starWrap">
                        <img src={StarIcon} alt="" className="starContent" />4.18</div>
                      <div className="lineOut">
                        <img src={LineOut} alt="" className='lineArrow' />
                      </div>
                      <div className="details">
                        <div className="detailContent">
                          <span className='special'>Specialization</span>
                          <div className='rate'>500/Session</div>
                          <div className='name'>Councillor Name</div></div>
                      </div>
                    </div> </li>
                    <li id='5'><img src={C1} alt="" /> <div className="aboutCouncillor">

                      <div className="starWrap">
                        <img src={StarIcon} alt="" className="starContent" />4.18</div>
                      <div className="lineOut">
                        <img src={LineOut} alt="" className='lineArrow' />
                      </div>
                      <div className="details">
                        <div className="detailContent">
                          <span className='special'>Specialization</span>
                          <div className='rate'>500/Session</div>
                          <div className='name'>Councillor Name</div></div>
                      </div>
                    </div> </li>
                  </ul>
                </div>
              </div>

              {isVisible && (
                <div className="filterBox">
                  <div className="filterWrap">
                    <div className="filterTitle">Filter</div>
                    <span className='filterCloseIco' onClick={filterOptions}><FontAwesomeIcon icon={faClose} /></span>
                    <select class="ddl-select" id="list" name="list">
                      <option>Select One</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                    <select class="ddl-select select2" id="language" name="language">
                      <option>Select One</option>
                      <option value="1">English</option>
                      <option value="2">Spanish</option>
                      <option value="2">Russian</option>
                    </select>

                    <button value="Apply" class="btnApply"> Apply </button>

                  </div>
                </div>
              )}
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

export default AvailableCounsellor;