const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};
app.use(cors(options));

fs.readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
