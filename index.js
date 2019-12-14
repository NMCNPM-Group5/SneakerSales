var express = require("express");
var app = express();

//Setting for app here
app.use(express.static(__dirname));

var expressHbs = require("express-handlebars");

var hbs = expressHbs.create({
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: __dirname + "/views/layouts/",
  partialsDir: __dirname + "/views/partials/"
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// Create database
var sneaker = require("./sneaker");
app.get("/sync", function(req, res) {
  models.sequelize.sync().then(function() {
    res.send("database sync completed!");
  });
});

// hien thi trang chu
app.get("/", (req, res) => {
  //res.locals.data = data;
  res.render("index");
});
// hien thi trang chi tiet
app.get("/:index", (req, res) => {
  let index = req.params.index;
  res.render("detail/" + index);
});

// start server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`server is listening on port ${app.get("port")}`);
});
