import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Topnavbar.css";

export default function Topnavbar() {
  return (
    <div>
      <Navbar className="topnav" variant="light">
        <Container>
          <Navbar.Brand className="lunanav" href="#home">
            Lunatap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="insidenav" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="insidenav" href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link className="insidenav" href="#faq">
              FAQ
            </Nav.Link>
            <Nav.Link className="insidenav" href="#support">
              Support
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
