import "./posts.css"

import Post from "../post/Post"

function Posts(props) {

    const postJSX = props.posts.map(post => {
        return (
            <div key={post._id}>
                <Post post={post} />
            </div>)
    })

    return (
        <div className='posts'>
            {postJSX}
        </div>
    )
}

export default Posts