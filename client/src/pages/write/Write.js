import "./write.css"
import axios from "axios"
import { useState } from "react"

function Write() {

    // 1. set the state that will be received by the UI
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null); // the actual picture file


    // 2. When published
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = {
            title,
            desc,
        }

        // add photo if file exists - will be set by the JSX
        if (file) {
            // create the data
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file);
            newPost.picture = filename;

            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            const res = await axios.post("/blogposts", newPost);
            window.location.replace("/blogposts/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="write">

            {file && <img className="writeImage" src={URL.createObjectURL(file)} alt="" />}

            <form className="writeForm" onSubmit={handleSubmit}>

                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>

                    <input id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        onChange={e => {
                            setFile(e.target.files[0]);
                        }}
                    />

                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>

                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Start writing..."
                        onChange={e => {
                            setDesc(e.target.value);
                        }}>
                    </textarea>
                </div>

                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write