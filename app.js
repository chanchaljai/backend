const express = require("express");
const app = express();
//path require
const userRoute = require("./routes/users");
//connect with users.js
app.use("/", userRoute);

//port
app.listen(3000, ()=> {
    console.log("server 3000 port ok")
});