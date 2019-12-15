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

module.exports = router;