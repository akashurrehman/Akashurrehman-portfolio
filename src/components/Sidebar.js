import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Sidebar=() =>{
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expanded={expanded} onToggle={toggleExpand}>
      <Navbar.Toggle aria-controls="sidebar-nav" />
      <Navbar.Collapse id="sidebar-nav">
        <Nav className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Sidebar;