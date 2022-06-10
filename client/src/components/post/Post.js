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

        <Link className="link" to={`/blogposts/${props.post._id}`}>
            <div className="post box">

                <img
                    className="postImg"
                    src={publicFolderPath + props.post.picture}
                    alt="blog cover"
                />
                <div className="postInfo">
                    <div className="postCats">
                        {catJSXElements}
                    </div>
                    <span className="postTitle">{props.post.title}</span>

                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    {props.post.desc}
                </p>
            </div>
        </Link>

    )
}

export default Post