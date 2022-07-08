import "./topbar.css"
import React from 'react';
import { Link } from "react-router-dom";

import shProfile from "../../images/sh-circ.png"
import { useAuth0 } from "@auth0/auth0-react";


export default function TopBar() {

    const {isAuthenticated, logout}=useAuth0();

    return (
        <div className="top">
            <div className="topLeft">
                <a className="social link" href="https://www.github.com/freecode23">
                    <i className="topSocialIcon fa-brands fa-github-square "></i>
                </a>
                <a className="social link" href="https://www.linkedin.com/in/sherly-hartono/">
                    <i className="topSocialIcon fa-brands fa-linkedin"></i>
                </a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to={"/"}>HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to={"/about"}>ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to={"/contact"}>CONTACT</Link>
                    </li>

                    {isAuthenticated && <li className="topListItem">
                        <Link className="link" to={"/write"} >WRITE</Link>
                    </li>}

                    {/* <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li> */}
                    {/* AUTH0>>>>>>>>>>>>>>>>> */}
                    <li className="topListItem"
                        onClick={()=>logout(
                            {returnTo: window.location.origin}
                        )}>
                        {isAuthenticated && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {isAuthenticated &&
                    <Link className="link" to={"/setting"}>
                        <img className="topProfileImg" src={shProfile} alt="profile" />
                    </Link>

                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div >
    )
}
