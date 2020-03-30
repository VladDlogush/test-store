import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const ProductsListUl = styled.ul`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-wrap: wrap;
`;
const LinkStyle = styled.div`
  text-decoration: none;
`;
const ItemImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;

const ItemHeadline = styled.h5`
  text-decoration: none;
  color: rgb(47, 47, 47);
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;

const ProductsListItem = styled.li`
  flex: 0 0 25%;
  padding: 2%;
  border: 1px solid black;
  margin-bottom: 20px;
`;

const ProductsList = ({ products = [], match }) => (
  <ProductsListUl>
    {products.map(product => (
      <ProductsListItem key={product.id}>
        <LinkStyle>
          <Link
            to={{
              pathname: `${match.path}/${product.id}`
            }}
          >
            <ItemImage src={product.image} alt="product" />
            <ItemHeadline>{product.name}</ItemHeadline>
          </Link>
        </LinkStyle>
      </ProductsListItem>
    ))}
  </ProductsListUl>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(ProductsList);
