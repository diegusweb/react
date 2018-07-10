import React, { Component } from "react";
//import { getCarts } from "../utils/api";

import { refcar } from "./config/constants";

class Cart extends Component {
  constructor(props) {
    super(props);

    //this.inputText = React.createRef();

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
    //console.log(refcar);
    console.log(" dd222sss ");
    let cantidad = this.refs['cantidad' + i].value;
    console.log(" dd " + cantidad);
    //console.log(this.inputText.current.value);

    //refcar[item.id - 1].cantidad = this.inputText.current.value;

    refcar.forEach(function (element) {
      //console.log(element);
      if (element.id === item.id) {
        console.log("siiii");
        element.cantidad = cantidad;
      }
    });

    console.log(refcar);

    this.setState({
      carts: refcar,
      total: 0
    });
  }

  render() {
    const { carts } = this.state;
    return (
      <React.Fragment>
        <div className="pl-5 pr-5">
          <div className="row justify-content-center">
            <table className="table">
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
                    <tr key={i}>
                      <th scope="row">
                        {item.product} - {item.name}
                      </th>
                      <td>
                        <input
                          type="number"
                          ref={"cantidad" + i}
                          onChange={this.handleText.bind(this, item, i)}
                          className="form-control"
                        />
                      </td>
                      <td>{item.price}</td>
                      <td>{subtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="col-sm-6">
              <h3>Total: {this.state.total}</h3>
              <button className="btn btn-default">Cancelar</button>
              <button className="btn btn-default">Pagar</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
