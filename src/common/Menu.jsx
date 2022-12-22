import React from "react";
import { Navbar,Container,Nav} from "react-bootstrap"; 


const Menu = ({darkmode,setDarkmode}) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <span><i class="bi bi-brightness-high"></i></span>
              <input type="checkbox" onChange={()=>setDarkmode(!darkmode)}/>
              <span><i class="bi bi-brightness-high"></i></span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
