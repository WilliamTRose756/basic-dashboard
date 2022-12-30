require("dotenv").config();
const express = require("express");
const app = express();
const AWS = require("aws-sdk");

// Initialize environment variables
const PORT = process.env.PORT;
const accessKeyId = process.env.ACCESSKEYID;
const secretAccessKey = process.env.SECRETACCESSKEY;

// Configure the AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

// Create an S3 client
const s3 = new AWS.S3();

app.get("/data", (req, res) => {
  // Define the parameters for the S3.getObject() method
  const params = {
    Bucket: "test-simulator-data",
    Key: "current/updated_locations.json",
  };

  // Call the S3.getObject() method to retrieve the object from the bucket
  s3.getObject(params, (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      // Send the object data as a JSON response
      res.json(JSON.parse(data.Body.toString()));
      console.log(res);
    }
  });
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
