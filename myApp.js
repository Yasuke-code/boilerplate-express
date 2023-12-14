let express = require('express');
let app = express();
require('dotenv').config();

console.log("server restarted");  //#1//

app.use('/public',express.static(__dirname + '/public'))  //#4//

//#7
// app.use((req, res,next)=>{
//     console.log(req.method + " " +req.path + " "+"-"+" " + req.ip)
//     next();
// })

app.get("/",function(req, res) {
 res.sendFile(__dirname + '/views/index.html' )
 
})                                         //#2+3//

// #5
app.get("/json",(req, res)=>{
    //#6
 if(process.env.MESSAGE_STYLE=="uppercase"){
  res.json({"message":"HELLO JSON"})
 }else{
  res.json({"message":"Hello json"})
 }
})

const getCurrentTime=()=>{
    return new Date().toString();
}
app.get("/now",(req, res, next)=>{
    req.time=getCurrentTime();
    next();
},(req, res)=>{
    res.json({"time":req.time})
})








































 module.exports = app;
