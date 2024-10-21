import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Style.css";
import Logo from "./img/logo.png";
import CounseLogo from "./img/councellorproimg.png";
import parentTypeImg from "./img/parentType.png";
import conselorTypeImg from "./img/CouncillorType.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Waiting from "./Loading";
import EnterOtp from "./EnterOtp";
import VerifyStatus from "./VerificationStatus";
import Menu from "./menuDashboard";
import TypeImg from "./img/parent.png";
import CouncellorTypeImg from "./img/counsellor.png";
import ArrowTypeImg from "./img/Vector 9.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import rateingImg from "./img/rateing.png";
import Expand_down from "./img/Expand_down.png";
import file_duotone from "./img/File_duotone.png";
import Close_round_duotone from "./img/Close_round_duotone.png";
import rectangleLog from "./img/rectangleLog.png";
import logo_skill from "./img/logo_skill.png";
import id_log from "./img/Group 35527.png";
import id_logs from "./img/Group 34705 (1).png";
import menuLog from "./img/Group 170.png";
import profilePic from "./img/profilePic.png";
import counseReqImg from "./img/Group 35527.png";
import DatePicker from "react-datepicker";
import TimePickerz from "./TimePicker";
import Duration from "./DurationComponent";
import "react-datepicker/dist/react-datepicker.css";

export default function CounsellingRequestList() {
  const [isTabVisible, setIsTabVisible] = useState(1);
  const Example = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    );
  };


  const DropdownComponent = () => {};

  useEffect(() => {

  });

  const toggleCard = (e) => {
    e.preventDefault();
    let selectedId = e.target.id
    console.log('ZZZ',e.target.id)


    setIsTabVisible(e.target.id);
    if (isTabVisible == "btn01") {
      setIsTabVisible(1);
    }
    else if (isTabVisible == "btn02") {
      setIsTabVisible(2);
    }
    else if (isTabVisible == "btn03") {
      setIsTabVisible(3);
    }
  };
  return (
    <div className="navContainer">
      <div className="strapNav"></div>
      <div className="CounsToggleProfile">
        <img src={logo_skill} alt="" className="enquiryAssignImg" />
        <ul className="enquiryAssign-nav">
          <li>Dashboard</li>
          <li>Counselling</li>
          <li>Exam packs</li>
          <li>Students list</li>
          <li>Enquiries list</li>
        </ul>
        <button className="EnquiryInbox">Inbox</button>
        <a href="" className="Enquiry-idLog">
          <img src={id_logs} alt="" />
        </a>
        <a href="" className="Enquiry-MenuLog">
          <label htmlFor="" className="Enquiry-MenuLog-label">
            Menu
          </label>

          <img src={menuLog} alt="" className="" />
        </a>
      </div>
      <h1 className="CounsellingRequest-main-head">
        Upcoming Counselling session
      </h1>
      <div className="CounsellingRequest-top-cont">
        <img
          src={profilePic}
          alt=""
          className="CounsellingRequest-top-cont-img"
        />
        <div className="CounsellingRequest-top-cont-head-para">
          <h1 className="CounsellingRequest-top-cont-head">Student name</h1>
          <div className="CounsellingRequest-top-cont-parag">
            <p>Date of exam</p>
            <p>Exam pack</p>
            <p>View result</p>
          </div>
        </div>
        <h2 className="CounsellingRequest-top-cont-head2">
          Today at 10:00 am - 11:00 am
        </h2>
        <h2 className="CounsellingRequest-top-cont-head3">
          In 25 minutes, you have a video call session
        </h2>
        <div className="CounsellingRequest-top-cont-btn">
          <button className="CounsellingRequest-top-cont-btnContact">
            Contact
          </button>
          <button className="CounsellingRequest-top-cont-btnSession">
            Join session
          </button>
        </div>
      </div>
      <h3 className="CounsellingRequest-top-cont-head4">
        See all upcoming counselling session
      </h3>
      <div className="CounsellingRequest-middle-con">
        <ul className="counsellReq-li">
          <li>Scheduled counseling List</li>
          <li>Counselling request list</li>
          <li>Reschedule request list</li>
        </ul>
      </div>
      <div className="overflow-counsReq">
        <div className="counsellingRequest-bottom-container">
          <h1 className="counsellingRequest-bottom-container-head">
            Counselling request list
          </h1>
          <div className="enquiryPage-scroll">
            <div className="counsellingRequest-bottom-SmallContainer">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
                {isTabVisible}
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn01"
              >
                Schedule
              </button>
            </div>
            {isTabVisible == 1 ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="counsellingRequest-bottom-SmallContainer counsReq-smallContMarg">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn02"
              >
                Schedule
              </button>
            </div>

            {isTabVisible == 2 ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="counsellingRequest-bottom-SmallContainer counsReq-smallContMarg">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn03"
              >
                Schedule
              </button>
            </div>

            {isTabVisible == 3 ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="counsellingRequest-bottom-SmallContainer counsReq-smallContMarg">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn04"
              >
                Schedule
              </button>
            </div>

            {isTabVisible == "btn04" ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="counsellingRequest-bottom-SmallContainer counsReq-smallContMarg">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn05"
              >
                Schedule
              </button>
            </div>

            {isTabVisible == "btn05" ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="counsellingRequest-bottom-SmallContainer counsReq-smallContMarg">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn06"
              >
                Schedule
              </button>
            </div>

            {isTabVisible == "btn06" ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="counsellingRequest-bottom-SmallContainer counsReq-smallContMarg">
              <img
                src={counseReqImg}
                alt=""
                className="counsellingRequest-bottom-SmallContainer-img"
              />
              <div className="counsellingRequest-bottom-SmallContainer-content">
                <h1>Name</h1>
                <h2>Requested date</h2>
              </div>
              <button
                className="counsellingRequest-bottom-SmallContainer-button"
                onClick={toggleCard}
                id="btn07"
              >
                Schedule
              </button>
            </div>

            {isTabVisible == "btn07" ? (
              <div className="counsellingRequest-studentList-cont">
                <div className="counsellingRequest-studentList-para">
                  <h1 className="counsellingRequest-studentList-head">
                    Student details
                  </h1>
                  <label
                    htmlFor=""
                    className="counsellingRequest-studentList-label"
                  >
                    Requested on : 12 / 05 / 2024
                  </label>
                </div>
                <div className="counsellingRequest-img-cont">
                  <img src={profilePic} alt="" />
                  <div className="counsellingRequest-img-details">
                    <label htmlFor="">Student name</label>
                    <p className="counsellingRequest-img-details-extraMarg">
                      Date of exam
                    </p>
                    <p>Exam pack</p>
                    <p>Contact number</p>
                    <p>
                      <u>View result</u>
                    </p>
                  </div>
                </div>
                <div className="counsellingRequest-setDate-cont">
                  <div className="counsellingRequest-setDate-content-time">
                    <label htmlFor="">Set date</label>
                    <Example />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="">Set time</label>
                    <TimePickerz />
                  </div>
                  <div className="counsellingRequest-setDate-content-time2">
                    <label htmlFor="" className="counsReq-dur">
                      Duration
                    </label>
                    <Duration></Duration>
                  </div>
                </div>
                <div className="CounsellingRequestList2-btns">
                  <button className="CounsellingRequestList2-btns1">
                    Cancel
                  </button>
                  <button className="CounsellingRequestList2-btns2">
                    Schedule
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="counsellingRequest-bottom-SmallContainer-viewAll">
            <label htmlFor="">View all</label>
          </div>
        </div>
      </div>
    </div>
  );
}
