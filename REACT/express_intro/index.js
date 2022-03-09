var express = require("express");
var app = express();

var app_router = express.Router();

app.get("/", (req, res) => {
  res.send(`<form method="POST" action="/">
  <input type="text" name="username" placeholder="username">
  <input type="submit">
</form>`);
});

app.route("/mongo").get((req, res) => {
  res.send("Mongo is running");
});
app.route("/express").get((req, res) => {
  res.send("Express is running");
});

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send(JSON.stringify(req.body));
});

var PORT = app.listen(3000, () => {
  console.log("App is running successfully");
});
