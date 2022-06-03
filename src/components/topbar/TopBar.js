import "./topbar.css"
import shProfile from "../../images/sh-circ.png"


export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topSocialIcon fa-brands fa-github-square"></i>
                <i className="topSocialIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        HOME
                    </li>
                    <li className="topListItem">
                        ABOUT
                    </li>
                    <li className="topListItem">
                        CONTACT
                    </li>
                    <li className="topListItem">
                        WRITE
                    </li>
                    <li className="topListItem">
                        LOGOUT
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topProfileImg" src={shProfile} alt="profile" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

            </div>

        </div >
    )
}
