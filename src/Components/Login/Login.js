import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../Firebase/firebase.init';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [
  signInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);
  console.log(error);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  let displayError;
  // if (error) {
  //  toast("provide valid email and password")
  // }
  let from = location.state?.from?.pathname || "/";
  const handleRegistration = () => {
    navigate("/register");
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  }
  if (user) {
    toast("login successful");
    console.log(user.email);
    fetch('https://still-sierra-81975.herokuapp.com/user', {
  method: 'POST',
  body: JSON.stringify({
    email: user.email
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
      .then((data) => {
        console.log(data)
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
  });
     
  }
  const handleRestPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Password reset email sent');
    }
    else {
      toast('Please provide a email address');
    }
    
  }
    return (
      <div className="container w-50 mx-auto mt-5">
        <h1 className="text-black text-center">Login</h1>
      <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="dark" type="submit">
    Login
          </Button>
          <div className="text-danger">
               {displayError}
          </div>
         
          <p onClick={handleRegistration} className="text-center"><button className="text-dark fw-bold btn btn-link text-decoration-none">Create a new account</button> </p>
          <p onClick={handleRestPassword} className="text-center"><button className="text-dark fw-bold btn btn-link text-decoration-none">Reset Password</button> </p>
        </Form>
        <SocialLogin></SocialLogin>
        <ToastContainer />
    </div>
  );
};

export default Login;