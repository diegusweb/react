import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCarts } from "../utils/api";
import { refcar } from "./config/constants";

class NavCartCount extends Component {

  render() {
    return <div className="cart">{refcar.length} items in the cart</div>;
  }
}

export default NavCartCount;
