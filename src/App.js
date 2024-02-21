import React from 'react';
import Navbar from "./components/Navbar";
import Pocetna from "./components/Pocetna";
import Usluge from "./components/Usluge";
import Onama from "./components/Onama";
import Iskustva from './components/Iskustva';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Pocetna/>
      <Usluge/>
      <Onama/>
      <Iskustva/>
      <Footer/>
    </div>
  );
}

export default App;
