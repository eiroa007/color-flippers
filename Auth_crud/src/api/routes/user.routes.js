const express = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
} = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.get("/", getUsers);
UserRouter.post("/login", loginUser);
UserRouter.post("/register", registerUser);

module.exports = UserRouter;
