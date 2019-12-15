let express = require("express");
let userController = require('../controllers/userController');
let router = express.Router();


router.get("/login", (req, res) => {
  res.render("detail/login");
});
router.get("/signUp", (req, res) => {
  res.render("detail/signUp");
});
router.post('/signUp', (req, res, next)=>{
  let user = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
  };
  let confirmPassword= req.body.confirmPassword;
  let keepLoggedIn = (req.body.keepLoggedIn!= undefined);
  console.log(req.body);
  console.log(user.password);
  console.log(confirmPassword);
  //Kiem tra confirmpassword va password
  if( user.password != confirmPassword){
    return res.render('signUp', {
      message: 'Confirm password does not match',
      type:  'alert-danger'
    });
  };
  //Kiem tra user name valid
  userController
  .getUserByEmail(user.username)
  .then(user=>{
      if(user){
        return res.render('signUp', {
          message: `Email ${user.username} exists`,
          type:  'alert-danger'
        });
      }
      return userController
        .createUser(user)
        .then(user =>{
          if(keepLoggedIn){
            req.session.user = user;
            res.render('/')
          }else{
            return res.render('login', {
              message: 'sign up completed, pls login',
              type: 'alert-primary'
            });
          }
        })
        .catch(error=>next(error));
    });
  //tao tk
});
module.exports = router;
