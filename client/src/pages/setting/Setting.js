import axios from 'axios'
import React, { useContext, useState } from 'react';
import { UserContext } from "../../context/Context";
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import profilePicture from "../../images/sh-circ.png"
import "./setting.css"

function Setting() {
    const navigate = useNavigate();

    // 1. variables
    const {user} = useContext(UserContext);
    const [profilePic, setProfilePic] = useState(null); 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [about, setAbout] = useState(""); 
    const [linkedin, setLinkedin] = useState(""); 
    const [github, setGitHub] = useState(""); 
    const [signature, setSignature] = React.useState();


    // 2. get signature and set so we can access s3
    React.useEffect(() => {
        const getSignature = async () => {
            fetch('/get_signature')
            .then(r => r.json())
            .then(data => setSignature(data))
        }
        getSignature();
    }, [])
   console.log(user);
    // 3. When publish is clicked
    const handleSubmit = async (event) => {
        event.preventDefault();

        // - create newpost with the editor state
        const updatedUser = {
            userId: user._id,
            name,
            profilePic,
            email,
            about,
            linkedin,
            github
        }
        // - add photo if file exists - will be set by the JSX
        if (profilePic) {
            // - get the file name
            const filename = Date.now() + profilePic.name;

            // - create a new form data
            const formData = new FormData();
            formData.append("name", filename)
            formData.append("file", profilePic);

            // - upload big photo
            try {
                const res = await axios.put("/users/", user._id, updatedUser); 
                updatedUser.profilePic=res.data.key; // save in Mongo
                console.log("updatedUser=", updatedUser);

            } catch (err) {
                console.log(err);

            }
        } else {
            // show error 
        }

        // 2. create the blogpost
        try {
            const res = await axios.post("/blogposts", updatedUser); 
            res.data && navigate("/blogposts/" + res.data._id);
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
                           defaultValue="Sherly Hartono"
                           />

                    <label>Email</label>
                    <input
                        type="email"
                        onChange={e =>{
                            setEmail(e.target.value);
                        }}
                        defaultValue="shartono1@gmail.com"
                        />
                    <label>Linkedin</label>
                    <input
                        type="text"
                        onChange={e =>{
                            setLinkedin(e.target.value);
                        }}
                        defaultValue="https://www.linkedin.com/in/sherly-hartono/"
                        />

                    <label>GitHub</label>
                    <input
                        type="text" 
                        onChange={e =>{
                            setGitHub(e.target.value);
                        }}
                        defaultValue="https://github.com/freecode23/"
                        />

                    <label>About</label>
                    <textarea
                        onChange={e =>{
                            setAbout(e.target.value);
                        }}
                        placeholder="I am a student in ..."
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