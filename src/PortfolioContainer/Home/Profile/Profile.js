import React from "react";
import Typical from 'react-typical'
import ScrollService from "../../../Utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/jennifer-amaka-oliseyenum-2650b6141" target="blank">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/JennyAmy"  target="blank">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.instagram.com/jennyamy20/"  target="blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011316306687"  target="blank">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/Jennybliss01"  target="blank">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
                {" "}
                Welcome! My name is <span className="highlighted-text">Jennifer Oliseyenum</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        "A Fullstack Developer",
                        1000,
                        "Angular Developer",
                        1000,
                        "C#/.NET Core",
                        1000,
                        "React",
                        1000,
                        "NodeJs",
                        1000,
                        "Database Management",
                        1000
                    ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                    I am proficient in a variety of platforms and systems.
                </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
                {" "}
                Contact Me{" "}
            </button>
            <a href='ehizcv.pdf' download="Jennifer OliseyenumCV.pdf">
                <button className="btn highlighted-btn">Get Résumé</button></a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
