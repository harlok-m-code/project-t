const { Sequelize } = require('sequelize');

module.exports = new Sequelize("exp","mayrbek", "123-Mayrbek", {
    dialect:"mysql",
    host: "localhost"
})