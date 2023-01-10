import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <div className="left">
        <button>
          <img
            id="guide"
            src="https://cdn.iconscout.com/icon/free/png-256/bars-1440391-1216351.png"
            alt=""
          />
        </button>

        <img
          id="youtube"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
          alt=""
        />
      </div>
      <div className="middle">
        <div className="input">
          <input type="text" />
        </div>
        <button id="searchbar">
          <img
            id="search"
            src="https://static.thenounproject.com/png/977009-200.png"
            alt=""
          />
        </button>
        <button id="mic">
          <img
            id="micpic"
            src="https://i.pinimg.com/originals/74/ce/14/74ce14befb22695743659cf8a8290c2b.png"
            alt=""
          />
        </button>
      </div>
      <div className="right">
        <button>
          <img
            id="noti"
            src="https://static.vecteezy.com/system/resources/previews/006/086/198/non_2x/notification-icon-for-web-vector.jpg"
            alt=""
          />
        </button>
        <button>
          <img
            id="avatar"
            src="https://www.videodeck.net/images/avatar.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
