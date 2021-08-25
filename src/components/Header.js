import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiVideoAddFill} from 'react-icons/ri'
import {BsGrid3X3GapFill, BsBellFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import logo from '../yt_logo.png'

function Header() {
  return (
      <header className="app_header">
        <div className="logo-box">
        <a className="nav-toggle"><GiHamburgerMenu /></a>
        <img src={logo} alt="youtube_logo" className="header_logo"/>
        </div>
        <div className="search-box">
        <form className="search-form">
        <input type="text" />
        <button className="search-btn"><BiSearch /></button>
      </form>
        </div>
      <div className="icons-box">
      <a href="#" className="header-icons"><RiVideoAddFill /></a>
      <a href="#" className="header-icons"><BsGrid3X3GapFill /></a>
      <a href="#" className="header-icons"><BsBellFill /></a>
      <a href="#" className="user-icon"><FaUserCircle /></a>
      </div>      
      </header>
  );
}

export default Header;