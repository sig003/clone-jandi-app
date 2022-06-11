import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MainRight() {
  return (
    <>
      <div className="main-right">
        <div className="main-right-is-top">
          <ul className="main-right-icon-top-wrapper">
            <li className="main-right-icon-circle">
              <MenuIcon />
            </li>
            <li className="main-right-icon-circle">
              <i className="main-right-menu-search"></i>
            </li>
            <li className="main-right-icon-circle">
              <i className="main-right-menu-todo"></i>
            </li>
            <li className="main-right-icon-circle">
              <i className="main-right-menu-file"></i>
            </li>
            <li className="main-right-icon-circle">
              <i className="main-right-menu-origanization"></i>
            </li>
            <li className="main-right-icon-circle">
              <LanOutlinedIcon />
            </li>
            <li className="main-right-icon-circle">
              <i className="main-right-menu-connect"></i>
            </li>
          </ul>
        </div>
        <div className="main-right-is-bottom">
          <div className="main-right-icon-circle">
            <StarBorderIcon />
          </div>
          <div className="main-right-icon-circle">
            <AlternateEmailIcon />
          </div>
          <div className="main-right-icon-circle">
            <AccountCircleIcon fontSize="large"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRight;