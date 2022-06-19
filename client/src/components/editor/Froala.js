import React, { useRef, useEffect, useState } from 'react';
// Require Editor JS files.
// import "froala-editor/js/froala_editor.pkgd.min.js";
// import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/third_party/embedly.min.js";

// // Require Editor CSS files.
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/css/third_party/embedly.min.css";

// // Require Font Awesome.
// import "font-awesome/css/font-awesome.css";


import { froalaConfig } from './config';
// import Froala from 'react-froala-wysiwyg';
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

// export default function FroalaEditor() {

//     const [state, setState] = React.useState({
//         model: 'Example text'
//     });
//     const [editor, setEditor] = useState(undefined);
//     const [isFroalaInitialized, setFroalaInitialized] = useState(false);

//     const ref = useRef({ editor: null });

//     useEffect(() => {
//         // @ts-ignore
//         ref.current?.editor.data._init = null;
//         setEditor(ref.current.editor);
//         editor && setFroalaInitialized(true);
//     }, [ref.current]);

//     useEffect(() => {
//         if (isFroalaInitialized) {
//             console.log("initialized")
//         }
//     }, [isFroalaInitialized])


//     function handleModelChange(model) {
//         console.log(model);
//         setState(model)
//     }

//     return (
//         <div>
//             {/* @ts-ignore*/}
//             <Froala
//                 // @ts-ignore
//                 ref={ref}
//                 tag='textarea'
//                 model={state.model}
//                 onModelChange={e => { handleModelChange(e) }}
//                 config={froalaConfig}
//             >
//                 {/* @ts-ignore*/}
//                 <FroalaEditorView model={state.model} />
//             </Froala>

//         </div>
//     )
// }




import "froala-editor/css/froala_style.min.css";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";


export default function FroalaEditor() {
    const ref = useRef(null);

    console.log("inisde efitr")

    return (
        <>
            {/* @ts-ignore */}
            <FroalaEditorComponent
                tag="textarea"
                config={froalaConfig}

            />
        </>
    );
}


