const express = require("express");
const router = express.Router();
const userModel = require("../db/connect")

router.get("/",(req, res)=>{
    res.send("home page chal rha hai")
});

router.get("/alluser",async (req, res)=>{
    const allUser = await userModel.find();
    res.send(allUser);
});

router.get("/profile",(req, res)=>{
    res.render("profile")
});
// page export
module.exports = router;
