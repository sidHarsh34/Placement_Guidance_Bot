require("./db")
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


const chatRoutes = require("./routes/chatRoutes");
const addData = require("./routes/addData");
const login = require("./routes/login");
const adduserdata = require("./routes/adduserdata");
const fetchdata = require("./routes/fetchdata");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config()
app.use("/", fetchdata);
app.use("/", chatRoutes);
app.use("/", addData);
app.use("/", login.router);
app.use("/", adduserdata);
app.get("/getUserId", login.getLoggedInUserId);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server running on port: $port`);
})