import "./login.css"
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


export default function Login() {
    const {loginWithRedirect, isLoading, error}=useAuth0();

    return (
        <div className="login">
        {!error && isLoading && <p>Loading.....</p>}
        {!error && !isLoading &&
        (   <>
                <span className="loginTitle">Login</span>
                <button className="loginButton"
                    onClick={()=> loginWithRedirect()}>
                    Login
                </button>
            </>
        )
        }
        </div>

    )
}
