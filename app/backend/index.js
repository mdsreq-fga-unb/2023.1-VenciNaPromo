const express = require("express");
const db = require("./routes/db-config");
const app = express();
const copkie = require("cookie-parser");
app.use("/js", express.static(__dirname + "../frontend"))
