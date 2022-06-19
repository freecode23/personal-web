"use strict";

const path = require("path"),
  fs = require("fs"),
  env = require(path.resolve("./config/env"));

class AppRouter {
  constructor(app, router) {
    this.call = {
      frontend: {},
    };
    this.frontend = {};

    /**/
    this.api_path = '/api';

    this.router = router;
  }

  /** to load all the classes of frontend directory */
  loadAppClasses() {
    fs.readdirSync(path.resolve("./controllers/User")).forEach((file) => {
      let name = file.substr(0, file.indexOf("."));

      /*Store Classes in frontend object*/
      this.frontend[name] = require(path.resolve(`./controllers/User/${name}`));

      /*Init All Classes & add Object to Array*/
      this.call["frontend"][name] = new this.frontend[name]();
    });
  }

  //   /** to load all the routes of Application (userend) */
  loadAppRoutes() {
    this.router.post("/add-post", this.call["frontend"]["BlogController"].addPost);
    this.router.get("/blogposts", this.call["frontend"]["BlogController"].getPosts);
    this.router.get("/blogpost", this.call["frontend"]["BlogController"].getPost);
    this.router.put("/update-post", this.call["frontend"]["BlogController"].updatePost);
    this.router.delete("/blogpost", this.call["frontend"]["BlogController"].deletePost);
    this.router.post("/add-category", this.call["frontend"]["CategoryController"].addCategory);
    this.router.get("/categories", this.call["frontend"]["CategoryController"].getCategory);
  }

  init() {
    this.loadAppClasses();
    this.loadAppRoutes();

    return this.router;
  }
}

module.exports = AppRouter;
