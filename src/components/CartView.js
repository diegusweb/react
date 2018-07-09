import React from "react";
import { Link } from "react-router-dom";


const Cart = ({ item }) => {
  return (
    <tr>
      <th scope="row">{item.name}</th>
      <td>{item.cantidad}</td>
      <td>{item.price}</td>
      <td>{item.total}</td>
    </tr>
  );
};

export default Cart;