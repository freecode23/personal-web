import React from "react";
import axios from "axios";
import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Home() {
    // 1. create posts fields
    const [posts, setPosts] = React.useState([]);

    // 2. Only do this on mount
    React.useEffect(() => {

        // - define the async function
        const fetchPosts = async () => {
            // get response use axios
            // will make request to : localhost::4000/api/blogposts
            // response to : localhost::3000/blogposts
            const res = await axios.get("blogposts");
            console.log(res);

            // set posts
            setPosts(res.data);
        }

        // - call the function 
        fetchPosts();
    }, []);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
