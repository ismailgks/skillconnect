import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import { useNavigate } from "react-router-dom";
import Logo from './img/logo_new.png';
import Helpico from './img/helpIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClose } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';
import axios from 'axios';
import dbico1 from './img/db_menu_ico01.png'
import dbico3 from './img/db_menu_ico03.png'
import dbico2 from './img/db_menu_ico02.png'
import AutoLoading from './AutoLoading';
import { useLocation } from 'react-router-dom';

function StudentDashboard() {
  let navigate = useNavigate();

  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [responseDetailDt, setResponseDetailDt] = useState([]);
  const [grade, setGrade] = useState('');
  const [activeMenu, setActiveMenu] = useState(true);
  const [token131, setToken131] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTA3NDQ5ODY0OSIsImp0aSI6IjA0MWU0YzljLTkxMjMtNDc0Ni1iMTM4LTJiZDllZGE5Zjc3MCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMzczZDQ5YzEtMGM4OS00MjQ4LTgxNjUtNDM0MDI1ZTQwMWEwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU1RVREVOVCIsImV4cCI6MTcyODk5MDQ0NX0.hq73wVGFe5vqIhzGdi0f21pign2COKeg3VqfYyhJQRQ');
  const [support, setSupport] = useState(false);
  const [loading, setLoading] = useState(true);
  const [gradeDt, setGradeDt] = useState();
  const [loginToken, setLoginToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserId, setCurrentUserId] = useState('');
  const [loginError, setLoginError] = useState(true);
  const [responseDt, setResponseDt] = useState(null);
  const [packDt, setPackDt] = useState();
  const [completed, setCompleted] = useState(false);
  const [user_id, setUser_id] = useState('');
  const [accessToken, setAccessToken] = useState('12334444555');
  const [gradeData, setGradeData] = useState(null);
  const [refreshToken, setRefreshToken] = useState('');
  const token112 = localStorage.getItem('TokenQ')
  const params = new URLSearchParams({
    id: '3'
  });
  const paramsInbox = new URLSearchParams({
    userId: '373d49c1-0c89-4248-8165-434025e401a0'
  });
  var gradeParam = '';
  const [entries, setEntries] = useState();
  let dataz = 1
  //   const refreshAccessToken = async () => {
  //   const response = await api.post('/token', { token: refreshToken });
  //   setAccessToken(response.data.accessToken);
  // };
  useEffect(() => {
    // setAccessToken(localStorage.getItem('AccessToken'));
    // setRefreshToken(localStorage.getItem('RefreshToken'));
    // const loginToken = localStorage.getItem('AccessToken')
    setAccessToken(localStorage.getItem('AccessToken'));
    setRefreshToken(localStorage.getItem('RefreshToken'));
    setLoginToken(loginToken);
    console.log(loginToken);
    setTimeout(() => {
      const jsonStringCurrentUser = JSON.stringify(currentUser.id);
      console.log(113, jsonStringCurrentUser)

      try {
        axios.get('https://dev-skillsconnectgateway.onzitr.com/api/Auth/GetCurrentUser', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          }
        })
          .then(response =>
            setCurrentUser(response.data),
            // setCurrentUserId(response.id),
            setLoginError(true)
          )
          .catch(error => setError(error));
      }
      catch (error) {
        console.error('Submission error:', error);
      }
    }, 5000);

    const uid = currentUser.id
    console.log('UID:', uid)
    if (completed) {
      let path5 = '/stdProfileComplt'
      navigate(path5);
    }





    gradeParam = 'grade=3'
    axios.get(`https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetGradeByStudentId?${params}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response =>
        setGradeData(response.data.grade)
      )
      .catch(error => setError(error));
      console.log(777, gradeData)
      console.log(313, gradeDt)

    // const response = fetch(`https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetGradeByStudentId?${params}`, {
    //   method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`,
    // },
    // })
    // .then(response => setGradeDt(response.data));
    // console.log('Grade is: ',gradeDt.grade);


    // setCurrentUserId(localStorage.getItem('userId'))


    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 3000);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log(loading)
    setActiveMenu(true)
    return () => clearTimeout(timer);
    console.log('ccc', responseDt.id)
    return () => clearTimeout(timer2)
  }, [grade, refreshToken]);


  const getGrade = () => {
    console.log(123)
    let username = 9645123006
    axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetAll')
      .then(response => setResponseDetailDt(response.data)
      )
      .catch(error => setError(error));
    console.log('zz', responseDetailDt);
    let index = responseDetailDt.findIndex(item => item.userName == username);
    let id = 1;
    axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetGradeByStudentId?id=' + id)
      .then(response =>
        setGrade(response.data.grade)
      )
      .catch(error => setError(error));
  }
  const inbox = () => {

    // let id = 1;
    // axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetGradeByStudentId?id=' + id)
    //   .then(response =>
    //     setGrade(response.data.grade)
    //   )
    //   .catch(error => setError(error));

  };

  const getOrdinalSuffix = (number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const exceptionDays = [11, 12, 13];

    if (exceptionDays.includes(number % 100)) {
      return "th";
    }

    return suffixes[number % 10] || "th";
  };

  const OrdinalNumberDisplay = ({ number }) => {
    const suffix = getOrdinalSuffix(number);

    return (
      <div>
        <span className="number">{number}<span className='suffix'><sup>{suffix}</sup></span></span>

      </div>
    );
  };


  const getSupportOpen = () => {
    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/student/Support/Insert')
      .then(response =>
        console.log(response)
      )
      .catch(error => setError(error));
    setSupport(true)
  }
  const getSupportClose = () => {
    setSupport(false)
  }
  const suggestedPack = () => {
    let path = '/exampack'
    navigate(path);
  }
  const StartExam = () => {
    let path = 'startexam'
    navigate(path);
  }

  return (
    <div className="App">
      {loading ? <AutoLoading type='blue'></AutoLoading> : ''}
      <div className="strip"></div>
      <div className="dashboardWrapper">
        <div className='dashboardHeader'>
          <div className='dashboardlogo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
          <div className="menu_wrap">
            <div className='bubbleWrap'>
              <Link to={{ pathname: "/studentinbox", state: { dataz } }}>
                <input type="submit" value="Inbox" className='btnInbox' onClick={inbox} />
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
              <li className={activeMenu ? 'dashboardNew dashboardNewActive' : 'counsellingNew'}><Link to="/studentdashboard"><span className='custom-padding'>Dashboard</span></Link></li>
              <li className='counsellingNew'><Link to="/aboutcounselling"><span className='custom-padding'>Counselling</span></Link></li>
              <li className='counsellingNew examhistoryNew'><Link to="/examhistory"><span className='custom-padding'>Exam History</span></Link></li>
            </ul>
          </div>
          <div className="content">
            <div className="wrapMain">
              <div className="wrapMainSub">
                <div className="aboutExam">
                  <h1 className="abouttitle">About Exam</h1>
                  <span>Purchase the pack and begin a new journey</span>
                  <div className="notification">
                    <div className='total'>
                      <div>
                        <OrdinalNumberDisplay number={gradeData} />
                      </div>
                    </div>
                    <div className="title02">Standard exam</div>
                  </div>
                  <a href="/aboutexam" className='link'>Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
                <Link to="/aboutcounselling">
                  <div className="workcounsellor">
                    <a href="#"></a>
                  </div>
                </Link></div>

              <div className="suggestedTitle">
                <div class="title09">Suggested Exam Pack</div>
              </div>
              <div className="suggestedWrap">
                <div className="suggestedPack mb-0">
                  <div className="db_notification card-2">
                    <div className='total'>
                      <div>
                        <OrdinalNumberDisplay number={gradeData} />
                      </div>
                    </div>
                  </div>
                  <span className='titleOfStandard'>Standard exam </span>
                  <button className='suggestedPackButton startExamButton startExamButton1' onClick={suggestedPack}>View</button>
                </div>
              </div>

              <div className="suggestedTitle">
                <div class="title09">Your Exam Pack</div></div>
              <div className="suggestedWrap yourExamWrap">
                <div className="suggestedPack">{gradeData}th
                  <span>Standard exam <br></br>
                    <Link to="/startexam">
                      <button className='suggestedPackButton startExamButton startExamButton2' onClick={StartExam}>Start Exam</button></Link></span>
                </div>
              </div>
            </div>

            {support ? (<div className="modelWrap">
              <div className="cnf_desc">
                <div className="modelLeft">
                  <div className="closeModal" onClick={getSupportClose}><FontAwesomeIcon icon={faClose} /></div>
                  <div className="tickIcon"><span><FontAwesomeIcon icon={faCheck} /></span></div>
                </div>
                <div className="modelContent">Your Support Request Has Been Received
                  <div className='model_title02'>Thank you for reaching out to us. We have received your support request and our team is currently reviewing it.<br></br><br></br></div>A certified representative will reach out to you shortly. Once you make the payment they will manually assign the exam pack to you.<br></br><br></br> The packs will show in your dashboard.</div>
              </div>
            </div>) : ''}


            <div className="dashboardHelp effect2">
              <div className="helpIco">
                <img src={Helpico}></img>
              </div>
              <div className="helpTitle01">
                <h3>Need help ?</h3></div>
              <p>if you need any help or clarification, you can reach out via email, and we will get back you soon.</p>
              <button value='Login' className='helpBtn' onClick={getSupportOpen}> Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;