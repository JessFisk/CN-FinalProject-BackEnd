// Importing modules and functions
const { Router } = require("express");
const userRouter = Router();





const { hashPass, comparePass, tokenCheck } = require("../middleware");
const { registerUser, loginUser, getAllUsers, updateUserName, logoutUser, deleteUser, updateUserEmail  } = require("./controller");





// Creating routes
userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/loginuser", comparePass, loginUser)
userRouter.post("/users/logout", logoutUser)
userRouter.get("/users/getallusers", tokenCheck, getAllUsers)
userRouter.put("/users/updateusername", tokenCheck, updateUserName);
userRouter.put("/users/updateuseremail", tokenCheck, updateUserEmail)
userRouter.get("/users/authcheck", tokenCheck, loginUser)
userRouter.delete("/users/deleteuser", tokenCheck, deleteUser);




// Exporting the userRouter object for use in other modules

module.exports = userRouter;

