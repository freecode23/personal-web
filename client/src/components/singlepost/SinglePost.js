import "./singlePost.css"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePost() {

    // 1. Get the picture from local folder
    const publicFolderPath = "http://localhost:4000/images/"

    // 1. get the id from the param so we can grab the data
    const param = useParams();

    // 2. create posts fields
    const [post, setPost] = useState({
        title: "",
        picture: "",
        desc: "",
        categories: []
    });

    // 3. Only do this on mount
    useEffect(() => {

        // - define the async function
        const fetchPosts = async () => {
            // Question: How does it know to add "blogposts? it always have to match the current path?
            // request to : "localhost::4000/api/ + "blogposts/:postId"
            // response to : localhost::3000/blogposts/id
            const res = await axios.get(param.postId);

            // set posts
            setPost(res.data);
        }

        // - call the function 
        fetchPosts();
    }, [param.postId]);


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={publicFolderPath + post.picture}
                    alt=""
                />
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span>1 day ago</span>
                </div>

                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost