const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

// import router
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/blogposts");
const categoriesRoute = require("./routes/categories");


dotenv.config();
app.use(express.json()); // allow to send JSON object to route


// 2. DB
mongoose
    .connect(process.env.MONGO_URL)
    .catch((err) => console.log(err));

// 3. multer
const storage = multer.diskStorage({
    // save file inside our api images folder
    destination: (req, file, callback) => {
        callback(null, "images")
    },

    // the file name will be the name provided by the request body
    filename: (req, file, callback) => {
        callback(null, "hello.jpeg") // replace with body.req.name
    }
})

const upload = multer({ storage: storage });

// check the route
app.post("/api/upload", // the route
    upload.single("file"), // the key name
    (req, res) => {
        res.status(200).json("File has been uploaded")
    })

// 4. use router
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/blogposts", postsRoute); // I want to change this to blogposts, but it gives error in SinglePost
app.use("/api/categories", categoriesRoute);


app.listen(4000, () => {
    console.log("back end running");
})