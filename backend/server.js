const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("WELCOME FROM HOME PAGE");
});
app.get("/books", (req, res) => {
  res.send("WELCOME FROM BOOKS PAGE");
});

app.listen(8000, () => console.log("SERVER IS LISTINING...."));
