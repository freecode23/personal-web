const mongoose = require("mongoose");


//- create interface / schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "cannot add a Category without name"],
        unique: true
    },

}, { timestamps: true })


// - create the collection and export it
module.exports = mongoose.model("Category", CategorySchema);