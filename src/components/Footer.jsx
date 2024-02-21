import React from "react";
import "./footer.scss";
import konstruktori from "./konstruktori.jpg"
import {
    FaInstagram,
    FaFacebookF,
  } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
            <hr className="footer-hr" />
            <div className="footer-box">
            <div className="ikonice">
            <a
              className="footer-ig"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="footer-fb"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            </div>
            <div className="logo">
                <img src={konstruktori} alt="" className="footer-slika" />
            </div>
            </div>
        </div>
    );
}

export default Footer;