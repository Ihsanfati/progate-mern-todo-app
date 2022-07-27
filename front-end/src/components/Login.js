import React, { useState } from "react";
import axios from 'axios';
import { Form } from "react-bootstrap";
import Dashboard from "./Dashboard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


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
            <div 
            className='App'
            style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                backgroundColor: '#fafafa',
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '20%',
                left: '38.5%',
                borderRadius: '25px'
            }}>
                <Form >
                    <h3 style={{marginTop: '20px'}}>L O G I N</h3>
                    <TextField
                        style={{
                            marginTop: '20px',
                            marginBottom: '20px'
                        }}
                        required
                        id="outlined-required"
                        label="email required"
                        defaultValue="email"
                        type="email" 
                        onChange={(event) => {handleEmail(event)}}
                    />
                    <TextField
                        style={{
                            marginBottom: '20px'
                        }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(event) => {handlePassword(event)}}
                    />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button href="/register">Don't have an account?</Button>
                    </Form.Group>
                    <Button 
                        style={{
                            marginBottom: '30px'
                        }}
                        variant="contained" 
                        type="submit" 
                        onClick={(event) => {handleFetch(event)}}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;