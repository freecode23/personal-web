import React from 'react';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

export default function Froala() {

    const [state, setState] = React.useState({
        model: 'Example text'
    })

    const [config, setConfig] = React.useState({
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false
    })

    return (


        <div>
            {/* @ts-ignore*/}
            <FroalaEditor
                tag='textarea'
            // config={this.config}
            // model={this.state.model}
            // onModelChange={this.handleModelChange}
            />
        </div>
    )
}