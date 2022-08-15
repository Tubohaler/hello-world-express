const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();
const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

app.get("/", (req, res) => {
  res.send("Goodday World!");
});

app.listen(PORT, () => {
  console.log(`haha yes, the server is running on port ${PORT}`);
});
