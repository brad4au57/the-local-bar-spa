import React from "react";

// Asset imports
import mobileLogo from "../assets/vector/isolated-monochrome-light-wo-slogan.svg";
import desktopLogo from "../assets/default-horizontal-cropped.png";

// Bootstrap component imports
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  return (
    <Navbar expand="md" fixed="top" className="bg-primary">
      <Container>
        <Navbar.Brand href="" className="order-md-2">
          <img
            src={mobileLogo}
            className="nav-logo d-md-none"
            alt="simple dark logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle light aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link
              href="#link"
              className="my-auto mr-5 h3 font-weight-light"
            >
              Food
            </Nav.Link>
            <Navbar.Brand href="" className="">
              <img
                src={desktopLogo}
                className="nav-logo d-none d-md-block"
                alt="side-by-side dark logo"
              />
            </Navbar.Brand>
            <Nav.Link
              href="#home"
              className="my-auto ml-md-5 h3 font-weight-light"
            >
              Drinks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
