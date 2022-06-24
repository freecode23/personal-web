require("dotenv").config();
const express = require("express");

const app = express();
const path = require("path");
const mongoose = require("mongoose");

// aws and multer
const cors = require("cors");
const multer = require("multer");
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const bodyParser = require("body-parser")

// import router
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/blogposts");
const categoriesRoute = require("./routes/categories");
const FroalaEditor = require('./node_modules/wysiwyg-editor-node-sdk/lib/froalaEditor.js');


app.use(cors());
app.use(express.json()); // allow to send JSON object to route
// app.use(bodyParser.urlencoded({ extended: true}));
app.use("/images", express.static(path.join(__dirname, "/images"))); // make images folder public


// 2. DB
mongoose
    .connect(process.env.MONGO_URL)
    .catch((err) => console.log(err));


// 3. AWS and Multer
// aws config
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
});
const s3=new aws.S3();



// 4. multer local storage
// const storage = multer.diskStorage({
//     // save file inside our api images folder
//     destination: (req, file, callback) => {
//         callback(null, "images")
//     },

//     // the file name will be the name provided by the request body
//     filename: (req, file, callback) => {
//         callback(null, req.body.name) // replace with req.body.name
//     }
// })
// const upload = multer({ storage: storage });

// 4. multer s3 storage
// create upload object
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        key: function (req, file, cb) {
            // console.log("\nreq.body:name", req.body.name);
            // console.log("file multers3:\n", file);
            cb(null, req.body.name); //use Date.now() for unique file keys
        }
    })
});

// 5. create upload image route
app.post("/api/upload", // the route
    upload.single("file"), // the key name of the data received
    (req, res) => {

        // send 
        console.log("\nuploading..");
        console.log("req.file.location:", req.file);
        res.send(req.file)
        // res.status(200).json("File has been uploaded")s
    })


// 4. use router
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/blogposts", postsRoute);
app.use("/api/categories", categoriesRoute);


app.listen(4000, () => {
    console.log("back end running");
})