const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(console.log("connected to mongo"))
    .catch(err => console.log("err"));

app.use("/", (req, res) => {
    console.log("this is main url");
})
app.listen("3000", () => {
    console.log("back end running");
})