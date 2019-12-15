var express = require("express");
var app = express();
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())
// Setting for app here
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
var models = require("./models");
app.get("/sync", function(req, res) {
  models.sequelize.sync().then(function() {
    res.send("database sync completed!");
  });
});

//

// hien thi trang chu
app.use("/", require("./routes/indexRouter"));
// hien thi trang chi tiet
app.use("/search", require("./routes/searchRouter"));
app.use("/product", require("./routes/productRoutes"));
app.use("/sale", require("./routes/saleRoutes"));
app.use("/shoppingCart", require("./routes/shoppingCartRoutes"));
app.use("/user", require("./routes/UserRouter"));
// start server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`server is listening on port ${app.get("port")}`);
});
