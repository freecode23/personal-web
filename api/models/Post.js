const mongoose = require("mongoose");


//- create interface / schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "cannot add a post without title"],
        unique: true
    },

    desc: {
        type: String,
        required: [true, "cannot add a post without description"],
    },

    picture: {
        type: String,
        required: [true, "cannot add a post without picture"],
    },
    categories: {
        type: Array,
        required: false
    }

}, { timestamps: true })


// - create the collection and export it
module.exports = mongoose.model("Post", PostSchema);