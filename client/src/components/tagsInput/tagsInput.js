import "./tagsInput.css";
import React from "react";
function TagsInput(props) {
  return (
    <div className="tags-input-container">
      {props.catsJSX}

      <input
        type="text"
        className="tags-input"
        placeholder="Type something"
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}

export default TagsInput;
