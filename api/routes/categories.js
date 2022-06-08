const router = require("express").Router();
const Category = require('../models/Category');


// CREATE is in auth.js
router.post("/", async (req, res) => {
    // 1. create category
    const newCat = await Category.create(req.body);

    try {
        // 2. try save
        const cat = await newCat.save();
        res.status(200).json(cat);

    } catch (err) {
        console.log(err);
    }
})



// READ
// get all categories
router.get("/",
    async (req, res) => {
        try {
            const cats = await Category.find();
            res.status(200).json(cats);
        } catch (err) {
            res.status(404).json("Category doesn't exists");
        }
    })



module.exports = router;