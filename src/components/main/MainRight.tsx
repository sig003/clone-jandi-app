import React from 'react';

function MainRight() {
  return (
    <>
      <div className="main-right">
        <div className="main-right-is-top">
          <ul className="main-right-icon-top-wrapper">
            <li className="main-right-icon-circle">
              <i className="main-right-menu-setting"></i>
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
              <i className="main-right-menu-drive"></i>
            </li>
            <li className="main-right-icon-circle">
              <i className="main-right-menu-connect"></i>
            </li>
          </ul>
        </div>
        <div className="main-right-is-bottom">
          <div className="main-right-icon-circle">
            <i className="main-right-menu-favorite"></i>
          </div>
          <div className="main-right-icon-circle">
            <i className="main-right-menu-mention"></i>
          </div>
          <div className="main-right-icon-circle">
            <i className="main-right-menu-profile"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRight;