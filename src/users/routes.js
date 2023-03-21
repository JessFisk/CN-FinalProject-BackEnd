const { Router } = require("express");
const userRouter = Router();

userRouter.post("/users/register", registerUser);

module.exports = userRouter;