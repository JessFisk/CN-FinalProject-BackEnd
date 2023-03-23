// Importing the User model and jwt library
const User = require("./model")
const jwt = require("jsonwebtoken")


// Asynchronous function for registering a new user

const registerUser = async (req, res) => {
    try {
        // Creating a new user in the database using data from the request body
        const register = await User.create(req.body)

        // Sending a success response with a message and user data
        res.status(201).json({
            message: "success",
            user: { username: req.body.username, email: req.body.email },
        });
    } catch (error) {
        // Handling specific database errors and sending an appropriate response
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({ errorMessage: 'Validation failed', error: error });
        } else if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ errorMessage: 'User already exists', error: error });
        } else {
            res.status(500).json({ errorMessage: 'Server error', error: error });
        }
    }
};





// Asynchronous function for logging in a user
const loginUser = async (req, res) => {
    try {
        // Checking if the user is authenticated
        if (req.authCheck) {
            res.status(401).json({
                message: "Authentication Fail", user: {
                    username: req.authCheck.username,
                    email: req.authCheck.email,
                },
            });
            return;
        };

        // Generating a JWT token for the user
        const token = await jwt.sign({ id: req.user.id }, process.env.SECRET_KEY);

        // Sending a success response with user data and the JWT token
        res.status(200).json({
            message: "success",
            user: {
                username: req.user.username,
                email: req.user.email,
                token: token,
            },
        });
    } catch (error) {
        // Handling different types of errors separately and sending an appropriate response
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            res.status(401).json({ errorMessage: 'Authentication failed', error: error });
        } else {
            res.status(500).json({ errorMessage: 'Server error', error: error });
        }
    }
};

// Function for logging out a user
const logoutUser = (req, res) => {
    // Clear the authentication information from the request object
    req.authCheck = null;
    req.user = null;

    // Send a success response with a message
    res.status(200).json({
        message: "success",
        data: "User successfully logged out",
    });
};





// Asynchronous function for get all Users

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





// Asynchronous function for Update User Name

const updateUserName = async (req, res) => {
    try {
      await User.update({ username: req.body.updateValue }, { where: { username: req.body.username } });
        res.status(201).json({ message: "success", username: updateUserName });
      
    } catch (error) {
        res.status(500).send({ errorMessage: error.message });
    }
  };






// Exporting the registerUser and loginUser functions for use in other modules

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getAllUsers,
    updateUserName,

}

