let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  let brandController = require("../controllers/brandController");
  return brandController
    .getAll()
    .then(result => {
      res.locals.brand = result;
      res.render("detail/brand");
    })
    .catch(error => {
      next(error);
    });
});
module.exports = router;
