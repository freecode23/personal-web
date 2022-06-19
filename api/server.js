"use strict";

require("dotenv").config();

 const morgan = require("morgan"),
 express = require("express"),
 helmet = require("helmet"),
 bodyParser = require("body-parser"),
 cors = require("cors"),
 http = require("http"),
 cookieParser = require("cookie-parser"),
 env = require("./config/env"),
 routes = require("./routes/routes"),
 database = require("./config/libs/mongoose"),
 path = require("path");

const router = express.Router();

class Server {
  constructor() {
    /*defining PORT for application*/
    this.port = env.PORT || 4000;

    /*init express app*/
    this.app = express();

    /*init a sever*/
    this.server = http.createServer(this.app);

    /*init helmets for securing http headers*/
    this.helmet = helmet();

    /*init cors for multiple origin requests*/
    this.cors = cors();

    /*init admin class to create a user on Very first time use*/

    this.router = router;

    this.routes;
  }

  secureHeaders() {
    /*protect http headers of server through Helmet*/
    this.app.use(this.helmet);
  }

  appConfig() {
    /*allow application to read and send data in body*/
    this.app.use(cookieParser()); // read cookies (needed for auth)
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(morgan("dev"));
  }

  enablingCors() {
    /*enable application CORS*/
    this.app.use(this.cors);
  }

  connectoToDB() {
    new database().dbConnect();
  }

  initRoutes() {
    this.routes = new routes(this.app, this.router).init();
  }

  setAPIRoutes() {
    /*routing apis*/
    this.app.use("/", this.routes);
  }

  init() {
    /*Listen on Server Port*/
    this.secureHeaders();
    this.appConfig();
    this.enablingCors();
    this.connectoToDB();

    this.initRoutes();

    this.setAPIRoutes();

    this.server.listen(this.port, () => {
      console.log("listening on", this.server.address().port);
    });
  }
}

let application = new Server();

application.init();
