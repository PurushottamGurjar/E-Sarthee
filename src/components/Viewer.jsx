import React from "react";
import { imgData } from "../assets/myassets";
import "./viewer.css";

const Viewer = () => {
  return (
    <div className="viewer-panel">
      <div className="nitw-logo-div">
        <img src={imgData.NITW} alt="NIT Warangal" className="nitw-logo-img" />
      </div>
      <div className="tracking-text">
        <div className="short-tracking-text">
          NIT Warangal E-Sarthee Tracking
        </div>
        <div className="long-tracking-text">
          Welcome to National Institute of Technology , Warangal E-Sarthee
          Tracking{" "}
        </div>
      </div>
      <div className="info-container">
        <p className="info-text">
          This page is Created and Managed by Purushottam Gurjar.
        </p>
      </div>

      <div className="iframe-container">
        <p className="van-number">Van 1: Running Status </p>
        <iframe
          id="myIframe"
          src="https://purush-project1esartheenitw.web.val.run/?view=e816a051-3f44-4165-9248-699fba1c2076"
        ></iframe>
      </div>

      <footer>&copy; 2025 Purushottam Gurjar. All Rights Reserved.</footer>
    </div>
  );
};

export default Viewer;
