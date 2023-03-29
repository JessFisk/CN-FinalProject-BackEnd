const { DataTypes } = require("sequelize");
const connection = require("../db/connection");


const Favourite = connection.define(
    "Favourite",
    {
        username: {
            type: DataTypes.STRING,
        },
        mealId:{
            type: DataTypes.NUMBER,
        }
    },

    
)

module.exports = Favourite;