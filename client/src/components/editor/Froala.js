import React from 'react';
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Require Font Awesome.
import "font-awesome/css/font-awesome.css";
import "froala-editor/css/third_party/embedly.min.css";
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

export default function Froala() {

    const [state, setState] = React.useState({
        model: 'Example text'
    })

    const [config, setConfig] = React.useState({
        placeholder: "Edit Me",
        documentReady: true,
    })


    function handleModelChange(model) {
        console.log(model);
        setState(model)
    }

    return (
        <div>
            {/* @ts-ignore*/}
            <FroalaEditor
                tag='textarea'
                model={state.model}
                onModelChange={e => { handleModelChange(e) }}
                config={config}
            />
            {/* @ts-ignore*/}
            <FroalaEditorImg
            />
        </div>
    )
}