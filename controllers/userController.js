const userList = require('../resources/userList') 

exports.getUsers=(req,res,next)=>{
  let resp = {};
  let start = req.query.page*req.query.per_page-req.query.per_page;
  let end = req.query.page*req.query.per_page;
  resp["page"] = req.query.page;
  resp["data"] = userList.userList.slice(start,end);
  resp["total"] = userList.userList.length;



  res.send(resp)

};


exports.postAddUser=(req, res, next) => {
  userList.push({ name: req.body.name })
  res.redirect('/users/getUsers')
}