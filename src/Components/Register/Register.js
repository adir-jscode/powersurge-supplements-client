
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import SocialLogin from '../SocialLogin/SocialLogin';
  import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/firebase.init';
const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
     const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});


    if (user) {
        console.log(user);
        navigate("/home")
    }
    if(error){
                <p>Error: {error.message}</p>
            }

    const handleLogin = () => {
        navigate("/login")
    }
    
    const handleRegister = ( event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        console.log(name, email, password);
    }
    return (
        <div className="container w-50 mx-auto mt-5">
            <h1 className="text-dark text-center">Register</h1>
            <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="dark" type="submit">
                    Register
                </Button>
                <p onClick={handleLogin} className="text-center">Already have an account? <button className="text-dark fw-bold btn btn-link text-decoration-none">Please Login</button> </p>
            </Form>
            <SocialLogin></SocialLogin>
    
            

        </div>
    );
};

export default Register;