let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
    let sneakerController = require('../controllers/sneakerController');
    sneakerController
        .getAll()
        .then(data => {
            res.locals.sneakers = data;
            res.render("detail/sale");
        })
        .catch(error => next(error));
});
module.exports = router;