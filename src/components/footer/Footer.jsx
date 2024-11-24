import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <img className="footerLogo" src={assets.logo} alt="" />
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners.
          </p>
          <div className="footerSocialIcon">
            <Link to="https://www.facebook.com/zomato/" target="blank">
              <img src={assets.facebook_icon} alt="" />
            </Link>
            <Link
              to="https://x.com/zomato?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="blank"
            >
              <img src={assets.twitter_icon} alt="" />
            </Link>
            <Link to="https://in.linkedin.com/company/zomato" target="blank">
              <img src={assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footerContentCenter">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footerContentRight">
          <h2>Get In Our Touch</h2>
          <ul>
            <li>+91-xxxx</li>
            <li>company@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyright">
        2008-2024 © Zomato™ Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
