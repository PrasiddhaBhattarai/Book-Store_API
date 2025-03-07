import express from "express";
import {
    getAllBooks,
    getBookByID,
    addNewBook,
    updateBook,
    deleteBook
} from "../controllers/book-controller.js";

//create router
const router = express.Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getBookByID);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

// why is function is not invoked with parentheses (i.e., deleteBook())?
// 
// In Express (and other similar frameworks), routes like router.delete() or router.get() expect a callback function as the second argument. This callback function is executed when a specific HTTP request (like DELETE) is made to the specified route (/book/:id in this case).
//
// The deleteBook function is passed by reference into the route handler. It will be called automatically when an HTTP DELETE request is made to /book/:id. You don’t invoke it immediately because Express itself will invoke the function when a request matches the route.

export default router;