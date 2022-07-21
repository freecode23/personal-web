import "./topbar.css"
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { saveAs } from "file-saver";



export default function TopBar() {

    const publicFolderPath = "https://myblogs3bucket.s3.us-east-2.amazonaws.com/"
    const {isAuthenticated, logout}=useAuth0();
    const { userData } = useUserData();
    const [resumeUrl, setResumeUrl] = useState(""); 

    // fetch user here to get link github, linkedin, and picture
    const handleLogout = async (event) => {
        event.preventDefault();
        logout({returnTo: window.location.origin});
    }

    // set resume url
    useEffect(() => {
        const fetchResumeUrl = async() => {
            if(userData) {
                console.log("resume key:", userData.resumeKey);
                const res = await axios.post("/resume", {key: userData.resumeKey}); 

                if(res) {
                    setResumeUrl(res.data);
                }
            }
        }
        fetchResumeUrl()
        
    }, [userData])

    const saveFile = () => {
        console.log("savefile....");
        // Question 3: not downloading as the name (download as the key)
        saveAs(resumeUrl, "SherlyHartono.pdf");
    };

    return (
        <div className="top">
            <div className="topLeft">
            {
                userData &&
                <>
                    <a className="social link" href={userData.github}>
                        <i className="topSocialIcon fa-brands fa-github-square "></i>
                    </a>
                    <a className="social link" href={userData.linkedin}>
                        <i className="topSocialIcon fa-brands fa-linkedin"></i>
                    </a>
                </>
            }
                
            </div>
            <div className="topCenter">
                <div className="topCenterName">
                    Sherly Hartono
                </div>
                <div className="topCenterDescription">
                    SOFTWARE DEVELOPMENT, MACHINE LEARNING, MSCS@NORTHEASTERN
                </div>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to={"/"}>HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to={"/contact"}>CONTACT</Link>
                    </li>

                    {isAuthenticated &&
                    <li className="topListItem">
                        <Link className="link" to={"/write"} >WRITE</Link>
                    </li>}

                    {userData &&
                        <li className="topListItem" onClick={saveFile}>
                            {/* <a className="link"
                               href={resumeUrl}
                               download="SherlyHartono.pdf">RESUME</a> */}


                            RESUME
                        </li>


                    }
                </ul>

                
            </div>
            <div className="topRight">
                {isAuthenticated && userData &&
                    <>
                        <p className="topLogoutButton"
                            onClick={handleLogout}>
                            logout
                        </p>

                        <Link className="link" to={"/setting"}>
                            <img className="topProfileImg"
                            src={publicFolderPath + userData.profilePic}
                            alt="profile" />
                        </Link>

                    </>
                }
            </div >


        </div >
    )
}
