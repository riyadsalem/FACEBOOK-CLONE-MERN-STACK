const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};
app.use(cors(options));

// const userRoutes = require("./routes/user");
// app.use("/", userRoutes);

fs.readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
);

app.listen(8000, () => console.log("SERVER IS LISTINING...."));
