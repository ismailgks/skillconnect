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
import axios from 'axios';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function StudentInbox() {
  const location = useLocation();
  const { dataz } = location.state || {};
  console.log(3333, dataz)
  const [mail, setMail] = useState([]);
  const [dta, setDta] = useState([]);
  const [mails, setMails] = useState([]);
  const [token131, setToken131] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTA3NDQ5ODY0OSIsImp0aSI6IjQ3ZWNlNmM2LTkzY2ItNGM0OC1iM2E4LThlOWI5MGVjZjY5NiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMzczZDQ5YzEtMGM4OS00MjQ4LTgxNjUtNDM0MDI1ZTQwMWEwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU1RVREVOVCIsImV4cCI6MTcyOTA1NDYyNX0.sFP5K2cd3pwTac49t_roYVdCmDfLm5hAngQIZ413FlI');
  const [error, setError] = useState('');
  const params = new URLSearchParams({
    userId: '373d49c1-0c89-4248-8165-434025e401a0'
  });
  const paramsInbox = new URLSearchParams({
    userId: '373d49c1-0c89-4248-8165-434025e401a0'
  });

  useEffect(() => {
    axios.get(`https://dev-skillsconnectgateway.onzitr.com/api/admin/Inbox/GetInboxByUserId?${paramsInbox}`, {
      headers: {
        'Authorization': `Bearer ${token131}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response =>
        setMails(prevMails => response.data.inboxDetails)
      )
      .catch(error => setError(error));
    console.log(22111111, mails)
    setMails(prevMails => mails)
    console.log(2224, mails)
  }, [])
  const clickAlert = () => {
    // setDta(JSON.parse(dta));
  }
  return (
    <div className="App">
      <div className="strip"></div>
      <div className="dashboardWrapper">
        <div className='dashboardHeader'>
          <div className='dashboardlogo'>
            <img src={Logo} alt="logo" title='logo' onClick={clickAlert} />
          </div>
          <div className="menu_wrap">
            <div className='bubbleWrap'>
            <Link to={{pathname: "/studentinbox", state: { dataz }}}>
              <input type="submit" value="Inbox" className='btnInbox' />
              <div className='mailBubble'>2</div>
            </Link></div>
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

              {mails ? (
                <div className='notifi'>
                  <h1>Notification:</h1>
                  <ul>
                    {mails.map(item => (
                      <li>
                        <div class="message">{item.message}</div>
                        <span className='time'>1hr ago</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No data available</p>
              )}



              <div>
                {/* <ul>
                  {dta.map((item, index) => (
                    <li key={index}>
                      <div className="mailthread">
                        <div>{item.mail}</div>
                        <span className='mailtime'>{item.time}</span>
                      </div>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>

          </div>
        </div>
      </div>



    </div>
  );
}

export default StudentInbox;