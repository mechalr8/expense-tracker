import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const ProtectedRoute = ({children}) => {
    const { user } = useContext(GlobalContext);
        if (!user) {
            console.log(user);
            return <Navigate to='/signin' />;
        }
    return children;
}

export default ProtectedRoute
