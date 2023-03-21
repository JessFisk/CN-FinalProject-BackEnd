
const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass, tokenCheck } = require("../middleware")


const { registerUser, getAllUsers } = require("./controller");


userRouter.post("/users/register", hashPass, registerUser);

userRouter.get("/users/getallusers", tokenCheck, getAllUsers)





module.exports = userRouter;
