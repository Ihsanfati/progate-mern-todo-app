import React, { useState } from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link, Container, Button, Form } from "react-bootstrap";
import Dashboard from "./Dashboard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [status, setStatus] = useState(false);

    const handleEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }
    
    const handlePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

    const handleError = async (newErrors) => {
        await setErrors(newErrors);
    }

    const handleFetch = (event) => {
        event.preventDefault();

        const newErrors = [];

        axios.get("http://localhost:3001/").then((response) => {
            const dataAPI = {
                email: response.data[0].email,
                password: response.data[0].password
            }

            console.log(dataAPI);

            if(dataAPI.email === email) {
                console.log("Email correct!");
                if(dataAPI.password === password) {
                    console.log("Password correct!");
                    setStatus(!status);
                } else {
                    console.log("Password wrong!");
                    newErrors.push("Password salah"); 
                    handleError(newErrors);
                }
            } else {
                console.log("Email wrong!");
                newErrors.push("Email tidak terdaftar");
                handleError(newErrors);
            }
            
            console.log(email);
            console.log(password);
            console.log(errors);
            console.log(status);
        });
    }

    if(status) {
        return <Dashboard />
    } else {
        return(
            <div className='App' style={{textAlign: 'center', padding: '12px'}}>
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
                        borderRadius: '25px'
                    }}>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '250px', paddingTop: '15px', textAlign: 'left'}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange={(event) => {handleEmail(event)}}
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
                                    onChange={(event) => {handlePassword(event)}}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <a href="/register"><p>Don't have an account?</p></a>
                            <Button variant="primary" type="submit" onClick={(event) => {handleFetch(event)}}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </MDBContainer>
            </div>
        )
    }
}

export default Login;