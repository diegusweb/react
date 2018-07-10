import React, { Component } from "react";
import logo from '../images/indice.png';
import { refcar } from "./config/constants";

class NavCartCount extends Component {

  render() {
    return <div className="cart">{refcar.length} items in the cart <img src={logo} width="100" height="50" /> </div> ;
  }
}

export default NavCartCount;
