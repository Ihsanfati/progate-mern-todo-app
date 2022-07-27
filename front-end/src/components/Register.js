import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Dashboard from "./Dashboard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);

    const handleFullName = (event) => {
        const fullName = event.target.value;
        setFullName(fullName);
    }

    const handleJob = (event) => {
        const job = event.target.value;
        setJob(job);
    }

    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }

    const handlePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    }

    const handleState = async (event) => {
        event.preventDefault();
        
        await axios.post("http://localhost:3001/", {fullName, job, email, password}).then((response) => {
            console.log(response);
        });

        setStatus(true);
    }

    if(status){
        return <Dashboard />
    } else {
        return(
            <div className='App' 
            style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                backgroundColor: '#fafafa',
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '10%',
                left: '38.5%',
                borderRadius: '25px'
            }}>
                <Form >
                    <h3 style={{marginTop: '20px'}}>S I G N U P</h3>
                    <TextField
                        style={{
                            marginTop: '20px',
                            marginBottom: '15px'
                        }}
                        id="outlined"
                        label="fullname"
                        type="fullname"
                        onChange={(event) => {handleFullName(event)}}
                    />
                    <TextField
                        style={{
                            marginBottom: '15px'
                        }}
                        id="outlined"
                        label="profession"
                        type="profession" 
                        onChange={(event) => {handleJob(event)}}
                    />
                    <TextField
                        style={{
                            marginBottom: '15px'
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
                        <Button href="/login">Don't have an account?</Button>
                    </Form.Group>
                    <Button 
                        style={{
                            marginBottom: '30px'
                        }}
                        variant="contained" 
                        type="submit" 
                        onClick={(event) => {handleState(event)}}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Register;