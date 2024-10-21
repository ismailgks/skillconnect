import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Progres from './component/Loading';
import ForgetPassword from "./component/ForgetPassword";
import CheckEmail from "./component/EmailCheck";
import CreateNewPassword from "./component/CreatePassword";
import SignUp from "./component/SignUp";
import SplashScreen from "./component/SplashScreen";
import CreateAccount from "./component/CreateAccount";
import PasswordStrengthMeter from "./component/Passcheck";
import MobileVerification from "./component/VerificationMobile";
import Typeotp from "./component/EnterOtp";
import VerifyStatus from "./component/VerificationStatus";
import MobileVerificationStatus from "./component/VerificationMobileStatus";
import MobileVerificationLoading from "./component/VerificationMobileLoading";
import MobileVerificationStart from "./component/VerificationStart";
import EmailVerificationStart from "./component/VerificationEmailStart";
import EmailVerificationLoading from "./component/VerificationEmailLoading";
import EmailVerificationStatus from "./component/EmailVerificationStatus";
import EmailzVerificationStatus from "./component/VerificationEmailzStatus";
import EmailQVerificationStatus from "./component/VerificationEmailStatus";
import StudentDashboard from "./component/StudentDashboard";
import StudentInbox from "./component/StudentInbox";
import StudentProfile from "./component/StudentProfile";
import EditProfile from "./component/EditProfile";
import AboutExam from "./component/AboutExamStudents";
import AboutCounselling from "./component/AboutCounselling";
import ExamPackMain from "./component/ExamPackMain";
import ExamPackPaymentConfirmed from "./component/ExamPackPaymentConfirm";
import ExamPackBuy from "./component/ExamPackBuy";
import ExamPackCheckout from "./component/ExamPackCheckout";
import StartExam01 from "./component/StartExam01";
import Waiting from "./component/Loading";
import CountrySelectWithISD from "./component/countrylist";
import CountrySelector from "./component/countryName";
import Spinner02 from "./component/Spinner";
import Waitingz from "./component/EnterOtp";
import MailInbox from "./component/mailInbox";
import ApprovanInDashboard from "./component/ApprovalDashboard";
import StartExam from "./component/StartExam";
import FinishExam from "./component/FinishExam";
import ExamStarted from "./component/StartedExam";
import ExamStarted02 from "./component/StartedExam02";
import BookCounselling from "./component/BookCounselling";
import AvailableCounsellor from "./component/ChooseCounsellor";
import BookCounsellingPayment from "./component/BookCounsellingPayment";
import SubmittedCounsellingRequest from "./component/SubmittedCounsellingRequest";
import JoinCounselling from "./component/JoinCounselling"
import AttendedCounselling from "./component/AttendedCounselling";
import StudentDashboardCounselAttnd from "./component/StudentDashboardAttended";
import ExamHistory from "./component/ExamHistory";
import RequestConselling from "./component/RequestCounselling";
import RequestConsellingConfirm from "./component/RequestCounsellingConfirm";
import RegistrationForm from "./component/RegForm";
import LoginForm from "./component/apiLogin";
import CircleSpinner from "./component/CircleSpinner";
import MyForm from "./component/mailApi";
import ApiTest from "./component/apitest";
import AutoLoading from "./component/AutoLoading";
import CounsellorDashboard from "./component/CounsellorDashboard";
import CounsellorDashboardSecond from "./component/CounsellorDashboardSecond";
import StudentProfileComp from "./component/CmpltStdProfile";
import circleSpin from "./component/circle-spinner";
import CircleSpinOne from "./component/CircleSpinnerOne";
import ChangePassword from "./component/ChangePassword";
import FileUpload from "./component/Upload";
import TestForm from "./component/TestProfile";
import EmailVerifyStatus from "./component/EmailVerificationStatus";
import axios from 'axios';

