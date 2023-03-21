const User = require("./model")
const jwt = require("jsonwebtoken")


const registerUser = async (req, res) => {
    try {
        const register = await User.create(req.body)
        res.status(201).json({
            message: "success", user: { username: req.body.username, email: req.body.email },
        });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        if(!req.authCheck){
            const error = new Error("Not Authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }

        const users = await User.findAll();

        for (let user of users){
            user.password = ""
        }
        console.log(users);
        res.status(200).json({ message: "success", users: users})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
};

module.exports = {
    registerUser,
    getAllUsers
}