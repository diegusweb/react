import React, { Component } from "react";
import ProductList from "../components/ProductList";
import { getProducts } from "../utils/api";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts()
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch(err => console.log(err));
  }

  onDetailProduct = id => event => {
    console.log(id);
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <div class="pl-5 pr-5">
          <div class="row justify-content-center">
            {products.map(el => (
              <ProductList
                key={"i-" + el.id}
                item={el}
                onDetailProduct={this.onDetailProduct}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;