import React, { useRef, useEffect, useState } from 'react';


import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";


import "froala-editor/js/plugins/font_size.min.js";
import { froalaConfig } from './config';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorButton from "react-froala-wysiwyg";


export default function Froala() {
    const [state, setState] = React.useState({
        model: 'Example text'
    })


    function handleModelChange(model) {
        console.log(model);
        setState(model)
    }


    return (
        <>
            {/* @ts-ignore */}
            <FroalaEditor
                model={state.model}
                tag="textarea"
                onModelChange={e => { handleModelChange(e) }}
                config={froalaConfig}

            />
        </>
    );
}
