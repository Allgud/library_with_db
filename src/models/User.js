import mongoose from "mongoose";

const User = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 2
    },
    lastname: {
        type: String,
        required: true,
        minLength: 2
    },
    username: {
        type: String,
        required: true,
        minLength: 5
    }
})

export default mongoose.model('User', User)