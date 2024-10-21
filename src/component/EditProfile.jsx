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
import { useNavigate } from "react-router-dom";
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faFilePen } from '@fortawesome/free-solid-svg-icons';
import LeftArrow from './img/leftArrow.png';
import PasswordStrengthMeter from './Passcheck';
import axios from 'axios';

function EditProfile() {
  const [childData, setChildData] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('ds');
  const [loginError, setLoginError] = useState(true);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [fullName, setFullName] = useState('');
  const [responseDt, setResponseDt] = useState(1);
  const [data2, setData2] = useState([]);
  const [userID, setUserID] = useState('f1ce45d0-88ff-4908-9869-aaf7d5e44097');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data3, setData3] = useState('qqq');
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    "id": 3,
    "createdBy": "string",
    "modifiedBy": "string",
    "createdDate": "2024-10-08T11:26:38.282Z",
    "modifiedDate": "2024-10-08T11:26:38.282Z",
    "isArchived": true,
    "isActive": true,
    "userId": "373d49c1-0c89-4248-8165-434025e401a0",
    "fullName": "Divya",
    "contactNumber": "",
    "yearOfBirth": "1-9-1999",
    "email": "",
    "gender": "female",
    "address": "string",
    "grade": 11,
    "institution": "string",
    "country": "India",
    "parentName": "Rajeev",
    "parentContactNumber": "9074498649",
    "occupation": "string",
    "profilePhoto": "string"
  });
  let navigate = useNavigate();
  const getIdCall = () => {
    const fetchDataID2 = async () => {
      try {
        const response = await axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetStudentByUserId/' + userID, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });
        setData2(response.data);
        setUserID(response.data.id);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDataID2()
  }
  // const updateName = (newName) => {
  //     setFullName((prevUser) => ({
  //       ...prevUser,
  //       fullName: 'sanju',
  //     }));
  //   }
  useEffect(() => {
    // getCurrentUser()
    getCurrentUser()
    // updateName();
    console.log('hi')
    getIdCall();
    const token = localStorage.getItem('TokenQ')
    setToken(token)
    getIdCall()

      const fetchUsers3 = async () => {
        // setFormData({
        //   fullName: 'sanju',
        // })
        try {
          const response = await axios.get('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/GetStudentByUserId/' + userID);
          setData3(response.data.fullName); // Set the user data in state
        } catch (err) {
          setError(err.message); // Handle any errors
        } finally {
          setLoading(false); // Set loading to false regardless of the outcome
        }
      };
      fetchUsers3();
      console.log(data2)
    }, []);

const modalShowActive = () => {
  const timeoutId2 = setTimeout(() => {
    setModalShow(false)
  }, 1000);
  return () => clearTimeout(timeoutId2);
}
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  const backTo = () => {
    console.log('Clicked ...')
  }

  const changePass = () => {
    let path = '/changepassword'
    navigate(path);
  }
  const getCurrentUser = () => {
    const token = localStorage.getItem('TokenQ')
    setToken(token)
    try {
      axios.get('https://dev-skillsconnectgateway.onzitr.com/api/Auth/GetCurrentUser', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
        .then(response =>
          setLoginError(true)
        )
        .catch(error => setError(error));
    }
    catch (error) {
      console.error('Submission error:', error);
    }

    setCurrentUser(responseDt)
    console.log('zzz', responseDt)

  }
  const submitChanges = (e) => {
    e.preventDefault()
    setModalShow(true)
    modalShowActive()
    setModalShow(true)
    getCurrentUser()
    try {
      axios.put('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/Update', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
        .then(response => setResponseDt(response.data),
          setLoginError(true)
        )
        .catch(error => setError(error));
    } catch (error) {
      console.error('Submission error:', error);
    }
    setModalShow(!modalShow)


  }
  const handleChange55 = (event) => {
    setFormData({
      fullName: event.target.value
    })
    // setFormData.fullName(event.target.value);
  };


  const handleChange77 = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange56 = (event) => {
    alert(1)
    setData3(event.target.value)
  }

  return (
    <div className="App">
      <div className="strip"></div>
      <div className="content">
        <div className="">
          <div className="whiteStrap">
            <div className='backLink'>
              <Link to="/studentprofile">
                <img src={LeftArrow} alt="" />
                <span>Edit your profile</span>
              </Link>
            </div>
          </div>

          <div className="test">
            <div className="profileTop">
            </div>
            <div className="profilePic">
              <img src={User} alt="" />
            </div>
            <div className='description11'>
              <h4>Profile photo</h4>
              <p>This will be displayed on your profile</p>
              <div className='buttonWrap editProfileButtonWrap'>
                <button className='btnEdit'>Change picture</button>
                <button className='btnEdit btnRemove'>Delete picture</button>
              </div>
            </div>
          </div>

          <div className={modalShow ? 'box1 visible' : 'box1 hidden'}>
            <h3>Profile updated successfully..!!</h3>
          </div>


          <div className="profile-content">
            <div className="form_title">Personal details</div>
            <div className='editFormWrap'>
              <form className='personalDetailsForm'>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Full name</label></div>
                  <input type='text' name='fullName' onChange={handleChange77} value={formData.fullName} className='textboxs editProfile_textbox' placeholder='Full name' />
                </fieldset>
                <fieldset className='txtEmail'>
                  <div className='formLabel'><label htmlFor="">Year of Birth</label></div>
                  <input type='text' name='yearOfBirth' onChange={handleChange77} value={data2.yearOfBirth} className='textboxs editProfile_textbox' placeholder='Year of Birth' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Gender</label></div>
                  <input type='text' name='gender' onChange={handleChange77} value={formData.gender} className='textboxs editProfile_textbox' placeholder='Gender' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Grade</label></div>
                  <input type='text' name='grade' onChange={handleChange77} value={data2.grade} className='textboxs editProfile_textbox' placeholder='Grade' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Institution</label></div>
                  <input type='text' name='institution' onChange={handleChange77} value={formData.institution} className='textboxs editProfile_textbox' placeholder='Institution' />
                </fieldset>
              </form>
              <form className='personalDetailsForm'>
                <fieldset className='pR'>
                  <div className='formLabel'><label htmlFor="">Contact number</label></div>
                  <input type='text' name='contactNumber' onChange={handleChange77} value={data2.contactNumber} className='textboxs editProfile_textbox' placeholder='Contact number' />
                  <button value="" class="btnPurchase btnUpdateContact" > Update </button>
                </fieldset>
                <fieldset className='txtEmail pR'>
                  <div className='formLabel'><label htmlFor="">Email</label></div>
                  <input type='text' value={data2.email} name='email' onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Email' />
                  <button value="" class="btnPurchase btnUpdateContact" > Update </button>
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Address</label></div>
                  <textarea id="textarea" name='address' onChange={handleChange77} value={formData.adress} rows="4" cols="64" />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Country</label></div>
                  <input type='text' value={formData.country} name='country' className='textboxs editProfile_textbox' placeholder='Country' onChange={handleChange77} />
                </fieldset>
              </form>
            </div>
            <div>
              <div className="form_title bottomForm">Parent details</div>
              <form className='personalDetailsForm w-100'>
                <div className='editProfileParentLeft'>
                  <fieldset>
                    <div className='formLabel'><label htmlFor="">Parent name</label></div>
                    <input type='text' name='parentName' onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Parent name' />
                  </fieldset>
                  <fieldset>
                    <div className='formLabel formLabelParent'><label htmlFor="">Parent Contact Number</label></div>
                    <input type='text' name='parentcontactnumber' onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Parent contact number' />
                  </fieldset>
                  <fieldset>
                    <div className='formLabel'><label htmlFor="">Occupation</label></div>
                    <input type='text' name='occupation' onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Occupation' />
                  </fieldset>
                </div>
                <div className='editProfileParentRight'>
                  <div className='formLabel'>
                    <label htmlFor="">Password</label></div>
                  <button value='Login' className='signBtn btnChangePwd' onClick={changePass}> Change Password </button>
                </div>
              </form>
            </div>
            {responseDt}
            <div className="btnNext">
              <button value='Next' className='signBtn btnEditPro' onClick={submitChanges}> Next </button>
            </div>
          </div>
        </div>
        {/* <div className="profileLeft">11</div>
              <div className="profileRight">22</div> */}
      </div>
    </div>
  );
}

export default EditProfile;