import './post.css'

function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://industrywired.b-cdn.net/wp-content/uploads/2020/01/The_Era-of-Computer-Vision-Is-Here.png"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        ML
                    </span>
                    <span className="postCat">
                        WebDev
                    </span>
                </div>
                <span className="postTitle">
                    Object Tracking
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}

export default Post