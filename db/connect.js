import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/testdb")


const userSchema = mongoose.Schema({
    name: String,
    username: String,
    age: Number
});


const userModel = mongoose.model("user", userSchema);

export default "userModel";


