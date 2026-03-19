const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.send("home page chal rha hai")
});

router.get("/user",(req, res)=>{
    res.send("user page chal rha hai")
});

router.get("/profile",(req, res)=>{
    res.render("profile")
});
// page export
module.exports = router;
