import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user,error] = useAuthState(auth);
    const navigate = useNavigate();
  let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let showError;
    if (error) {
        showError = <div>
        <p className="text-danger">{error.message}</p>
      </div>
    }
     if (user) {

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
  .then((json) => console.log(json));
     navigate(from, { replace: true });
  }
    return (
        <div>
            <div className="mt-5 d-flex align-items-center">
            <div style={{height: '1px'}} className="bg-dark w-50"></div>
            <p className="mb-1 px-2">OR</p>
            <div style={{ height: '1px' }} className="bg-dark w-50"></div>
            
            
            </div>
            <div className="w-50 mx-auto text-center mt-2">
                <button onClick={()=>signInWithGoogle()} className="btn btn-dark text-white fw-bold">
                    <img style={{ width: '30px'}}src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google Business"></img>
                    Google Sign in
                </button>
                {showError}
            </div>
        </div>
        
    );
};

export default SocialLogin;