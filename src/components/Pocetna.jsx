import React from "react";
import "./pocetna.scss";
import konstruktori from "./konstruktori.jpg"

function Pocetna(){
    return(
        <div id="id-pocetna" className="pocetna">
            <div className="poc-balls-wrapper">
                <div className="poc-blue-ball-blur" />
                <div className="poc-blue-rectangle-blur" />
            </div>
            <div className="pocetna-text">
                <hr className="poc-hr" />
                <p>
                    Dobrodošli!
                </p>
                <p>
                    Mi smo grupa specijalizovanih konsultanata u oblasti fizičkog zdravlja i ishrane.
                </p>
            </div>
            <div className="poc-logo">
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span> 
              </div>
                <img src={konstruktori} alt="" className="poc-slika" />
                <div className="arrow">
                 <span></span>
                 <span></span>
                 <span></span>
              </div>
            </div>
        </div>
    );
}

export default Pocetna;