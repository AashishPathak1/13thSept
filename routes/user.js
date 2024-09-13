const express = require("express");
const usercontrollers = require("../controllers/usercontroller");
const router = express.Router();

router.get("/users", (req, res) => {
  usercontrollers.getAllUsers(req, res);
});

router.get("/users/:id", (req, res) => {
  usercontrollers.getUser(req, res);
});
module.exports = router;
