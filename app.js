const express = require("express");
const app = express();
var path = require("path");


app.set("view engine","pug")
app.set("views", path.join(__dirname, "views"));
app.use(express.static("assets"));

app.get("/", (req, res)=>{
    res.render("index")    
})
app.get("/indexado", (req, res)=>{
    res.render("indexado")    
})

app.listen(3000, ()=>{
        console.log ("http://localhost:3000")
});