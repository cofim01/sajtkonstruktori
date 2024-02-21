import React from "react";
import "./onama.scss";

function Onama(){
    return(
        <div id="o-nama" className="onama">
            <div className="onama-box">
                <h1 className="onama-h1">O nama</h1>
                <p>
                    Mi smo grupa posvećenih ljudi sastavljenih od licenciranih trenera i najboljih nutricionista koji pružaju usluge
                    konsaltinga u oblasti zdravlja od početka 2015. godine. Do sada smo imali preko 3000+ zadovoljnih korisnika i bili 
                    smo u prilici da radimo sa preko 100+ poznatih ličnosti, čija su imena na vrhu svetske sportske liste. Rad smo započeli
                    na uskoj teritoriji Beograda, a danas poslujemo i na lokalnom nivou na teritoriji cele Srbije, kao i globalno u 
                    zemljama Evrope poput Španije, Francuske, Italije, Makedonije, Hrvatske...
                </p>
            </div>
            <div className="onama-info">
            <h3 className="onamainfo-h3">Kako do nas?</h3>
                <p>Možete nas kontaktirati na telefon: 0615555555 ili 
                    nam poslati mejl na adresu konstruktorisrbija@gmail.com</p>
            </div>
        </div>
    );
}

export default Onama;