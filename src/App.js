/*eslint-disable */
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
import jquery from "jquery";
import $ from "jquery";

function App() {
  let [shoes, shoes변경] = useState(data);
  let [hidden, hiddenChange] = useState(false);

  function Modal() {
    return (
      <div className="row">
        {shoes.map((a, i) => {
          return <Card key={i} shoes={shoes[i]} i={i} />;
        })}
      </div>
    );
  }

  function Card(props) {
    //컴포넌트화
    return (
      <div className="col-md-4">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="100%"
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    );
  }

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
          <Button
            id="showButton"
            onClick={() => {
              hiddenChange(!hidden);
            }}
            variant="primary"
          >
            Show Item
          </Button>
        </p>
      </Jumbotron>
      <div className="container">{hidden === true ? <Modal /> : null}</div>
    </div>
  );
}

export default App;
