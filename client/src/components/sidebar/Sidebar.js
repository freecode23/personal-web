import "./sidebar.css"
import shProfile from "../../images/sh-circ.png"


function Sidebar() {
    return (
        <div className="sidebarContainer">
            <div className='sidebar'>
                <div className="sidebarItem">
                    {/* <span className="sidebarTitle">About me</span> */}
                    <img className="sidebarImg" src={shProfile} alt="sherly" />
                    <p>some para</p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">Categories</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">ML</li>
                        <li className="sidebarListItem">WebDev</li>
                        <li className="sidebarListItem">Embedded</li>
                        <li className="sidebarListItem">CI/CD</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sidebar