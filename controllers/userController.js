const userList = require('../resources/userList') 

exports.getUsers=(req,res,next)=>{
  res.status(200).json(userList);
    next();
};


exports.postAddUser=(req, res, next) => {
  userList.push({ name: req.body.name })
  res.redirect('/users/getUsers')
}