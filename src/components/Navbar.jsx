import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navbar from "../styles/navbar.css";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import OffCanvasExample from "../hooks/OffcanvasCart";

function BasicExample() {
  return (
    <Navbar expand="l" className="">
      <Container>
        <Navbar.Brand href="#home" id="navbar_brand">
          {" "}
          Quretto cafe
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="home">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="services">Services</Link>
            <Link to="about">About us</Link>
            <Link to="contact">Contact us</Link>
            {/* <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <i class="bi bi-cart"></i> 
            </button> */}

            <Link to={`/OffcanvasCart/`} className="home_cart">
              <BsFillBagFill />
            </Link>
           <Link to={`/Login/`}>
            <button id="navbar_login_btn">Login/Sign-up</button></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
