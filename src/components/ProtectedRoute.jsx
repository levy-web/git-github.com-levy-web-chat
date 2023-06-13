import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    console.log(localStorage.getItem('username'))


    if (!localStorage.getItem('username')){
        return <Navigate to='/login'/>
    }
    return children
}

export default ProtectedRoute;