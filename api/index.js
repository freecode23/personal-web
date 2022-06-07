const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth"); // import router
const usersRoute = require("./routes/users"); // import router

dotenv.config();
app.use(express.json()); // allow to send JSON object to route

// mongoose.connect(process.env.MONGO_URL)
//     .catch(error => console.log(error));


mongoose
    .connect(process.env.MONGO_URL)
    .catch((err) => console.log(err));



app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.use("/", (req, res) => {
    console.log("this is main url");
})

app.listen(3000, () => {
    console.log("back end running");
})