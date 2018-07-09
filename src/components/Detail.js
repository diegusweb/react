import React, { Component } from "react";
import { getProduct } from "../utils/api";
import { addItemCart } from "../utils/api";
import { Link } from "react-router-dom";
import { refcar } from './config/constants'

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getProduct(id)
      .then(res => {
        this.setState({
          productDetail: res.data
        });
      })
      .catch(err => console.log(err));
  }
  

  onAddlProductToCart = productDetail => event => {
    const newItemCart = {
      product: productDetail.product,
      name: productDetail.name,
      cantidad: 2,
      price: parseInt(productDetail.price),
      total: (parseInt(productDetail.price) * 2)
    };

    refcar.push(newItemCart);

    addItemCart(newItemCart)
      .then(res => {
        console.log("add success");        
      })
      .catch(err => console.log(err));
  };

  render() {
    const { productDetail } = this.state;
    return (
      <React.Fragment>
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              {productDetail.product} - {productDetail.name}
            </div>
            <div class="card-body">
              <img
                src={productDetail.image}
                class="card-img-top"
                alt={productDetail.product}
              />
              <p>{productDetail.description}</p>
              <hr />
              <span class="badge badge-danger badge-cat">
                Price {productDetail.price}
              </span>

              <button
                onClick={this.onAddlProductToCart(productDetail)}
                class="btn btn-success btn-block"
              >
                buy
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
