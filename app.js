require("./database/index");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const http = require("http");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(routes);
app.use(express.static(__dirname + '/public'));

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
