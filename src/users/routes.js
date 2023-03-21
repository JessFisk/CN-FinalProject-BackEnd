
const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass, tokenCheck } = require("../middleware")


const { registerUser, getAllUsers, loginUser } = require("./controller");


userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/loginuser", comparePass, loginUser)

userRouter.get("/users/getallusers", tokenCheck, getAllUsers)





module.exports = userRouter;
