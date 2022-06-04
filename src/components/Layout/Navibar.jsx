import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./Navibar.css"


const Navibar = () => {
  return (
    <Navbar className="navi p-4" expand>
        <Navbar.Brand href="#home" className="navi-links hero">Hello Buddy!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className="navi-links">Home</Nav.Link>
            <Nav.Link href="/flashcards" className="navi-links">Flashcards</Nav.Link>
            <Nav.Link href="/add-card" className="navi-links"> Add New Card</Nav.Link>
            <Nav.Link href="/flashcards" className="navi-links">Edit Collection</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
export default Navibar