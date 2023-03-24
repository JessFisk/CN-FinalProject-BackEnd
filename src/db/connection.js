const { Sequelize }= require("sequelize");

const connection = new Sequelize(process.env.MYSQL_URI, {
    retry: { match: [/Deadlock/i], max: 3 }
});

connection.authenticate();

console.log("DB connection is established");

module.exports = connection;
