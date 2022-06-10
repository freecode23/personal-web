import "./write.css"
import TagsInput from "../../components/tagsInput/tagsInput"

import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Write() {

    // 1. set the state that will be received by the UI
    // make sure the name is the same as the field name in the model
    // so that req.body works in API
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [categories, setCategoryNames] = useState([]);
    const [file, setFile] = useState(null); // the actual picture file
    const navigate = useNavigate();

    // 2. When publish is click
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = {
            title,
            desc,
            categories
        }

        // add photo if file exists - will be set by the JSX
        if (file) {
            // assign the picture to post
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
            res.data && navigate("/blogposts/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    }

    // 3. create initial tags using existing categories
    // - Init categories
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get("/categories");

            setCategoryNames(() => {
                return res.data.map(category => {
                    return category.name;
                })
            });
        }
        fetchCategories();
    }, []);


    // - On key down add the element to category NAMES and 
    // create new category
    const handleKeydown = async (e) => {
        const catName = e.target.value;

        // if enter key is pressed and category name is not empty create a new one
        if (e.key === 'Enter' && catName.trim()) {
            // create new category
            await axios.post("/categories", { name: catName });

            // set the array of category names to make a new post
            await setCategoryNames(prevCatNames => {
                return [...prevCatNames, catName]
            })
            e.target.value = "";
        }

    }

    const removeTag = (indexRemove) => {
        setCategoryNames(categories.filter(
            (category, i) => i !== indexRemove))
    }

    // - Create the tag JSX of the category using the names array
    const catsJSX = categories.map((categoryName, index) => {

        return (
            <div className="tag-item">
                <span className="text">
                    {categoryName}
                </span>
                <span className="close"
                    onClick={() => removeTag(index)}>
                    &times;
                </span>
            </div>
        );
    })

    return (
        <div className="write">

            {file && <img className="writeImage" src={URL.createObjectURL(file)} alt="" />}

            <form className="writeForm">

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

                <div className="writeFormGroup writeCategories">
                    <h2>Enter Some Tags ...</h2>
                    <TagsInput
                        catsJSX={catsJSX}
                        onKeyDown={handleKeydown}
                    />
                </div>



                <button type="button" className="writeSubmit" onClick={handleSubmit}>
                    Publish
                </button>
            </form >
        </div >
    )
}

export default Write