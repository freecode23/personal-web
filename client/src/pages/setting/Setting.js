import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"
import profilePicture from "../../images/sh-circ.png"

function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                {/* Update delete account */}
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update account</span>
                    <span className="settingDeleteTitle">Delete account</span>
                </div>
                <form className="settingForm">
                    {/* profile picture */}
                    <label>Profile Picture</label>
                    <div className="settingPp">
                        <img src={profilePicture} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPpIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    {/* username email password button */}
                    <label>Username</label>
                    <input type="text" placeholder="Sherly" />
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting