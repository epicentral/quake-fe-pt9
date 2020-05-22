import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import WorldMap from "./WorldMap";
import WhatToDo from './WhatToDo';
import Dropdown from './Dropdown'

const Home = (props) => {

  const [fema, setFema] = useState([])

  useEffect(()=> {
    axios
    .get(
      `https://www.fema.gov/api/open/v1/FemaRegions 

      `
       
    )
    .then((res) => {
      console.log("REZ- STATE", res.data.FemaRegions );
      // props.setUserCoords(res.data[0] );
       setFema(res.data.FemaRegions)
    });
  },[])
  
   
  return (
    <div className="home">
      <Header />
      <Dropdown fema = {fema}/>

      <div className="img-div">
        <WorldMap />
        {/* <Login /> */}
      </div>
      <h1>Preparedness</h1>
        
      <div className="prepare">
        <div className="p-div">
          <p>
            With Epicentral you will be able to get the latest updates on
            earthquakes happening around the world in real time; as well as be
            able to get up to date information on how to be prepared, and what
            to do in the event of an earthquake.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
