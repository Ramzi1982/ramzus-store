import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

let audio = new Audio("/mixkit-fast-double-click-on-mouse-275.wav");

const start = () => {
  audio.play();
};

function NavbarStore() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow">
        <Container>
          <Navbar.Brand className=" fw-bold fs-2  ;" href="/" onClick={start}>
            Ramzus Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="Nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <div className="buttons">
              <Link to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-shopping-cart me-2">
                  {" "}
                  Cart ({state.length})
                </i>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarStore;
