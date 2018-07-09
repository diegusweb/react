import React from "react";
import { Link } from "react-router-dom";


const ProductList = ({ item, onDetailProduct }) => {
  return (
    <div class="col-md-3">
      <div class="card card-01">
        <Link to={`/catalog/${item.id}`}>
          <img src={item.image} class="card-img-top" alt={item.product} />
        </Link>
        <div class="card-body">
          <h4 class="card-title">{item.product}</h4>

          <hr />
          <span class="badge badge-danger badge-cat">Price {item.price}</span>

          <Link to={`/catalog/${item.id}`} class="btn btn-info btn-block">         
            more informtion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
