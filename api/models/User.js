const mongoose = require("mongoose");


//- create interface / schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "cannot add an user without name"],
        unique: true
    },
    profilePic: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        required: [true, "cannot add an user without email"],
        unique: true
    },

    about: {
        type: String,
        default: ""
    },

    linkedin: {
        type: String,
        default: ""
    },

    github: {
        type: String,
        default: ""
    },

}, { timestamps: true })


// - create the collection and export it
module.exports = mongoose.model("User", UserSchema);