import React from "react";
import { Component } from "react";
import { Navbar, NavLink, Nav, Container } from "react-bootstrap";

class Logout extends React.Component {
    render(){
        return(
            <div className='App' style={{textAlign: 'center', padding: '12px'}}>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">Home</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/register">Register</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/logout">Logout</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <h1>You're logged out !!</h1>
            </div>
        )
    }
}

export default Logout;