const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// import router
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/blogposts");


dotenv.config();
app.use(express.json()); // allow to send JSON object to route


// 2. DB
mongoose
    .connect(process.env.MONGO_URL)
    .catch((err) => console.log(err));


// 3. use router
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/blogposts", postsRoute);

app.use("/", (req, res) => {
    console.log("this is main url");
})

app.listen(3000, () => {
    console.log("back end running");
})