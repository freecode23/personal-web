const path = require("path");
require(path.resolve("./server"));

// app.use(express.json()); // allow to send JSON object to route
// app.use("/images", express.static(path.join(__dirname, "/images"))); // make images folder public

// // 2. DB
// mongoose
//     .connect(process.env.MONGO_URL)
//     .catch((err) => console.log(err));

// // 3. multer
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

// // check the route
// app.post("/api/upload", // the route
//     upload.single("file"), // the key name of the data received
//     (req, res) => {
//         res.status(200).json("File has been uploaded")
//     })

// // 4. use router
// app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/blogposts", postsRoute);
// app.use("/api/categories", categoriesRoute);

// app.listen(4000, () => {
//     console.log("back end running");
// })
