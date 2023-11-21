import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const MainNav = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">goods</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Get-started" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">sign-up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">sign-out</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
