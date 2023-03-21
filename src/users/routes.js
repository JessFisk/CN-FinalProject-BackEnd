
const { Router } = require("express");
const userRouter = Router();


const { registerUser } = require("./controller");


userRouter.post("/users/register", registerUser);





module.exports = userRouter;
