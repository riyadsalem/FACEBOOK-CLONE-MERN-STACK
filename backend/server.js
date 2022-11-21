const express = require("express");
const cors = require("cors");

const app = express();

const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

/*
let allowed = ["http://localhost:3000", "some other link"];
function options(req, res) {
  let tmp;
  let origin = req.header("Origin");
  if (allowed.indexOf(origin) > -1) {
    tmp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    tmp = {
      origin: false,
    };
  }
  res(null, tmp);
}
*/

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("WELCOME FROM HOME PAGE");
});
app.get("/books", (req, res) => {
  res.send("WELCOME FROM BOOKS PAGE");
});

app.listen(8000, () => console.log("SERVER IS LISTINING...."));
