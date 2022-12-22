import React from "react";
import { Navbar,Container,Nav} from "react-bootstrap"; 


const Menu = ({darkmode,setDarkmode}) => {
  return (
    <div>
      <Navbar className= {darkmode ? "dark  navbar-dark bg-dark" : "light" } expand="lg">
        <Container>
          <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <button className="btn btn-dark botonDark" onClick={()=>setDarkmode(!darkmode)}>
                {!darkmode ? <i className="bi bi-moon"></i> :<i className="bi bi-brightness-high" ></i>}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
