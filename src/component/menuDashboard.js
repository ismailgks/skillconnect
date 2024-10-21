import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './menuDashboard.css';

const Menu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeSub = () => {
    setIsSubMenuOpen(false)
  }

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setMenuOpen(!menuOpen)
  };

  const logout = () => {
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('RefreshToken');
  }

  return (
    <div className="smallMenu">
      <div className="menu-item" onClick={toggleSubMenu}>
        <div className={!menuOpen ? 'btnMenu' : 'btnMenu-Clicked btnMenu'}><span className={!isSubMenuOpen ? 'span1' : 'span1 span2'}>Menu</span></div>
      </div>
      <div className={`submenu ${isSubMenuOpen ? 'open' : 'close'}`}>
        <div className="submenu-item"><Link to="/editprofile">Edit Profile</Link></div>
        <div className="submenu-item"><Link to="/" onClick={logout}>Logout</Link></div>
      </div>
    </div>
  );

};

export default Menu;
