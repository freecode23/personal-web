import "./topbar.css"
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";
import shProfile from "../../images/sh-circ.png"

export default function TopBar() {
    const { user, dispatch } = useContext(UserContext);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

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
                        <Link className="link" to={"/write"} >WRITE</Link>
                    </li>}

                    <li className="topListItem" onClick={handleLogout}>
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
