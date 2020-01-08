let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  let orderController = require("../controllers/orderController");
  orderController.getAll(req.query).then(data => {
    res.locals.order = data;
    res.render("detail/orderList");
  });
  //.catch(error => next(error));
});

router.get("/:id", (req, res, next) => {
  let orderController = require("../controllers/orderController");
  return orderController
    .getById(req.params.id)
    .then(result => {
      res.locals.order = result;
      console.log(res.locals.order);
      res.render("detail/orderDetail");
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:key", (req, res) => {
  res.render("searchResult");
});
module.exports = router;
