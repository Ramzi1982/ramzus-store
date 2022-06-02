import { Collapse } from "bootstrap";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

let audio = new Audio("/mixkit-fast-double-click-on-mouse-275.wav");

const start = () => {
  audio.play();
};

let audio2 = new Audio("/mixkit-modern-click-box-check-1120.wav");

const start2 = () => {
  audio2.play();
};

function NavbarStore() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow">
        <Container>
          <Link className="navbar-brand fw-bold fs-2  " to="/" onClick={start}>
            Ramzus Store
          </Link>
          <button
            className="navbar-toggler"
            type="botton"
            data-bs-toggle="Collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar toggle icon"></span>
          </button>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="Nav">
              <Link className="nav-link" to="/" onClick={start2}>
                Home
              </Link>
              <Link className="nav-link" to="/products" onClick={start2}>
                Products
              </Link>
              <Link className="nav-link" to="/about" onClick={start2}>
                About
              </Link>
              <Link className="nav-link" to="contact" onClick={start2}>
                Contact
              </Link>
            </Nav>
            <div className="buttons">
              <Link to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length} )
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarStore;
