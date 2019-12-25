const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user');

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users',userRoutes);

app.use((req,res,next)=>{
  // res.status(404).render('404',{pageTitle:'Page Not Found'} );
})

app.listen(3001);
