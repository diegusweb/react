import React from "react";
import { Link } from "react-router-dom";


const ProductList = ({ item, onDetailProduct }) => {
  return (
    <div className="col-md-3 cartStyles">
      <div className="card card-01">
        <Link to={`/catalog/${item.id}`}>
          <img src={item.image} className="card-img-top" alt={"Loading image "+item.product} />
        </Link>
        <div className="card-body " >
          <h4 className="card-title">{item.product}</h4>

          <hr />
          <span className="badge badge-danger badge-cat">Price {item.price}</span>

          <Link to={`/catalog/${item.id}`} className="btn btn-info btn-block">         
            more informtion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
