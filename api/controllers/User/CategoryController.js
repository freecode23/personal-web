"use strict";
const path = require("path"),
    config = require(path.resolve("./config/env")),
    Category = require(path.resolve("./models/Category"));

class BlogController {
    /**
     * list of blogs
     *  @param {object} req - Express request
     *  @param {object} res - Express response
     */
    async addCategory(req, res, next) {
        // 1. create category
        const newCat = await Category.create(req.body);

        try {
            // 2. try save
            // const cat = await newCat.save();
            Category.updateOne(newCat, { upsert: true });
            res.status(200).json(newCat);

        } catch (err) {
            console.log(err);
        }
    }

    async getCategory(req, res) {
        console.log("inside")
        try {
            const cats = await Category.find();
            res.status(200).json(cats);
        } catch (err) {
            res.status(404).json("Category doesn't exists");
        }


    }

    // async updateCategory(req, res) {
    //     try {
    //         // 1. find the post to be updated
    //         const post = await Post.findById(req.params.id);

    //         // 2. if the post user name is current user
    //         if (post.username === req.body.username) {
    //             // update
    //             const updatedPost = await Post.findByIdAndUpdate(
    //                 req.params.id,
    //                 {
    //                     $set: req.body,
    //                 },
    //                 { new: true }
    //             );
    //             res.status(200).json(updatedPost);
    //         } else {
    //             res.status(401).json("You can only update your own post");
    //         }
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }

    // async deleteCategory(req, res) {
    //     try {
    //         // 1. find the post to be deleted
    //         const post = await Post.findById(req.params.id);

    //         // 2. if the post user name is current user
    //         if (post.username === req.body.username) {
    //             // delete
    //             await post.delete();
    //             res.status(200).json("post deleted");
    //         } else {
    //             res.status(401).json("You can only delete your own post");
    //         }
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }
}

module.exports = BlogController;
