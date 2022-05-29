/*eslint-disable */
import { useState } from "react";
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
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Card from "./pages/Card";

function App() {
  let [shoes, shoes변경] = useState(data);
  let [hidden, hiddenChange] = useState(false);
  let navigate = useNavigate();

  function Modal() {
    return (
      <div className="row">
        {shoes.map((a, i) => {
          return <Card key={i} shoes={shoes[i]} i={i} />;
        })}
      </div>
    );
  }

  function Cart() {
    return (
      <>
        <div>주문정보</div>
      </>
    );
  }

  return (
    <div className="App">
      <header onClick={() => hiddenChange(false)}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("./");
              }}
              style={{ cursor: "pointer" }}
            >
              Hyukskee Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => {
                    navigate("./");
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/Cart");
                  }}
                >
                  Cart
                </Nav.Link>
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
      </header>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Jumbotron className="background">
                  <h1>60% Season Off</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
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
              </>
            }
          ></Route>
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      <div className="container">{hidden === true ? <Modal /> : null}</div>
    </div>
  );
}
{
  /* <div>
              {shoes.map((a, i) => {
                return <Card key={i} shoes={shoes[i]} i={i} />;
              })}
            </div> */
}

export default App;
