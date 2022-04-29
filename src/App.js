import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  Jumbotron,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron className="background">
        <h1>60% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Show Item</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {shoes.map(function (a) {
              return (
                <div className="col-md-4">
                  <img
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    width="100%"
                  />
                  <h4>{shoes[a].title}</h4>
                  <p>{shoes[a].price}</p>
                </div>
              );
            })}
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
