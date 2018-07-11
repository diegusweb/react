import React, { Component } from "react";
//import { getCarts } from "../utils/api";

import { refcar } from "./config/constants";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: [],
      total: 0
    };

    this.handleText = this.handleText.bind(this);
  }

  componentDidMount() {
    this.setState({
      carts: refcar
    });
  }

  handleText(item, i) {
    let cantidad = this.refs["cantidad" + i].value;

    refcar.forEach(function(element) {
      if (element.id === item.id) {
        element.cantidad = cantidad;
      }
    });

    this.setState({
      carts: refcar,
      total: 0
    });
  }

  handlePayCart(i) {
    alert("Your Payment was successful");
    while (refcar.length > 0) {
      refcar.pop();
    }
    this.setState({
      carts: [],
      total: 0
    });
  }

  handleRemoveItem(item, i) {
    console.log(i);
    refcar.forEach(function(element) {
      if (element.id === item.id) {
        refcar.pop();
      }
    });

    this.setState({
      carts: refcar,
      total: 0
    });
  }

  render() {
    const { carts } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-8 tablecart">
          <div className="row justify-content-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Price</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item, i) => {
                  let subtotal = item.price * item.cantidad;
                  this.state.total = subtotal + this.state.total;

                  return (
                    <tr key={i}>
                      <th scope="row">
                        {item.product} - {item.name}
                      </th>
                      <td>
                        <input
                          type="number"
                          ref={"cantidad" + i}
                          placeholder={item.cantidad}
                          onChange={this.handleText.bind(this, item, i)}
                          className="form-control cart-input-with"
                        />
                      </td>
                      <td>{item.price}</td>
                      <td>{subtotal}</td>
                      <td onClick={this.handleRemoveItem.bind(this, item, i)}>
                        remove
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <table className="table">
              <tr>
                <td />
                <td />
                <td />
                <td className="colTotal">
                  <b>Total: </b>
                  {this.state.total}
                </td>
                <td />
              </tr>
            </table>
            <div className="col-sm-6">
              <button
                className="btn btn-success"
                onClick={this.handlePayCart.bind(this)}
              >
                Buy Cart
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
