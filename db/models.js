const Sequelize = require('sequelize');
const connection = require('./index.js');

const Todo = connection.define('todoList', {
    todo: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    listName: {
        type: Sequelize.STRING(50),
    }
},
    {
        //options go here
        timestamps: true //<== this defaults true, but this is here to be an example option
    });

connection.sync({ force: false }); // <== this will auto create the table or modify it as needed

module.exports.Todo = Todo;