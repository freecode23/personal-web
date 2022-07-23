import React from "react";
import axios from "axios";

import Froala from "../../components/editor/Froala";
import TagsInput from "../../components/tagsInput/tagsInput";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./write.css";

function Write() {
  // 1. set the state that will be received by the UI
  // make sure the name is the same as the field name in the model
  // so that req.body works in API
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [categories, setCategoryNames] = useState([]);
  const [file, setFile] = useState(null); // the actual picture file
  const [signature, setSignature] = React.useState();
  const [editorContent, setEditorContent] = React.useState({
    model: "",
  });

  function handleEditorChange(editorData) {
    setEditorContent(editorData);
  }

  // 2. get signature and set so we can access s3
  React.useEffect(() => {
    const getSignature = async () => {
      fetch("/get_signature")
        .then((r) => r.json())
        .then((data) => setSignature(data));
    };
    getSignature();
  }, []);

  // 3. When publish is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();

    // - create newpost with the editor state
    const newPost = {
      title,
      content: editorContent,
      categories,
    };
    // - add big photo if file exists - will be set by the JSX
    if (file) {
      const filename = Date.now() + file.name;
      // - create a new form data
      const formData = new FormData();
      formData.append("name", filename);
      formData.append("file", file);

      // - upload big photo
      try {
        const res = await axios.post("/upload", formData);
        newPost.picture = res.data.key;
      } catch (err) {
        console.log(err);
      }
    } else {
      // show error
    }

    // 2. create the blogpost in Mongo
    try {
      const res = await axios.post("/blogposts", newPost);
      res.data && navigate("/blogposts/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  // 3. create initial tags using existing categories
  // - Init categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");

      setCategoryNames(() => {
        return res.data.map((category) => {
          return category.name;
        });
      });
    };
    fetchCategories();
  }, []);

  // - On key down add the element to category NAMES and
  // create new category
  const handleKeydown = async (e) => {
    const catName = e.target.value;

    // - if enter key is pressed and category name is not empty create a new one
    if (e.key === "Enter" && catName.trim()) {
      await axios.post("/categories", { name: catName });
      // - set the array of category names to make a new post
      await setCategoryNames((prevCatNames) => {
        return [...prevCatNames, catName];
      });
      e.target.value = "";
    }
  };

  const removeTag = (indexRemove) => {
    setCategoryNames(categories.filter((category, i) => i !== indexRemove));
  };

  // - Create the tag JSX of the category using the names array
  const catsJSX = categories.map((categoryName, index) => {
    return (
      <div className="tag-item">
        <span className="text">{categoryName}</span>
        <span className="close" onClick={() => removeTag(index)}>
          &times;
        </span>
      </div>
    );
  });

  return (
    <div className="write">
      {/* if file has been staged, display */}
      {file && (
        <img className="writeImage" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm">
        <div className="writeFormGroup">
          {/* Image */}
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />

          {/* Title */}
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        {/* Tags */}
        <div className="writeFormGroup writeCategories">
          <h2>Enter Some Tags ...</h2>
          <TagsInput catsJSX={catsJSX} onKeyDown={handleKeydown} />
        </div>
        <Froala
          editorContent={editorContent}
          handleEditorChange={handleEditorChange}
          imageUploadToS3={signature}
        />

        <button type="button" className="writeSubmit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
