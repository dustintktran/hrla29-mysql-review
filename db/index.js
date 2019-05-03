const Sequelize = require('sequelize');

const connection = new Sequelize('todoList', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
})

connection
  .authenticate()
  .then(() => {
    console.log('You have connected to the server ya bishhh')
  })
  .catch(error => {
    console.log('You fucked up my dood. Heres why ', error);
  })

  module.exports = connection;