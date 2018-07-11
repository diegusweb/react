import React, { Component } from "react";
import logo from '../images/indice.png';
import { refcar } from "./config/constants";

class NavCartCount extends Component {

  render() {
    return <div className="cart">{refcar.length} items in the cart <img className="logo" width="30" src="https://www.iconsdb.com/icons/preview/caribbean-blue/cart-15-xxl.png" alt="" /></div>
  }
}

export default NavCartCount;
