let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  let sneakerController = require("../controllers/sneakerController");
  sneakerController.getAll(req.query).then(data => {
    res.locals.sneaker = data;
    res.render("detail/searchResult");
  });
  //.catch(error => next(error));
});

router.get("/:key", (req, res) => {
  res.render("searchResult");
});
module.exports = router;
