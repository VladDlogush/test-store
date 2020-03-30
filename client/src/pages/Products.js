import React, { Component } from "react";
import styled from "styled-components";
import * as ProductsApi from "../services/products-api";
import ProductsList from "../components/ProductsList";

const Div = styled.div`
  padding: 0 150px;
`;

const H3 = styled.h3`
  font-size: 30px;
`;

class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    ProductsApi.fetchTasks().then(products => {
      console.log(products);
      this.setState({ products: products });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Div>
        <H3>Available products</H3>
        <ProductsList products={products} />
      </Div>
    );
  }
}

export default Products;
