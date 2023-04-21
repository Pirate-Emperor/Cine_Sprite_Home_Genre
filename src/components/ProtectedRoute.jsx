import React from 'react'
import {Navigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({setHomeMode,children}) => {
    const {user} = UserAuth()
    if(!user){
        setHomeMode(true);
        return <Navigate to="/signIn"></Navigate>
    }else{
        return children
    }
 
}

export default ProtectedRoute