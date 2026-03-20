const express = require("express");
const app = express();
//path require
const userRoute = require("./routes/users");


app.set("view engine", "ejs");



//connect with users.js
app.use("/", userRoute);
app.use(express.static("public"));


//port
app.listen(3000, ()=> {
    console.log("server 3000 port ok")
});