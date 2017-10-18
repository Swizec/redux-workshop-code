require("ignore-styles");
const bodyParser = require("body-parser");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

require("babel-register")({
    ignore: /\/(build|node_modules)\//,
    presets: ["env", "react-app"]
});

// routes
const index = require("./routes/index");
const universalLoader = require("./universal");

const app = express();

// Support Gzip
app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup logger
app.use(morgan("combined"));
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use("/", index);

module.exports = app;
