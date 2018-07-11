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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <StyledLink className="nav-link" to="/listcatalog">
        SHOPPING CART
      </StyledLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <StyledLink className="nav-link" to="/listcatalog">
              Catalog List
            </StyledLink>
          </li>
          <li className="nav-item">
            <StyledLink className="nav-link" to="/cart">
             Cart
            </StyledLink>
          </li>
          <li className="nav-item">
            <StyledLink className="nav-link" to="/about">
              About us
            </StyledLink>
          </li>
        </ul>
        <span className="navbar-text">
          <Link to={`/cart/`}>
            <NavCartCount />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
