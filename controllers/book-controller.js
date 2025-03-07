import { Book } from "../models/book.js"
import mongoose from 'mongoose';

const getAllBooks = async (req, res) => {
    try {
        const allData = await Book.find();
        if (allData.length > 0) {
            res.status(200).json({
                success: true,
                message: "All Books fetched successfully.",
                data: allData
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "No Books found."
            })
        }
    } catch (error) {
        console.error("Error geting all books", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again."
        })
    }
}

const getBookByID = async (req, res) => {
    try {
        // const getID = req.params.id;

        // Validate if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format."
            });
        }
        const dataByID = await Book.findById(req.params.id);
        if (!dataByID) {
            return res.status(404).json({
                success: false,
                message: "For given id, no Book was found! Try with a different ID."
            })
        }
        res.status(200).json({
            success: true,
            message: "Book fetched by ID.",
            data: dataByID
        })
    } catch (error) {
        console.error("Error geting the book by ID.", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again."
        })
    }
}

const addNewBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        if (newBook) {
            res.status(200).json({
                success: true,
                message: "Book added successfully",
                data: newBook
            })
        }
    } catch (error) {
        console.error("Error in adding new Book", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again."
        });
    }
}

const updateBook = async (req, res) => {
    try {
        // Validate if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format."
            });
        }

        const updateDataByID = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true
            }
        )

        if (!updateDataByID) {
            return res.status(404).json({
                success: false,
                message: "For given id, no Book was found! Try with a different ID."
            })
        }
        res.status(200).json({
            success: true,
            message: "Book updated by ID.",
            data: updateDataByID
        })
    } catch (error) {
        console.error("Error in updating Book", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again."
        });
    }
}

const deleteBook = async (req, res) => {
    try {
        // Validate if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format."
            });
        }

        const deleteDataByID = await Book.findByIdAndDelete(req.params.id);
        if (!deleteDataByID) {
            return res.status(404).json({
                success: false,
                message: "For given id, no Book was found! Try with a different ID."
            })
        }
        res.status(200).json({
            success: true,
            message: "Book deleted by ID.",
            data: deleteDataByID
        })

    } catch (error) {
        console.error("Error in deleting Book", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again."
        });
    }
}

export { getAllBooks, getBookByID, addNewBook, updateBook, deleteBook };