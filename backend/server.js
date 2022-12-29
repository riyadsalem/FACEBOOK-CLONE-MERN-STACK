const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const app = express();
dotenv.config({ path: "./vars/.env" });

const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};
app.use(cors(options));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// ROUTES
fs.readdirSync("./routes").map((route) => {
  app.use("/", require(`./routes/${route}`));
});

// DATABASE
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log("ERROR CONNECTING TO MONGODB", err));

// SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
