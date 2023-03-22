const { DataTypes } = require("sequelize");
const connection = require("../db/connection");


const Favourite = connection.define(
    "Favourite",
    {
        favourite: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: true,
        },
    },

    
)

module.exports = Favourite;