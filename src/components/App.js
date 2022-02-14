import './App.scss';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gotta Go!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
}

export default App;
