import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Okurmen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Үй</Nav.Link>
            <Nav.Link href="#about">Жөнүндө</Nav.Link>
            <Nav.Link href="#service">Кызмат</Nav.Link>
            <Nav.Link href="#works">Чыгармалары</Nav.Link>
            <Nav.Link href="#teams">Командалар</Nav.Link>
            <Nav.Link href="#testimonials">Көрсөтмөлөр</Nav.Link>
            <Nav.Link href="#pricing">Баалар</Nav.Link>
            <Nav.Link href="#blog">Блог</Nav.Link>
            <Nav.Link href="#contact">Байланыш</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
