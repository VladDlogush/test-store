import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../components/Product";
import * as ProductsApi from "../services/products-api";

class ProductPage extends Component {
  state = {
    product: null
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    ProductsApi.fetchTasks().then(products => {
      console.log(products);
      this.setState({ product: products.find(product => product.id === id) });
    });
  }

  handleGoback = () => {
    const { history } = this.props;

    history.push("/products");
  };

  render() {
    const { product } = this.state;
    return (
      <>
        {product && (
          <Product product={product} handleGoback={this.handleGoback} />
        )}
      </>
    );
  }
}

ProductPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default ProductPage;
