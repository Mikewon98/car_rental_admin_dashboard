import React from "react";
import "./topNav.css";

import { Link } from "react-router-dom";
import profileImg from "../assets/images/profile-02.png";

const TopNav = () => {
  return (
    <div className='top__nav'>
      <div className='top__nav__wrapper'>
        <div className='search__box'>
          <input type='text' placeholder='Search for..' />
          <span>
            <i className='ri-search-line'></i>
          </span>
        </div>
        <div className='top__nav__right'>
          <span className='notification'>
            <i className='ri-notification-3-line'></i>
            <span className='badge'>1</span>
          </span>
          <div className='profile'>
            <Link to='/settings'>
              <img src={profileImg} alt='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
