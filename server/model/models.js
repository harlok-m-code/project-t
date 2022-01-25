const sequelizeConnect = require('../connect');
const { STRING, INTEGER } = require('sequelize');




const User = sequelizeConnect.define("user", {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    email: {
        type: STRING,
        unique: true,
        allowNull: true
    },
    password: {
        type: STRING,
        allowNull: false
    },
    role: {
        type: STRING,
        defaultValue: "User"
    }
});


const Tasks = sequelizeConnect.define("tasks", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: STRING,
        allowNull: false
    }
});

User.hasMany(Tasks)
Tasks.belongsTo(User)


module.exports = {
    User,
    Tasks
}