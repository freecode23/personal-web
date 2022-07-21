import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserData } from "../../context/UserContext";
import "./setting.css";

function Setting() {
  // const { userData } = useContext(UserContext);
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  // 1. JSX variables
  const [profilePic, setProfilePic] = useState(null);
  const [resume, setResume] = useState(null);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  // 2. update at init
  useEffect(() => {
    // - get User from context to prepopulate field
    if (userData) {
      setName(userData.username);
      setEmail(userData.email);
      setAbout(userData.about);
      setLinkedin(userData.linkedin);
      setGithub(userData.github);
    }
  }, [userData]);

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
      sub: user.sub,
    };
    // - add profile pic if its added
    if (profilePic) {
      // - create the name
      const filename = Date.now() + profilePic.name;

      // - create a new form data
      const formData = new FormData();
      formData.append("name", filename);
      formData.append("file", profilePic);

      try {
        // - upload big photo
        const res = await axios.post("/upload", formData);
        updatedUser.profilePic = res.data.key;
      } catch (err) {
        console.log(err);
      }
    } else {
      // show error
    }

    // - add resume if added
    if (resume) {
      console.log("if resume url resume");
      // - create the name
      const filename = resume.name;

      // - create a new form data
      const formData = new FormData();
      console.log("resumefilename", filename);
      formData.append("name", filename);
      formData.append("file", resume);

      try {
        // - upload resume
        const res = await axios.post("/upload", formData);
        updatedUser.resumeKey = res.data.key;
      } catch (err) {
        console.log(err);
      }
    } else {
      // show error
    }

    // - update the user
    try {
      const res = await axios.post("/users", updatedUser);
      setUserData(res.data);
      res.data && navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        {/* Update delete account */}
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPp">
            {/* if file has been staged, display */}
            {profilePic && (
              <img
                className="writeImage"
                src={URL.createObjectURL(profilePic)}
                alt=""
              />
            )}

            {/* change profile pic */}
            <label htmlFor="fileInput">
              <i className="settingPpIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                setProfilePic(e.target.files[0]);
              }}
            />
          </div>

          <label>Resume</label>
          <div className="settingPp">
            {/* if file has been staged, display */}
            {resume && (
              <img
                className="writeImage"
                src={URL.createObjectURL(resume)}
                alt=""
              />
            )}

            {/* change resume */}
            <label htmlFor="resumeInput">
              <i className="settingPpIcon far fa-light fa-file"></i>
            </label>
            <input
              id="resumeInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                setResume(e.target.files[0]);
              }}
            />
          </div>

          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            defaultValue={username}
          />

          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={email}
          />
          <label>Linkedin</label>
          <input
            type="text"
            onChange={(e) => {
              setLinkedin(e.target.value);
            }}
            defaultValue={linkedin}
          />

          <label>Github</label>
          <input
            type="text"
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            defaultValue={github}
          />

          <label>About</label>
          <textarea
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder="Hello, my name is.."
            defaultValue={about}
          />
          <button className="settingSubmitButton" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Setting;