function App() {
  const [receivedData, setReceivedData] = useState('');
  const [accessToken, setAccessToken] = useState('12334444555');
  const [refreshToken, setRefreshToken] = useState('2');
  const [refreshTokenData, setRefreshTokenData] = useState('');
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);
  const refreshTokenApi = () => {
    setCount(prevCount => prevCount+1)
    setAccessToken(localStorage.getItem('AccessToken'));
    setRefreshToken(localStorage.getItem('RefreshToken'));
    console.log('Access Token: ',count,accessToken)
    console.log('Refresh Token: ',refreshToken)
    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/RefreshToken', { 'token': accessToken, 'refreshToken': refreshToken })
      .then(response =>
        setRefreshTokenData(response.data)
      )
      .catch(error => setError(error));
  }
  useEffect(() => {
    console.log('new token: ',refreshTokenData.token)
    localStorage.setItem('AccessToken', refreshTokenData.token);
    localStorage.setItem('AccessToken', refreshTokenData.refreshToken);
    setAccessToken(localStorage.getItem('AccessToken'))
    setRefreshToken(localStorage.getItem('RefreshToken'))
    refreshTokenApi();
  const timer = setInterval(() => {
    refreshTokenApi();
  }, 3600000);
  return () => clearInterval(timer);
    console.log(99999999,refreshTokenData)
    console.log(77777,refreshTokenData)
  },[refreshToken]);
  const handleData = (data) => {
    setReceivedData(data);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onSendData={handleData} />} />
        <Route path="/loading" element={<Progres />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/countryName" element={<CountrySelector />} />
        <Route path="/countryList" element={<CountrySelectWithISD />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/checkemail" element={<CheckEmail />} />
        <Route path="/regform" element={<MyForm />} />
        <Route path="/apitest" element={<ApiTest />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/createpassword" element={<CreateNewPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginApi" element={<LoginForm />} />
        <Route path="/regForm" element={<RegistrationForm />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/circlespinner" element={<CircleSpinner />} />
        <Route path="/requestcounselling" element={<RequestConselling />} />
        <Route path="/pass" element={<PasswordStrengthMeter />} />
        <Route path="/requestcousellingconfirm" element={<RequestConsellingConfirm />} />
        <Route path="/newaccount" element={<CreateAccount />} />
        <Route path="/autoload" element={<AutoLoading />} />
        <Route path="/mobileverify" element={<MobileVerification />} />
        <Route path="/emailverify" element={<EmailVerificationStart />} />
        <Route path="/emailloading" element={<EmailVerificationLoading />} />
        <Route path="/mobileloading" element={<MobileVerificationLoading />} />
        <Route path="/mobilenumber" element={<MobileVerificationStart />} />
        <Route path="/enterOtp" element={<Waitingz />} />
        <Route path="/bookCounselling" element={<BookCounselling />} />
        <Route path="/bookCounsellingPayment" element={<BookCounsellingPayment />} />
        <Route path="/submittedCounsellingRequest" element={<SubmittedCounsellingRequest />} />
        <Route path="/attendedCounselling" element={<AttendedCounselling />} />
        <Route path="/joincounselling" element={<JoinCounselling />} />
        <Route path="/choosecounsellor" element={<AvailableCounsellor />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/mobileverifyStatus" element={<MobileVerificationStatus />} />
        <Route path="/emailverifyStatus" element={<EmailVerifyStatus />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/studentdashboardattend" element={<StudentDashboardCounselAttnd />} />
        <Route path="/studentinbox" element={<StudentInbox />} />
        <Route path="/startexam" element={<StartExam />} />
        <Route path="/startedexam" element={<ExamStarted />} />
        <Route path="/startedexam02" element={<ExamStarted02 />} />
        <Route path="/finishexam" element={<FinishExam />} />
        <Route path="/mailInbox" element={<MailInbox />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/aboutexam" element={<AboutExam />} />
        <Route path="/aboutcounselling" element={<AboutCounselling />} />
        <Route path="/exampack" element={<ExamPackMain />} />
        <Route path="/examhistory" element={<ExamHistory />} />
        <Route path="/exampackpayconfirm" element={<ExamPackPaymentConfirmed />} />
        <Route path="/exampackbuy" element={<ExamPackBuy />} />
        <Route path="/exampackcheckout" element={<ExamPackCheckout />} />
        <Route path="/startexam01" element={<StartExam01 />} />
        <Route path="/approvaldb" element={<ApprovanInDashboard />} />
        <Route path="/counsellordb" element={<CounsellorDashboard />} />
        <Route path="/counsellordb2" element={<CounsellorDashboardSecond />} />
        <Route path="/counsellordb2" element={<CounsellorDashboardSecond />} />
        <Route path="/verifysuccess" element={<VerifyStatus />} />
        <Route path="/stdProfileComplt" element={<StudentProfileComp />} />
        <Route path="/circle" element={<CircleSpinOne />} />
        <Route path="/testform" element={<TestForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
