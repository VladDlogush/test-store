import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProductWrapper = styled.div`
  padding: 0 10%;
  color: rgb(47, 47, 47);

  h3 {
    font-size: 30px;
    padding-bottom: 20px;
  }
`;

const ReturnButton = styled.button`
  color: #ffffff;
  background-color: rgb(47, 47, 47);
  padding: 10px 30px;
  border: none;
  font-size: 20px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Stats = styled.div`
  display: flex;
  padding-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const StatsItem = styled.div`
  flex: 33% 0 0;
  margin-right: 20px;

  p {
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
`;

const Product = ({ product, handleGoback }) => (
  <ProductWrapper>
    <ReturnButton type="button" onClick={handleGoback}>
      Return
    </ReturnButton>
    <h3>All about {product.name}</h3>
    <Stats>
      <StatsItem>
        <img src={product.image} alt="pet" />
      </StatsItem>

      <StatsItem>
        <p>Age: {product.age}</p>
        <p>Gender: {product.gender}</p>
        <p>Color: {product.color}</p>
        <p>Breed: {product.breed}</p>
      </StatsItem>
    </Stats>
    <Description>{product.description}</Description>
  </ProductWrapper>
);

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  handleGoback: PropTypes.func.isRequired
};

export default Product;
