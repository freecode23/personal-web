import './post.css'
import { Link } from "react-router-dom";
function Post(props) {

    // 1. Get the picture from local folder
    const publicFolderPath = "http://localhost:4000/images/"

    // 2. create category JSX array
    const catJSXElements = props.post.categories.map(cat => {
        return (
            <span key={cat} className="postCat">
                {cat}
            </span>
        )
    })

    return (
        <div className="post">

            <img
                className="postImg"
                // replace the url with {props.post}
                src={publicFolderPath + props.post.picture}
                // src="http://localhost:4000/images/1654797337821cgi.png"
                // src={"https://industrywired.b-cdn.net/wp-content/uploads/2020/01/The_Era-of-Computer-Vision-Is-Here.png"}
                alt="blog cover"
            />
            <div className="postInfo">
                <div className="postCats">
                    {catJSXElements}
                </div>
                <Link className="link postTitle" to={`/blogposts/${props.post._id}`}>{props.post.title}</Link>

                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                {props.post.desc}
            </p>
        </div>
    )
}

export default Post