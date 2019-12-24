const express = require('express');

const userController = require('./routes/userController');

const listOfUsers = require('./resources/usersList')
const nextId = require('./resources/nextId')

console.log(listOfUsers);
console.log(nextId);

const app = express();


app.use('/users',userController);

// app.use((req,res,next)=>{
//   res.status(404).send('<h1>page not found</h1>');
// })

app.listen(3001);
