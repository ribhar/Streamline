const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.routes");

const app = express();

env.config({ path: "./config.env" });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth",userRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log(`Server started at port 8080`);
});
