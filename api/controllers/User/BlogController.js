"use strict";
const path = require("path"),
  config = require(path.resolve("./config/env")),
  Post = require(path.resolve("./models/Post"));

class BlogController {
  /**
   * list of blogs
   *  @param {object} req - Express request
   *  @param {object} res - Express response
   */
  async addPost(req, res, next) {
    const newPost = await Post.create(req.body);

    try {
      // 2. try save
      const post = await newPost.save();
      res.status(200).json(post);
    } catch (err) {
      console.log(err);
    }
  }

  async getPost(req, res) {
    const username = req.query.user;
    const catName = req.query.cat;

    try {
      let posts;

      if (username) {
        // fetch post by username
        posts = await Post.find({ username: username });
      } else if (catName) {
        // fetch post by category name
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        // fetch all post
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json("Post doesn't exists");
    }
  }

  async updatePost(req, res) {
    try {
      // 1. find the post to be updated
      const post = await Post.findById(req.params.id);

      // 2. if the post user name is current user
      if (post.username === req.body.username) {
        // update
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } else {
        res.status(401).json("You can only update your own post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deletePost(req, res) {
    try {
      // 1. find the post to be deleted
      const post = await Post.findById(req.params.id);

      // 2. if the post user name is current user
      if (post.username === req.body.username) {
        // delete
        await post.delete();
        res.status(200).json("post deleted");
      } else {
        res.status(401).json("You can only delete your own post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BlogController;
