import React from "react";
import axios from "axios";
import { Component } from "react";
import { MDBContainer } from "mdbreact";
import { Navbar, NavLink, Nav, Container, Button, Form } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Register extends React.Component {
    state = {
        fullName: '',
        job: '',
        email: '',
        password: ''
    }

    handleFullName = (event) => {
        const fullName = event.target.value;
        this.setState({
            fullName: fullName
        })
    }

    handleJob = (event) => {
        const job = event.target.value;
        this.setState({
            job: job
        })
    }

    handleEmail = (event) => {
        const email = event.target.value;
        this.setState({
            email: email
        })
    }

    handlePassword = (event) => {
        const password = event.target.value;
        this.setState({
            password: password
        })
    }

    handleState = async (event) => {
        event.preventDefault();
        console.log(this.state);
        
        await axios.post("http://localhost:3001/", this.state).then((response) => {
            console.log(response);
        })
    }

    render(){
        return(
            <div className='App' style={{
                textAlign: 'center', 
                padding: '12px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1>Login Page</h1>
                <MDBContainer>
                    <div className="heavy-rain-gradient color-block-5 mb-3 mx-auto z-depth-1-half"
                    style={{
                        width: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '25%',
                        left: '38.5%',
                        backgroundColor: 'grey',
                        borderRadius: '25px'
                    }}>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicFullName" style={{width: '250px', paddingTop: '15px', textAlign: 'left'}}>
                                <Form.Label >Full Name:</Form.Label>
                                <Form.Control 
                                    style={{
                                        justifyContent: 'center'
                                    }}
                                    type="fullName" 
                                    placeholder="Enter your name" 
                                    onChange={(event) => {this.handleFullName(event)}}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicProfession" style={{width: '250px', textAlign: 'left'}}>
                                <Form.Label>Profession</Form.Label>
                                <Form.Control 
                                    type="profession" 
                                    placeholder="Enter your job" 
                                    onChange={(event) => {this.handleJob(event)}}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '250px', textAlign: 'left'}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange={(event) => {this.handleEmail(event)}}
                                />
                                <Form.Text className="text-muted">
                                    Your email is encrypted..
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword" style={{width: '250px', textAlign: 'left'}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={(event) => {this.handlePassword(event)}}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <a href="/login"><p>Have an account?</p></a>
                            <Button variant="primary" type="submit" onClick={(event) => {this.handleState(event)}}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </MDBContainer>
            </div>
        )
    }
}

export default Register;