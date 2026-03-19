const express = require("express");
const app = express();

//route

app.get("/", (req, res)=>{
    res.send("server ok")
});

app.listen(3000, ()=> {
    console.log("server console pe chal rha hai")
});