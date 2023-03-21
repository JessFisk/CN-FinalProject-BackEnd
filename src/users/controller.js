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











const getAllUsers = async (req, res) => {
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









const updateUserName = async (req, res) => {
    try {
      await User.update({ username: req.body.updateValue }, { where: { username: req.body.username } });
        res.status(201).json({ message: "success", username: updateUserName });
      
    } catch (error) {
        res.status(500).send({ errorMessage: error.message });
    }
  };








module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    updateUserName,

}