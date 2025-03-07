import express from "express";
import dotenv from "dotenv";
import { connectToDB, closeConnection } from "./database/db.js";
import bookRoutes from "./routes/book-routes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// connect to database
connectToDB(process.env.MONGO_URI);

// middleware
app.use(express.json());

//routes here
app.use("/api/books", bookRoutes);

app.listen(port, () => {
    console.log(`server is running on port, ${port}`);
})

// close connection
// closeConnection();