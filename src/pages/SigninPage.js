import React, {useContext, useEffect} from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const SigninPage = () => {
    const {user} = useContext(GlobalContext)
    const navigate = useNavigate(); 
    useEffect(() => {
        if (user != null) {
            navigate('/');
            console.log(user);
        }
    },[navigate, user]);
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
};

export default SigninPage;
