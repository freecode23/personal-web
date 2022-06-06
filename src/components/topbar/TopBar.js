import "./topbar.css"
import shProfile from "../../images/sh-circ.png"
import {
    Link
} from "react-router-dom";

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topSocialIcon fa-brands fa-github-square"></i>
                <i className="topSocialIcon fa-brands fa-linkedin"></i>
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

                    {user && <li className="topListItem">
                        <Link className="link" to={"/write"}>WRITE</Link>
                    </li>}

                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user &&
                    <Link className="link" to={"/setting"}>
                        <img className="topProfileImg" src={shProfile} alt="profile" />
                    </Link>

                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div >
    )
}
