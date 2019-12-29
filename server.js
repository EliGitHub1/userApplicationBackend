const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(cors())

const userRoutes = require('./routes/user');

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users',cors(corsOptions),userRoutes);

app.use((req,res,next)=>{
  res.status(404).render('404',{pageTitle:'Page Not Found'} );
})

const PORT= process.env.port || 3001;
app.listen(PORT);