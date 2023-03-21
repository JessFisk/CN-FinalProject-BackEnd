const User = require("./model")
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
    try {
        const registerUser = await User.create(req.body)
        res.status(201).json({
            message: "success", user: { username: req.body.username, email: req.body.email },
        });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

module.exports = {
    register,
}