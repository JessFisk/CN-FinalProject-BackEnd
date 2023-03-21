
const { Router } = require("express");
const userRouter = Router();



const { hashPass, comparePass, tokenCheck } = require("../middleware")
const { registerUser, loginUser, getAllUsers, updateUserName } = require("./controller");




userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/loginuser", comparePass, loginUser)
userRouter.get("/users/getallusers", tokenCheck, getAllUsers)
userRouter.put("/users/updateusername", tokenCheck, updateUserName);




module.exports = userRouter;
