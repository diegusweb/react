import React, { Component } from "react";
//import { getCarts } from "../utils/api";
import CartView from "../components/CartView";
import { Link } from "react-router-dom";

import { refcar } from "./config/constants";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: [],
      total: 0
    };

  }

  componentDidMount() {
    this.setState({
      carts: refcar
    });
  }

  onPayCart(){
    console.log("sdasdsadasdasdasdas");
    this.refcar = [];
  }

  render() {
    const { carts } = this.state;
    return (
      <React.Fragment>
        <div class="pl-5 pr-5">
          <div class="row justify-content-center">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Price</th>
                  <th scope="col">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item, i) => {
                  let subtotal = item.price * item.cantidad;
                  this.state.total = subtotal + this.state.total;
                  return (
                    <tr>
                      <th scope="row">{item.product} - {item.name}</th>
                      <td>{item.cantidad}</td>
                      <td>{item.price}</td>
                      <td>{subtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="col-sm-6">
              <h3>Total: {this.state.total}</h3>
              <button  className="btn btn-default">
                Cancelar
              </button>
              <button className="btn btn-default">
                Pagar
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
