import "./topbar.css"
import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import shProfile from "../../images/sh-circ.png"
import { useUserData } from "../../context/Context";
import { useAuth0 } from "@auth0/auth0-react";


export default function TopBar() {

    const {isAuthenticated, logout}=useAuth0();
    const { userData } = useUserData();

    // fetch user here to get link github, linkedin, and picture
    const handleLogout = async (event) => {
        event.preventDefault();
        logout({returnTo: window.location.origin});
        localStorage.removeItem("user");
    }

    return (
        <div className="top">
            <div className="topLeft">
            {
                userData ? <><a className="social link" href={userData.github}>
                    <i className="topSocialIcon fa-brands fa-github-square "></i>
                </a>
                <a className="social link" href={userData.linkedin}>
                    <i className="topSocialIcon fa-brands fa-linkedin"></i>
                </a></> : null
            }
                
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
                        onClick={handleLogout}>
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
