const User = require("./model")
const jwt = require("jsonwebtoken")


const registerUser = async (req, res) => {
    try {
        const User = await User.create(req.body)
        res.status(201).json({
            message: "success", user: { username: req.body.username, email: req.body.email },
        });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
};

const loginUser = async (req, res) => {
    try {
        if(!req.authCheck){
            res.status(201).json({ message: "success", user: {
                username: req.authCheck.username,
                email: req.authCheck.email,
            },
        });
        return;
    };

    const token = await jwt.sign({ id: req.user.id}, process.env.SECRET_KEY);

    res.status(201).json({ message: "success",
        user: {
            username: req.user.username,
            email: req.user.email,
            token: token,
        },
    });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }
};

module.exports = {
    registerUser,
    getAllUsers,
    loginUser,
}