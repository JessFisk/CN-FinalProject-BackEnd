
const { Router } = require("express");
const favouriteRouter = Router();



const {  tokenCheck } = require("../middleware")
const { getAllFavourites, addFavourite } = require("./controller");



favouriteRouter.put("/favourites/addfavourite", tokenCheck, addFavourite)
favouriteRouter.get("/favourites/getallfavourites", tokenCheck, getAllFavourites)




module.exports = favouriteRouter;