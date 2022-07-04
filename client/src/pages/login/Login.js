import "./login.css"
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


export default function Login() {
    const {loginWithRedirect}=useAuth0();
    
    return (
          
        <div className="login">
            <span className="loginTitle">Login</span>
            <button className="loginButton"
                    onClick={()=> loginWithRedirect()}>
                Login
            </button>


        </div>
    )
}
