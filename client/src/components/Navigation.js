import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  padding: 8px 16px;
  text-decoration: none;

  &.${activeClassName} {
    color: palevioletred;
  }
`;

const Navigation = ({ authenticated }) => (
  <StyledList>
    {authenticated && (
      <>
        <li>
          <StyledNavLink to="/home">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </li>
      </>
    )}

    {!authenticated && (
      <>
        <li>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signup">Signup</StyledNavLink>
        </li>
      </>
    )}

    <li>
      <StyledNavLink to="/about">About</StyledNavLink>
    </li>
  </StyledList>
);

export default Navigation;
