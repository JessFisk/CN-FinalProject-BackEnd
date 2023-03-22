
const Favourite = require("./model")
const jwt = require("jsonwebtoken")



const addFavourite = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const favourite = await Favourite.create(req.body);
        res.status(201).json({ message: "success", favourite: favourite });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}





const getAllFavourites = async (req, res) => {
    try {
        const favMeals = await Favourite.findAll({where: { user: req.params.user },
        include: Favourite,
    });
        res.status(200).json({ message: "success", books: favMeals });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}








module.exports = {
    getAllFavourites, 
    addFavourite,
}
