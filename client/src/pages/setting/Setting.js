import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../context/Context";
import "./setting.css"

function Setting() {
    const { userData, dispatch } = useContext(UserContext);
    const { user } = useAuth0()
    const navigate = useNavigate();

    // 1. variables
    const [profilePic, setProfilePic] = useState(null); 
    const [username, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [about, setAbout] = useState(""); 
    const [linkedin, setLinkedin] = useState(""); 
    const [github, setGithub] = useState(""); 
    const [signature, setSignature] = React.useState();

     // 2. update at init
    useEffect(() => {

        // - signature for s3
        const getSignature = async () => {
            fetch('/get_signature')
            .then(r => r.json())
            .then(data => setSignature(data))
        }
        getSignature();

        // - get User from context to prepopulate field 
        if(userData) {
            setName(userData.username);
            setEmail(userData.email);
            setAbout(userData.about);
            setLinkedin(userData.linkedin);
            setGithub(userData.github);
        }
    }, [])


    // 3. When Update is clicked
    const handleSubmit = async (event) => {
        event.preventDefault();

        // - create new or updated user 
        const updatedUser = {
            username,
            email,
            about,
            linkedin,
            github,
            sub: user.sub
        }

        try {
            const res = await axios.post("/users", updatedUser); 
            res.data && navigate("/");
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="setting">
            <div className="settingWrapper">
                {/* Update delete account */}
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update account</span>
                </div>
                <form className="settingForm">
                    {/* profile picture */}
                    <label>Change Profile Picture</label>
                    <div className="settingPp">
                        {/* if file has been staged, display */}
                        {profilePic && <img className="writeImage" src={URL.createObjectURL(profilePic)} alt="" />}

                        {/* change profile pic */}
                        <label htmlFor="fileInput">
                            <i className="settingPpIcon far fa-user-circle"></i>
                        </label>
                        {/* <input type="file" id="fileInput" style={{ display: "none" }} /> */}
                        <input id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            onChange={e => {
                            setProfilePic(e.target.files[0]);
                        }}
                    />
                    </div>

                    <label>Name</label>
                    <input type="text"
                            onChange={e =>{
                            setName(e.target.value);
                        }}
                           defaultValue={username}
                           />

                    <label>Email</label>
                    <input
                        type="email"
                        onChange={e =>{
                            setEmail(e.target.value);
                        }}
                        defaultValue={email}
                        />
                    <label>Linkedin</label>
                    <input
                        type="text"
                        onChange={e =>{
                            setLinkedin(e.target.value);
                        }}
                        defaultValue={linkedin}
                        />

                    <label>Github</label>
                    <input
                        type="text" 
                        onChange={e =>{
                            setGithub(e.target.value);
                        }}
                        defaultValue={github}
                        />

                    <label>About</label>
                    <textarea
                        onChange={e =>{
                            setAbout(e.target.value);
                        }}
                        placeholder="Hello, my name is.."
                         defaultValue={about}
                        />
                    <button className="settingSubmitButton"
                            onClick={handleSubmit}>
                            Update
                    </button>


                </form>
            </div>
        </div>
    )
}

export default Setting