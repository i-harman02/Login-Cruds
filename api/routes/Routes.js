const express = require("express");
const router = express.Router();
const {first , createUser , userLogin} = require('../controller/Usercontroller');
const middleware = require("../middleware/middleware");

router.get("/profile", middleware, first);
router.post("/register", createUser);
router.post("/login",  userLogin);

module.exports = router;