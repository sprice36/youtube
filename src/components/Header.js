import React , {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVideoAddFill } from "react-icons/ri";
import { BsGrid3X3GapFill, BsBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../yt_logo.png";
import { connect } from "react-redux";
import * as types from "../redux/actions/action-types";
import axios from "axios";
import PropTypes from "prop-types";
import { mapDispatchToProps, mapStateToProps } from "../redux/actions/actions"; 

function Header() {
  const [text, setText] = useState('')
  onsubmit = () => {
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=' + ${text} + '&safeSearch=none&key=AIzaSyBpU4qmIOrepyEnXBUNCgqJuRfxEYN5kp8`;
    axios
      .get(url).then((response) => {
      console.log(response);
      this.props.setSearchResults(response);
    });
  };

  
  return (
    <header className="app_header">
      <div className="logo-box">
        <a className="nav-toggle">
          <GiHamburgerMenu />
        </a>
        <img src={logo} alt="youtube_logo" className="header_logo" />
      </div>
      <div className="search-box">
        <form className="search-form">
          <input type="text" value = {text} onChange = {(e) => setText(e.target.value)} />
          <button className="search-btn" onClick = {onsubmit}>
            <BiSearch />
          </button>
        </form>
      </div>
      <div className="icons-box">
        <a href="#" className="header-icons">
          <RiVideoAddFill />
        </a>
        <a href="#" className="header-icons">
          <BsGrid3X3GapFill />
        </a>
        <a href="#" className="header-icons">
          <BsBellFill />
        </a>
        <a href="#" className="user-icon">
          <FaUserCircle />
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  setSearchResults: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
