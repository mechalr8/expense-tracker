import React, { useContext } from 'react'
import { GoogleButton } from "react-google-button";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase-config';
import { GlobalContext } from '../context/GlobalState';

const Login = () => {
    const {setUser} = useContext(GlobalContext)
    const provider = new GoogleAuthProvider();
    const loginHandle = async () => {
        const response = await signInWithPopup(auth, provider)
        setUser(response.user.providerData[0]);
    }
    return (
        <div>
            <GoogleButton onClick={loginHandle}/>
        </div>
    )
}

export default Login
