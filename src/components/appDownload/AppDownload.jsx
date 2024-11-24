import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const AppDownload = () => {
  return (
    <div className="appDownload" id="appDownload">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="appDownloadPlatforms">
        <Link
          className="appDownloadPlatforms"
          to="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN"
          target="blank"
        >
          <img src={assets.play_store} alt="" />
        </Link>
        <Link
          className="appDownloadPlatforms"
          to="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"
          target="blank"
        >
          <img src={assets.app_store} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AppDownload;
