import "./singlePost.css"
import React from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePost() {

    // 1. Get the picture from local folder
    const publicFolderPath = "http://localhost:4000/images/"

    // 1. get the id from the param so we can grab the data
    const param = useParams();
    const navigate = useNavigate();

    // 2. create posts fields
    const [post, setPost] = useState({
        title: "",
        picture: "",
        desc: "",
        categories: []
    });

    // 3. Get the post from API 
    useEffect(() => {

        // - define the async function
        const fetchPosts = async () => {
            // - if we write "/blogposts" it will make get request to
            // "localhost::4000/api/ + "blogposts /:postId"

            // - if we wrote "blogposts" it will make get request to:
            // will take the current browser path and append blogposts
            // "localhost::4000/api/blogposts/ + "blogposts /:postId"

            const res = await axios.get("/blogposts/" + param.postId);
            console.log(res);
            // set posts
            setPost(res.data);
        }

        // - call the function 
        fetchPosts();
    }, [param.postId]);


    // 4. Delete the post using API
    const handleDelete = async (event) => {

        await axios.delete(param.postId);
        await navigate("/");
    }

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
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
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