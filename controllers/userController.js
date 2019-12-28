const userList = require('../resources/userList') 
// let nextId = require('../resources/nextId') 

let nextId =  116;

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
  if (typeof req.body.name === 'string' || req.body.name instanceof String){
    userList.userList.push({ id: nextId,
      name: req.body.name })
      res.json({
        message:"New user was added"
      })
    nextId++;
  }else{
    res.status(400);
    res.json({
      error:"Bad request",
    })
  }
}