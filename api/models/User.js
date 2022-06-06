const mongoose = require("mongoose");


//- create interface / schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "cannot add an user without name"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "cannot add an user without email"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "cannot add an user without email"],
    },

    profilePic: {
        type: String,
        default: ""
    },
}, { timestamps: true })


// - create the collection and export it
module.exports = mongoose.model("User", UserSchema);