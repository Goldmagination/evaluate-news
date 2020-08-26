var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var AYLIENTextAPI = require("aylien_textapi");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const textapi = new AYLIENTextAPI({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`,
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/testing", async (req, res, next) => {
  try {
    let data = textapi.sentiment(
      {
        url: req.body.theText,
      },
      function (error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      }
    );
  } catch (error) {
    return next(error);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
