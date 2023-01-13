const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Models
const User = prisma.users;

//Get all the users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findMany();
    return res.status(200).json({ users, msg: "Users fetched successfully" });
  } catch (error) {
    console.log("ERROR IN GET ALL USER API---", error);
    return res.status(400).json({ errorMsg: "ERROR IN GET ALL USER API" });
  }
};

//Get Single User
const getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findUnique({
      where: {
        id: id,
      },
    });
    if (user) {
      return res.status(200).json({ user, msg: "User fetched successfully" });
    }
    return res.status(400).json({ errorMsg: "User doesn't exist" });
  } catch (error) {
    console.log("ERROR IN GET USER API---", error);
    return res.status(400).json({ errorMsg: "ERROR IN GET USER API" });
  }
};

//Create new user
const createUser = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    const user = await User.create({
      data: {
        email,
        fname,
        lname,
        password,
      },
    });

    return res.status(201).json({ user, msg: "User created successfully" });
  } catch (error) {
    console.log("ERROR IN Create New USER API---", error);
    return res.status(400).json({ errorMsg: "ERROR IN Create USER API" });
  }
};

//Update existing user
const updateUser = async (req, res) => {
  try {
    const { id, fname, lname, password, email } = req.body;

    const updated_user = await User.update({
      where: {
        id,
      },
      data: {
        email,
        fname,
        lname,
        password,
      },
    });

    return res
      .status(200)
      .json({ updated_user, msg: "User updated successfully" });
  } catch (error) {
    console.log("ERROR IN Update USER API---", error);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await User.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    console.log("ERROR IN Delete USER API---", error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
