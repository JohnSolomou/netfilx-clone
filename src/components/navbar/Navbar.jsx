import React, { useState } from "react";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>

          <span>New and Popular</span>
          <Link to="/list" className="link">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kids</span>

          <Notifications className="icon" />

          <div className="profile">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/04/05/27/cookies-435296_960_720.png"
              alt=""
            />
            <div className="options">
              <div className="set">
                <img
                  src="https://cdn.pixabay.com/photo/2014/09/04/05/27/cookies-435296_960_720.png"
                  alt=""
                />
                <span className="name">John</span>
              </div>
              <div className="set">
                <SettingsIcon className="icon" />
                <span className="name">Settings</span>
              </div>
              <hr />
              <span>Log Out</span>
            </div>
            <ArrowDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
