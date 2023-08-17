import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    email: String,
    password: String,
    name: String,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model("User", UserSchema);
export default User;