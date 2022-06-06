import "./write.css"

function Write() {
    return (
        <div className="write">
            <img className="writeImage" src="https://opencv.org/wp-content/uploads/2021/06/1-1536x795.png" alt="" />
            <form className="writeForm">
                {/* file and title */}
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                {/* text input */}
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Start writing..."></textarea>
                </div>
                {/* buttons */}
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write