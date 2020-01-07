var express = require("express");
var app = express();

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
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


//Use Body Parser


//Use Cookie-parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

//Use session
let session = require('express-session');
app.use(session({
    cookie: { httpOnly: true, maxAge: null },
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

//Use Cart controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;

    res.locals.username = req.session.user ? req.session.user.username : '';
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
});

// Create database
var models = require("./models");
app.get("/sync", function(req, res) {
    models.sequelize.sync().then(function() {
        res.send("database sync completed!");
    });
});


// hien thi trang chu
app.use("/", require("./routes/indexRouter"));
app.get("/about", (req, res) => {
    res.render("detail/about")
})
app.use("/cart", require("./routes/shoppingCartRouter"));
app.use("/payment", require("./routes/paymentRouter"));
app.use("/brand", require("./routes/brandRouter"));
app.use("/collection", require("./routes/collectionRouter"));
app.use("/order", require("./routes/orderRouter"));
// hien thi trang chi tiet
app.use("/collection", require("./routes/collectionRouter"));
app.use("/search", require("./routes/searchRouter"));
app.use("/product", require("./routes/productRoutes"));
app.use("/sale", require("./routes/saleRoutes"));
app.use("/shoppingCart", require("./routes/shoppingCartRouter"));
app.use("/user", require("./routes/UserRouter"));
// start server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`server is listening on port ${app.get("port")}`);
});