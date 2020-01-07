let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
    let sneakerController = require("../controllers/sneakerController");
    sneakerController.getAllFilter(req.query).then(data => {
        res.locals.sneaker = data;
        res.render("detail/orderList");
    });
    //.catch(error => next(error));
});

router.get("/:id", (req, res, next) => {
    // let sneakerController = require('../controllers/sneakerController');
    // sneakerController
    //     .getById(req.params.id)
    //     .then(result => {
    //         res.locals.sneaker = result;
    //         return sneakerController.getByBrand(result.brandName);
    //     })
    //     .then(result => {
    //         res.locals.same = result;
    //         res.render("detail/product");
    //     })
    //     .catch(error => {
    //         next(error);
    //     })
    res.render("detail/orderDetail");

});

router.get("/:key", (req, res) => {
    res.render("searchResult");
});
module.exports = router;