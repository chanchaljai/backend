import express from "express";
const app = express();
//path require
import userRoute from "./routes/users.js";


app.set("view engine", "ejs");



//connect with users.js
app.use("/", userRoute);
app.use(express.static("public"));


//port
app.listen(3000, ()=> {
    console.log("server 3000 is working")
});