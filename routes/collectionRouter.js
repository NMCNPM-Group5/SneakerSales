let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("detail/collection");
});
module.exports = router;