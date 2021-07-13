import { Avatar, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import "./static/login.css"
import { useStateValue } from './static/StateProvider';
const Login = () => {

    const [{ }, dispatch] = useStateValue();

    const SignIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                });
            })
            .catch(error => alert(error.message))
    }


    return (
        <>
            <div className="login">
                <div className="login__container">
                    <img src="lock.jpg" width="200px" />
                    <div className="login__text">
                        <Button variant="contained" onClick={SignIn}> Login with google</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;