import express from "express";
const router = express.Router();
import userModel from "../db/connect.js";

router.get("/",(req, res)=>{
    res.send("home page chal rha hai")
});

// create
// router.get("/user",async (req,res) =>{
//     const createUser = await userModel.create({
//         username: "joy",
//         age: 22,
//         name: "Joy"
//     });
//     res.send(createUser);
// });

// read all
// router.get("/alluser",async (req, res)=>{
//     const allUser = await userModel.find();
//     res.send(allUser);
// });

//read one
// router.get("/find",async (req, res)=>{
//     const findOne = await userModel.findOne({
//         username: "harsh"
//     });
//     res.send(findOne);
// });

// delete
// router.get("/delete",async (req, res)=>{
//     const deleteUser = await userModel.findOneAndDelete({
//         username: "harsh"
//     });
//     res.send(deleteUser);
// });


router.get("/profile",(req, res)=>{
    res.render("profile")
});
// page export
export default router;
