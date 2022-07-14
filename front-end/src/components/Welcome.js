import React from "react";
import { Component } from "react";
import { Navbar, NavLink, Nav, Container } from "react-bootstrap";

class Welcome extends React.Component {
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <h1>Welcome !!</h1>
            </div>
        )
    }
}

export default Welcome;