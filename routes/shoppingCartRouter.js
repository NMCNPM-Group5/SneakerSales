let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render("detail/shoppingCart");
});



router.post('/', (req, res, next) => {
    var productID = req.body.id;
    var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    var productController = require('../controllers/sneakerController');
    productController
        .getById(productID)
        .then(product => {
            var cartItem = req.session.cart.add(product, productID, quantity);
            res.json(cartItem);
        })
        .catch(error => next(error));
});

router.put('/', (req, res) => {
    var productID = req.body.id;
    var quantity = parseInt(req.body.quantity);
    var cartItem = req.session.cart.update(productID, quantity);
    res.json(cartItem);
})

router.delete('/', (req, res) => {
    var productID = req.body.id;
    req.session.cart.remove(productID);
    res.json({
        totalQuantity: req.session.cart.totalQuantiry,
        totelPrice: req.session.cart.totalPrice
    });
});

module.exports = router;