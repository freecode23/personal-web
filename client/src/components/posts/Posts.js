import "./posts.css";
import Post from "../post/Post";


function Posts(props) {

    const postJSX = props.posts.map((post) => {
        return <Post key={post._id} post={post} />;
    });

    return (
        <div className="posts">
            {postJSX}
        </div>);
}
export default Posts;