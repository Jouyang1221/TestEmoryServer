import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";

const HeaderSignedIn = () => {
  return (
    <header>
      <>
        <Navbar bg="primary" variant="dark" collapseOnSEelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Emory Exchange</Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/chat">
                <Nav.Link href="/chat">
                  Chat <i className="fas fa-solid fa-message"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>
                  Profile <i className="fas fa-user"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default HeaderSignedIn;
