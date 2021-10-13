import { useState } from "react";
import logo from "../../mlh-prep.png";

import "./header.css";

const Header = ({ city, onChangeCity, results, isLoaded }) => {
  return (
    <div results = {results}> 
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div class="center-text-div">
        <div class="temparature">25 °C</div>
        <p class="weather">Clear Sky | New York</p>
      </div>
    </div>

  )}
export default Header;
