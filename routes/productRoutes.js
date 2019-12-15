let express = require("express");
let router = express.Router();

// router.get("/", (req, res) => {
//   let sneakerController = require("../controllers/sneakerController");
//   sneakerController.getAll().then(data => {
//     res.locals.sneaker = data;
//     res.render("detail/searchResult");
//   });
//   //.catch(error => next(error));
// });

router.get("/", (req, res) => {
  res.render("detail/product");
});
module.exports = router;
