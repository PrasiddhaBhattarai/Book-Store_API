import mongoose from "mongoose";

// console.log(process.env.PORT);

const connectToDB = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MongoDB atlas connecion failed", error);
        process.exit(1);
    }
}

const closeConnection = async () => {
    try {
        await mongoose.connection.close();
        console.log("MongoDB Atlas connection closed.");
    } catch (error) {
        console.log("error in closing connection", error);
    }
}

export {connectToDB};
export {closeConnection};