
import React, { useRef, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import "froala-editor/js/plugins/font_size.min.js";
import { froalaConfig } from './config';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg';
import "./froala.css"


export default function Froala(props) {
    const{editorState, handleEditorChange} = props;

    return (
    <div className="editor-wrapper">
        <div className="editor-container">
            <FroalaEditor
                model={editorState.model}
                tag="textarea"
                onModelChange={handleEditorChange} // will get data and pass to the function
                config={froalaConfig}
            />
        </div>


        <div className="editor-display-container">
            <div dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(editorState, {FORCE_BODY: true})}}></div>
        </div>
    </div>
    );
}