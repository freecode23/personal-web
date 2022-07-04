export const froalaConfig = {
    attribution: false,
    placeholderText: "Start typing...",
    fontSizeSelection: true,
    imageUpload: true,
    imageUploadMethod: "POST",
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    imageUploadURL: 'http://localhost:4000/api/upload',
    imageUploadParam: "file",
    events: {
      'image.uploaded': function (response) {
            console.log("config response:", response);
      }
    },
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