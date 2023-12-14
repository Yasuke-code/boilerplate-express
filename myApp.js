let express = require('express');
let app = express();
require('dotenv').config();

// console.log("Hello World");  //#1//

app.use('/public',express.static(__dirname + '/public'))                   //#4//

app.get("/",function(req, res) {
 res.sendFile(__dirname + '/views/index.html' )
})                                         //#2+3//

// 5
app.get("/json",(req, res)=>{
 if(prodess.env.MESSAGE_STYLE=="uppercase"){
  res.json({"MESSAGE":"HELLO JSON"})
 }else{
  res.json({"message":"Hello json"})
 }
})





































 module.exports = app;
