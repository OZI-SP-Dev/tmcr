import { Container, Navbar } from "react-bootstrap";

export const AppHeader = () => {
  return (
    <Navbar variant="dark" bg="dark" className="p-0 shadow">
      <Container>
        <Navbar.Brand className={"col-xs-1 col-sm-3 col-md-2 mr-0"}>
          TMCR Template Generator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
