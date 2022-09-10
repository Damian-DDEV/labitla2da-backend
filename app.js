require("./database/index");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const http = require("http");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.static(__dirname + '/public'));


app.use(function(req,res,next) {
    req.connection.setNoDelay(true)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "https://l2-front.vercel.app/");
    res.header('Access-Control-Expose-Headers', 'agreementrequired');
  
    next()
})

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
