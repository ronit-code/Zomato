import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navBar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navBarMenu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          {" "}
          Home{" "}
        </Link>
        <a
          href="#exploreMenu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          {" "}
          Menu{" "}
        </a>
        <a
          href="#appDownload"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          {" "}
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          {" "}
          Contact{" "}
        </a>
      </ul>
      <div className="navBarRight">
        <img src={assets.search_icon} alt="" />
        <div className="navBarSearchIcon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
