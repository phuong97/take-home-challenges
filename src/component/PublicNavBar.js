import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
const PublicNavBar = () => {
  return (
    <div>
      <Navbar className="background-navbar" expand="lg">
        <Navbar.Brand href="#home">GIPHY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} exact to="/" className="text-navbar">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              exact
              to="/gif/categories"
              className="text-navbar"
            >
              Categories
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PublicNavBar;
