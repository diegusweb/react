import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavCartCount from "./NavCartCount";

const StyledLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  margin: 0 20px;
`;

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <StyledLink class="nav-link" to="/listcatalog">
        SHOPPING CART
      </StyledLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <StyledLink class="nav-link" to="/listcatalog">
              Catalog List
            </StyledLink>
          </li>
          <li class="nav-item">
            <StyledLink class="nav-link" to="/about">
              About us
            </StyledLink>
          </li>
        </ul>
        <span class="navbar-text">
          <Link to={`/cart/`}>
            <NavCartCount />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
