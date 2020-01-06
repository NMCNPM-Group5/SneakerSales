let express = require("express");
let router = express.Router();

router.get("/collection", (req, res) => {
    res.render("detail/collection");
});
module.exports = router;