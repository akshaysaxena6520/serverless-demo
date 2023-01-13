const express = require("express");
const {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/getuser/:id", getUser);
routes.get("/getallusers", getAllUsers);
routes.post("/createuser", createUser);
routes.put("/updateuser", updateUser);
routes.delete("/deleteuser", deleteUser);

module.exports = routes;
