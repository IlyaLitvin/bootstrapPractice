import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            {/* <img src="" alt="" /> */}
            component for LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/About">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contacts">Contacts</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="mr-3">
                SignIn
              </Button>
              <Button variant="secondary">SignOut</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
