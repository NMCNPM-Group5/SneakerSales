let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  var cart = req.session.cart;
  res.locals.cart = cart.getCart();
  res.render("detail/payment");
});

router.post("/", function(req, res, next) {
  let name = req.body.name;
  let phone = req.body.phone;
  let address = req.body.address;
  let city = req.body.city;
  let email = req.body.email;
  let product = req.body.product;
  let price = parseInt(req.body.price);
  let userId = res.locals.userid;
  let isCod = true;
  let status = "Đang vận chuyển";
  let note = req.body.note;
  console.log(name);
  if (name == "" || phone == "" || address == "" || city == "" || email == "") {
    return res.render("detail/payment", {
      message: "Điền đầy đủ thông tin trước khi đặt hàng",
      type: "alert-danger"
    });
  }

  if (userId == "")
    return res.render("detail/payment", {
      message:
        "Đăng nhập trước khi đặt hàng để có thể theo dõi trạng thái đơn hàng của bạn",
      type: "alert-danger"
    });

  if (product == "")
    return res.render("detail/payment", {
      message: "Chưa chọn sản phẩm",
      type: "alert-danger"
    });
  //let newOrder = ;
  let orderController = require("../controllers/orderController");

  orderController
    .createOrder({
      product: product,
      price: price,
      guestName: name,
      guestPhone: phone,
      guestAddress: address,
      guestCity: city,
      guestEmail: email,
      isCOD: isCod,
      note: note,
      status: status,
      UserId: userId
    })
    .then(orders => {
      // console.log(user)
      console.log("Bb");
      return res.render("detail/payment", {
        message: "Đặt hàng thành công",
        type: "alert-primary"
      });
    })
    .catch(error => next(error));
});
module.exports = router;
