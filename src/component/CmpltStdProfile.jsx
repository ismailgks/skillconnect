import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import User from './img/profilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import { useNavigate } from "react-router-dom";
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faFilePen } from '@fortawesome/free-solid-svg-icons';
import LeftArrow from './img/leftArrow.png';
import PasswordStrengthMeter from './Passcheck';
import axios from 'axios';

function StudentProfileComp() {
  let navigate = useNavigate();
  const initialState = {
    fullName: 'isml',
    contactNumber: '9998889990',
    yearOfBirth: '1990',
    email: 'isml@gmail.com',
    gender: 'male',
    address: 'tk house',
    grade: '7',
    institution: 'ot',
    country: 'in',
    parentName: 'mss',
    parentContactNumber: '8889998880',
    occupation: 'biz',
    profilePhoto: '112'
  }
  let arr = '';
  const [childData, setChildData] = useState('');
  const [uploadedPic, setUploadedPic] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('ds');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [loginError, setLoginError] = useState(true);
  const [responseDt, setResponseDt] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [uploadId, setUploadId] = useState(null);
  const [uploadFormData, setUploadFormData] = useState({
    id: 7,
    userid: 'dfec03fb-ec6a-4171-8546-66bcc4d0c0a0',
    file: arr,
    // contentType: '',
    // contentDisposition: '',
    // length: '',
    // name: '',
    // fileName: ''
  })
  const [formData, setFormData] = useState({
    userid: 'dfec03fb-ec6a-4171-8546-66bcc4d0c0a0',
    fullName: '',
    contactNumber: '',
    yearOfBirth: '',
    email: '',
    gender: '',
    address: '',
    grade: '',
    institution: '',
    country: '',
    parentName: '',
    parentContactNumber: '',
    occupation: '',
    profilePhoto: ''
  });

  // const apiCall =()=>{
  //   try {
  //     const response5 = axios.get('https://dev-skillsconnectgateway.onzitr.com/api/Auth/GetCurrentUser', {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       }
  //     });
  //     setCurrentUser(response5.data)
  //     console.log('asd',currentUser)
  //     setFormData({
  //       fullName: response5.data.fullname
  //     });
  //     setFormData({
  //       userid: '',
  //       fullName: 112,
  //       contactNumber: '',
  //       yearOfBirth: '',
  //       email: '',
  //       gender: '',
  //       address: '',
  //       grade: '',
  //       institution: '',
  //       country: '',
  //       parentName: '',
  //       parentContactNumber: '',
  //       occupation: '',
  //       profilePhoto: '112'
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  const apiCall = () => {

  }
  useEffect(() => {
    // setFormData({
    //   profilePhoto:profilePhoto
    // })

    setFormData({
      profilePhoto: uploadFormData.file
    });
    console.log(144, uploadedPic)
    const token = localStorage.getItem('TokenQ')
    setToken(token)
    console.log('Component mounted');
    apiCall()
  }, [uploadedPic]);




  //   catch (error) {
  //   console.error('Submission error:', error);
  // }

  // formData.email = currentUser.email
  // formData.fullName = currentUser.fullName
  // formData.contactNumber = currentUser.userName
  // formData.grade = currentUser.grade

  const addDataStudentComplete = (e) => {
    e.preventDefault();
    // uploadFormData.userid = 'dfec03fb-ec6a-4171-8546-66bcc4d0c0a0'
    // uploadFormData.id = '7'
    // uploadFormData.contentDisposition = 'attachment';
    // uploadFormData.contentType = arr.type;



    try {
      axios.post('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/Insert', formData, {
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

    handleReset()
    let path2 = '/'
    // navigate(path2);






    //   axios.post('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/Insert', formData, {
    //     headers: {
    // axios.get('https://dev-skillsconnectgateway.onzitr.com/api/Auth/GetCurrentUser', {
    // headers: {
    //   'Authorization': `Bearer ${token}`,
    //   'Content-Type': 'application/json',
    // }
    //   }
    // })
    // .then(response =>
    //   setResponseDt(response.data),
    //   setLoginError(true)
    // )
    // .catch(error => setError(error));

    // setFormData(initialState)

    uploadFile();
  }
  const uploadTest = (e) => {
    e.preventDefault();
    const formData5 = new FormData();
    formData5.append('id', '7');
    formData5.append('file', uploadFormData.file);

    try {
      axios.post('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/UpdateFile', formData5, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
    }
    catch (error) {
      console.error('Submission error:', error);
    }

  }

  const uploadFile = () => {
    const formData2 = new FormData();
    formData2.append('file', uploadFormData.file);
    formData2.append('id', '7');
    formData2.append('userid', 'dfec03fb-ec6a-4171-8546-66bcc4d0c0a0');
    try {
      axios.post('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/UpdateFile', formData2, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
    }
    catch (error) {
      console.error('Submission error:', error);
    }
  }
  const handleDataFromChild = (data) => {
    setChildData(data);
  };
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const backTo = () => {
    console.log('Clicked ...')
    const formData = new FormData();
    // formData.append('profilePhoto',
  }
  const submitLogin = () => {
    console.log('Loggined ...')
  }
  const handleChange = (event) => {

  }
  const handleFileChange = (event) => {
    arr = event.target.files[0]
    setUploadedPic(arr)
  };
  const handleChange77 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleFileChange7 = (event) => {
    arr = event.target.files[0]
    setUploadFormData({
      file: arr
    });
    console.log(arr)
    setFormData(prevData => ({
      ...prevData,
      profilePhoto: "131"
    }));
    uploadFormData.userid = 'dfec03fb-ec6a-4171-8546-66bcc4d0c0a0';
    uploadFormData.id = '7';
    console.log('ssd', uploadFormData)
  };
  const handleReset = () => {
    setFormData({
      userid: 'dfec03fb-ec6a-4171-8546-66bcc4d0c0a0',
      fullName: '',
      contactNumber: '',
      yearOfBirth: '',
      email: '',
      gender: '',
      address: '',
      grade: '',
      institution: '',
      country: '',
      parentName: '',
      parentContactNumber: '',
      occupation: '',
      profilePhoto: null
    });
  }
  return (
    <div className="App">
      <div className='dashboardlogo completeProWrap'>
        <img src={Logo} alt="logo" title='logo' />
      </div>
      <div className="content">
        <div className="">
          <a href="" className='backLink'>
            {/* <img src={LeftArrow} alt="" /> */}
            <h1 className='titleProfileStdComp'>Complete Your Student Profile</h1>
          </a>
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
                <button className='btnEdit' onClick={handleUploadClick}>Upload</button>
                <input
                  type="file"
                  onChange={handleFileChange7}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  required
                />
                <button className='btnEdit btnRemove'>Remove</button>
              </div>
            </div>
          </div>


          <div className="profile-content">
            <div className="form_title">Personal details</div>
            <div className='editFormWrap'>
              <form className='personalDetailsForm'>
                <fieldset>
                  <div className='formLabel'>
                    <label htmlFor="">Full Name</label>
                  </div>
                  <input type='text' name='fullName' value={formData.fullName} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Full name' />
                </fieldset>
                <fieldset className='txtEmail'>
                  <div className='formLabel'><label htmlFor="">Year of birth</label></div>
                  <input type='text' name='yearOfBirth' value={formData.yearOfBirth} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Year of birth' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Gender</label></div>
                  <input type='text' name='gender' value={formData.gender} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Gender' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Grade</label></div>
                  <input type='text' name='grade' value={formData.grade} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Grade' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Institution</label></div>
                  <input type='text' name='institution' value={formData.institution} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Institution' />
                </fieldset>
              </form>
              <form className='personalDetailsForm'>
                <fieldset className='pR'>
                  <div className='formLabel'><label htmlFor="">Contact number</label></div>
                  <input type='text' name='contactNumber' value={formData.contactNumber} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Contact number' />
                </fieldset>
                <fieldset className='txtEmail pR'>
                  <div className='formLabel'><label htmlFor="">Email</label></div>
                  <input type='text' name='email' value={formData.email} className='textboxs editProfile_textbox' onChange={handleChange77} placeholder='Email' />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Address</label></div>
                  <textarea id="textarea" name='address' onChange={handleChange77} value={formData.address} rows="4" cols="64" />
                </fieldset>
                <fieldset>
                  <div className='formLabel'><label htmlFor="">Country</label></div>
                  <input type='text' name='country' onChange={handleChange77} value={formData.country} className='textboxs editProfile_textbox' placeholder='Country' />
                </fieldset>


              </form>
            </div>
            <div>
              <div className="form_title bottomForm">Parent details</div>
              <form className='personalDetailsForm w-100'>
                <div className='editProfileParentLeft'>
                  <fieldset>
                    <div className='formLabel'><label htmlFor="">Parent name</label></div>
                    <input type='text' name='parentName' value={formData.parentName} onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Parent Name' />
                  </fieldset>
                  <fieldset>
                    <div className='formLabel formLabelParent'><label htmlFor="">Parent Contact Number</label></div>
                    <input type='text' name='parentContactNumber' value={formData.parentContactNumber} onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Parent Contact Number' />
                  </fieldset>
                  <fieldset>
                    <div className='formLabel'><label htmlFor="">Occupation</label></div>
                    <input type='text' name='occupation' value={formData.occupation} onChange={handleChange77} className='textboxs editProfile_textbox' placeholder='Occupation' />
                  </fieldset>
                </div>
                <div className='editProfileParentRight'>
                  <fieldset>
                    <div className='formLabel'><label htmlFor="">Referral Code</label></div>
                    <input type='text' className='textboxs editProfile_textbox' placeholder='Referral Code' />
                  </fieldset>
                </div>
              </form>
            </div>
            <div className="btnNext">
              <button value='Login' className='signBtn btnEditPro' onClick={addDataStudentComplete}> Continue
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfileComp;