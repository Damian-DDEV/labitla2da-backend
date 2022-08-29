const express = require("express");
const cors = require("cors");
require("./src/database/index");
require("dotenv").config();
const routes = require("./routes");
const http = require("http");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running on port ${port}`);
});

module.exports = app;
