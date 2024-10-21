import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import Timer from './img/timerIco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Helpico from './img/helpIco.png';
import TimerLine from './img/timerLine.png';
import pl1 from './img/pl1.png';
import pl2 from './img/pl2.png';
import { useNavigate } from "react-router-dom";
import pl3 from './img/pl3.png';
import pl4 from './img/pl4.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ExamStarted() {

  let navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false)

  const FinishExam = () => {

    let path = '/finishexam'
    navigate(path);
  }
  const optionSelected = (e) => {
    let selected = e.target

    const parentLi = selected.closest('li');
    let pid = parentLi.id
    console.log('222',pid)

    if(pid=="PL1"){
    setIsActive1(!isActive1)
    }
    else if(pid=="PL2"){
      setIsActive2(!isActive2)
    }
    else if(pid=="PL3"){
      setIsActive3(!isActive3)
    }
    else if(pid=="PL4"){
      setIsActive4(!isActive4)
    }
    console.log(selectedOption)
  }
  const NextQuest = () => {
    let path = '/startedexam02'
    navigate(path);
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


        <div className="examWrapper">

          <div className="content hauto w-100">
            <div className="mailWrapper startExamWrapper padding39">
              <div className='examStartedTitle'>Exam</div>
              <div className="examTimer">
                <div className="ico">
                  <img src={Timer} alt="" />
                  <img src={TimerLine} alt="" className='timerline' />
                </div>
                <div className="timerDisplay">
                  <div> Timer </div>
                  <div className="time"> 01:05:21 </div>
                </div>
                <div className="btnFinishExam">
                  <button value='Login' className='btnExamFinish' onClick={FinishExam}> Finish Exam</button>
                </div>
              </div>
              <div className="examStartTitle">Question 51 of 200</div> {selectedOption}
              <div className='margin47 questions'>Which is the biggest planet in our solar system ?</div>
              <div className="keys">
                <ul className='key' id='222'>
                  <li onClick={optionSelected} className={`my-div ${isActive1 ? 'active' : ''}`} id="PL1"><div className="imageBox"><img src={pl1} alt="" id='option1'/> </div> </li>
                  <li onClick={optionSelected} className={`my-div ${isActive2 ? 'active' : ''}`} id="PL2"><div className="imageBox"><img src={pl2} alt="" id='option2'/> </div></li>
                  <li onClick={optionSelected} className={`my-div ${isActive3 ? 'active' : ''}`} id="PL3"><div className="imageBox"><img src={pl3} alt="" id='option3'/> </div></li>
                  <li onClick={optionSelected} className={`my-div ${isActive4 ? 'active' : ''}`} id="PL4"><div className="imageBox"><img src={pl4} alt="" id='option4'/> </div></li>
                </ul>
              </div>


              <div className="nextPrevWrap">
                <button className="btnPrevQuestion">Back</button>
                <button className="btnNextQuestion" onClick={NextQuest}>Next</button>
              </div>

              <div className="omrWrap">
                <ul>
                  <li className='checked'>1</li>
                  <li className='checked'>2</li>
                  <li className='checked'>3</li>
                  <li className='checked'>4</li>
                  <li className='checked'>5</li>
                  <li className='marked'>6</li>
                  <li className='marked'>7</li>
                  <li className='marked'>8</li>
                  <li className='marked'>9</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='marked'></li>
                  <li></li>
                  <li></li>

                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div className="calc">
                Answered : <span>50</span>
                Remaining : <span>150</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamStarted;