import React, { Component } from "react";
import { getProduct } from "../utils/api";
import { addItemCart } from "../utils/api";
import { Link } from "react-router-dom";
import { refcar } from "./config/constants";
import { refid } from "./config/constants";
import ShowResult from "../components/ShowResult";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: [],
      showResults: false
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
    let verifyItem = false;
    let newItemCart = [];
    newItemCart = {
      id: productDetail.id,
      product: productDetail.product,
      name: productDetail.name,
      cantidad: 1,
      stoke: productDetail.stock,
      price: parseInt(productDetail.price),
      total: parseInt(productDetail.price) * 2
    };


    if (refcar.length === 0) {
      refcar.push(newItemCart);
      refid.push(productDetail.id);
      this.setState({ showResults: true });
    } else {
      if (refid.indexOf(productDetail.id) > -1) {
        alert("This products is already in your cart!");
      } else {
        refid.push(productDetail.id);
        refcar.push(newItemCart);
        verifyItem = true;
      }

      if (verifyItem) {
        this.setState({ showResults: true });
        verifyItem = false;
      }
    }
  };

  demo() {
    this.setState({ showResults: true });
  }

  render() {
    const { productDetail } = this.state;
    return (
      <React.Fragment>
        <div className="justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                {productDetail.product} - {productDetail.name}
              </div>
              <div className="card-body">
                <img
                  src={productDetail.image}
                  className="card-img-top limit-tm"
                  alt={productDetail.product}
                />
                <hr />
                <p>{productDetail.description}</p>
                <hr />
                <span className="badge badge-info badge-cat">
                  Stock {productDetail.stock}
                </span>
                <span className="badge badge-danger badge-cat">
                  Price {productDetail.price}
                </span>

                {this.state.showResults ? <ShowResult /> : null}

                <button
                  onClick={this.onAddlProductToCart(productDetail)}
                  className="btn btn-success btn-block"
                >
                  buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
