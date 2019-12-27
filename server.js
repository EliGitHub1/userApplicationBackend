const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(cors())


// app.get('/users/getUsers', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only http://localhost:3001/users'})
// })

const userRoutes = require('./routes/user');

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users',cors(corsOptions),userRoutes);

app.use((req,res,next)=>{
  // res.status(404).render('404',{pageTitle:'Page Not Found'} );
})

app.listen(3001);