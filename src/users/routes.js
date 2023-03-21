
const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass, tokenCheck } = require("../middleware")


const { registerUser, getAllUsers, updateUserName } = require("./controller");


userRouter.post("/users/register", hashPass, registerUser);
userRouter.get("/users/getallusers", tokenCheck, getAllUsers)
userRouter.put("/users/updateusername", tokenCheck, updateUserName);




module.exports = userRouter;
