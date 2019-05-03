const db = require('../db/models.js');

module.exports = {
  post: (req, res) => {
    // console.log('IN POST');
    const {todo,listName} = req.body;
    db.Todo
    .create({todo:todo, listName:listName})
    .then(() => {
      res.status(201).send('Succesful Create')
    })
    .catch(err => {
      res.status(404).send('You friggin got rekt: ', err)
    })
  },
  get: (req, res) => {
    console.log('IN GET');
    const {listName} = req.query;
    db.Todo.findAll({
      where: {
        listName:listName
      }
    })
    .then(todos => {
      if(todos){
        res.status(200).send(todos)
      } else {
        res.status(404).send('List not found')
      }
    })
    .catch(err => {
      res.status(404).send('you got rekt again?', err)
    })
  },
  delete: (req, res) => {
    console.log('IN DELETE');
    const {listName, index} = req.query;
    db.Todo.destroy({
      where: {
        id: index
      }
    })
    .then(() => {
      if(todos) {
        res.status(200).send('Todo Deleted')
      } 
    })
    .catch(err => {
      res.status(404).send('Error Deleting ', err)
    })
  }
};