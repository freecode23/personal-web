import "./header.css"
import oneillCylinder from "../../images/oneill.jpeg"

export default function Header() {
    return (
        // will only be in homepage so don't put it in app
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">small title</span>
                <span className="headerTitleLg">Big title </span>
            </div>
            <img
                className="headerImg"
                src={oneillCylinder}
                alt="oneill" />
        </div>
    )
}
