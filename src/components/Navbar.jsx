import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState("ul-nav");
  const [toggleIcon, setToggleIcon] = useState("ul-nz");
  const navToggle = () => {
    active === "ul-nav" ? setActive("ul-nav nav-active") : setActive("ul-nav");
    toggleIcon === "ul-nz"
      ? setToggleIcon("ul-nz toggle")
      : setToggleIcon("ul-nz");
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <ul className={active}>
          <li className="ul-li">
            <a href="#id-pocetna" className="ul-clan">
              Početna
            </a>
          </li>
          <li className="ul-li">
            <a href="#usluge" className="ul-clan">
              Usluge
            </a>
          </li>
          <li className="ul-li">
            <a href="#o-nama" className="ul-clan">
              O nama
            </a>
          </li>
          <li className="ul-li">
            <a href="#id-iskustva" className="ul-clan">
              Recenzije
            </a>
          </li>
          <div onClick={navToggle} className={toggleIcon}>
          <div className="ul-nesto1"></div>
          <div className="ul-nesto2"></div>
          <div className="ul-nesto3"></div>
        </div>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="ul-nesto1"></div>
          <div className="ul-nesto2"></div>
          <div className="ul-nesto3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
