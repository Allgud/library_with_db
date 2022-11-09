import mongoose from "mongoose";

const Book = new mongoose.Schema({
    title: {
        type: String,
        minLength: 2,
        required: true
    },
    author: {
        type: String,
        minLength: 2,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Book', Book)