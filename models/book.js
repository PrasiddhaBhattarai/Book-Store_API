import mongoose from 'mongoose';

//schema 
const bookSchema = new mongoose.Schema({
    title: {
        type : String,
        required : [true, "Book title is required!!"],
        trim : true,
        maxLengh : [100, "Book title can't exceed 100 characters!!"]
    },
    author : {
        type : String,
        required : [true, "Author name is required!!"],
        trim : true
    },
    publishedYear : {
        type: Number,
        required : [true, "Publication year is required!!"],
        min : [1000, "Book published after 1000 AD is only allowed!!"],
        max : [new Date().getFullYear(), "Future date not allowed!!"]
    },
    createdAt : {
        type : Date,
        default : () => new Date()
    }
});

// export model
export const Book = mongoose.model("Book", bookSchema);