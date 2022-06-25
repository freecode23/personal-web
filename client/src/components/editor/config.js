import axios from "axios"
export const froalaConfig = {
    attribution: false,
    placeholder: "Start typing...",
    fontSizeSelection: true,
    imageUploadURL: "http://localhost:4000/api/upload_froala_image",
    imageUploadMethod: "POST",
    imageUploadParam: "file",
    imageUploadParams: {id: "myfile"},
    // events: {
    //   'froalaEditor.image.beforeUpload': function(e, editor, images) {
    //     // Before image is uploaded
    //     const data = new FormData();
    //     data.append('image', images[0]);

    //     axios.post('/api/upload_froala_image', data, {
    //       headers: {
    //         'accept': 'application/json',
    //         'Accept-Language': 'en-US,en;q=0.8',
    //         'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //       }
    //     }).then(res => {
    //       editor.image.insert(res.data.data.link, null, null, editor.image.get());
    //     }).catch(err => {
    //       console.log(err);
    //     });
    //     return false;
    //   }
    // },
    toolbarButtons: {
        moreText: {
            buttons: [

                "bold",
                "italic",
                "underline",
                "fontSize",
                "strikeThrough",
                "subscript",
                "superscript",

                // "fontFamily",
                // "textColor",
                // "backgroundColor",
                // "inlineClass",
                // "inlineStyle",
                // "clearFormatting"


            ],
            buttonsVisible: 4
        },
        moreParagraph: {
            buttons: [
                "|",
                "alignLeft",
                "alignCenter",
                "formatOLSimple",
                "alignRight",
                "alignJustify",
                "formatOL",
                "formatUL",
                "paragraphFormat",
                "paragraphStyle",
                "lineHeight",
                "outdent",
                "indent",
                "quote"
            ]
        },
        moreRich: {
            buttons: [
                "insertLink",
                "insertImage",
                "insertVideo",
                "insertTable",
                "emoticons",
                "fontAwesome",
                "specialCharacters",
                "embedly",
                "insertFile",
                "insertHR"
            ]
        },
        moreMisc: {
            buttons: [
                "undo",
                "redo",
                "fullscreen",
                "print",
                "getPDF",
                "spellChecker",
                "selectAll",
                "html",
                "help"
            ],
            align: "right",
            buttonsVisible: 2
        }
    },
    pluginsEnabled: [
        "table",
        "spell",
        "quote",
        "save",
        "quickInsert",
        "paragraphFormat",
        "paragraphStyle",

        "fontSize",
        "help",
        "draggable",
        "align",
        "link",
        "lists",
        "file",
        "image",
        "emoticons",
        "url",
        "video",
        "embedly",
        "colors",
        "entities",
        "inlineClass",
        "inlineStyle",
        // 'codeBeautif '
        // 'spellChecker',
        "imageTUI"
    ]
};