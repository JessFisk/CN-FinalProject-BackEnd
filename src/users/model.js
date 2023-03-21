const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const User = connection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    { timestamps: false,
        indexes: [{ unique: true, fields: ["email"] }] }
);

module.exports = User;
