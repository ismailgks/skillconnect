import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './counsellormenu.css';

const CounsellorMenu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeSub = () => {
    setIsSubMenuOpen(false)
  }
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setMenuOpen(!menuOpen)
  };

  return (
    <div className="menu mL-30">
      <ul className='dashboardMenuCounsellor'>
        <li>
         <a> Dashboard </a>
        </li>
        <li>
        <a> Counselling</a>
        </li>
        <li>
        <a> Exam packs</a>
        </li>
        <li>
        <a>Students list</a>
        </li>
        <li>
        <a>Enquiries list</a>
        </li>
      </ul>
    </div>
  );
};

export default CounsellorMenu;
