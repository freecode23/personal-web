const router = require("express").Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require("bcrypt");


// the CREATE is in auth.js
// GET
router.get("/:id",
    async (req, res) => {
        // 1. check if the request comes from the same user in params
        try {
            const user = await User.findById(req.params.id);
            // only return the field without password
            const { password, ...others } = user._doc;
            res.status(200).json(others);

        } catch (err) {
            res.status(404).json("User doesn't exists");
        }

    })

// UPDATE
router.put("/:id",
    async (req, res) => {
        // compare the params and the user id in DB
        if (req.params.id === req.body.userId) {
            // 1. if user trying to change password
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true }) // return the updated user

                res.status(200).json(updatedUser);

            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your account")
        }
    })


// DELETE
router.delete("/:id",
    async (req, res) => {
        // 1. check if the request comes from the same user in params
        if (req.params.id === req.body.userId) {
            try {
                const user = await User.findById(req.params.id);

                try {
                    // 2. delete all post and the user
                    await Post.deleteMany({ username: user.username });
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User has been deleted");

                } catch (err) {
                    res.status(500).json(err);
                }
            } catch (err) {
                res.status(404).json("User doesn't exists");
            }

        } else {
            res.status(401).json("You can only update your account")
        }
    })




module.exports = router;