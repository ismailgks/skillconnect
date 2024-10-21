import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import User from './img/profilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faFilePen } from '@fortawesome/free-solid-svg-icons';
import LeftArrow from './img/leftArrow.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function StudentProfile() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState('dfec03fb-ec6a-4171-8546-66bcc4d0c0a0');
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState('');
  let navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem('TokenQ')
    let userid = localStorage.getItem('UserID')
    setToken(token)

    const fetchData = async () => {
      try {
        console.log(111111111,token)
        const response = axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetStudentByUserId/' + userid, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        })
        .then(response =>
          setProfileData(response.data)
        )
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  },[])
  const getProfile = () => {
    alert('Coming soon')
  }
  return (
    <div className="App">
      <div className="strip"></div>
      <div className="contentWrapper">
        <div className="content">
          <div className="profileBackWrap whiteStrap">
            <div className='backLink'>
              <Link to="/studentdashboard"><img src={LeftArrow} alt="" /><span>Profile</span></Link></div>
            <Link to="/editprofile"><button className='btnEdit'>Edit Profile</button></Link>
          </div>
          <div className="profileWrapper profileData">
            <div className="profileTop">
              <div className="profilePic">
                <img src={User} alt="" />
              </div>
            </div>
            <div className="profileLeft">
              <div className="title03">Personal details</div>
              <div><label> Name </label>: <span>{profileData.fullName}</span></div>
              <div><label>Year of birth </label> : <span>{profileData.yearOfBirth}</span></div>
              <div><label>Gender</label>  : <span>{profileData.gender}</span></div>
              <div><label>Grade</label>  : <span>{profileData.grade}</span></div>
              <div><label>Institution</label>  : <span>{profileData.institution}</span></div>
              <div><label>Contact Number</label>  : <span>{profileData.contactNumber}</span></div>
              <div><label>Email</label>  : <span>{profileData.email}</span></div>
              <div><label>Address</label>  : <span>{profileData.address}</span></div>
              <div className='changePasswordWrap'><label>Country</label>  : <span>{profileData.country}</span></div>
            </div>
            <div className="profileRight">
              <div className="title03">Parent details</div>
              <div><label> Name </label>: <span>{profileData.parentName}</span></div>
              <div><label> Parent Contact Number </label>: <span>{profileData.parentContactNumber}</span></div>
              <div><label>Occupation </label>: <span>{profileData.occupation}</span></div>
            </div>
          </div>
          <div className='dltBtn'><a href='' >Delete account </a> </div>
        </div>
      </div>



    </div>
  );
}

export default StudentProfile;