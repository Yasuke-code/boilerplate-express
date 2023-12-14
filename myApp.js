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
 res.json({"message":"Hello json"})
})





































 module.exports = app;
