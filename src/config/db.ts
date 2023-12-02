import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

// const DB_URL = "mongodb://0.0.0.0:27017/forEben";
// const DB_URL = "mongodb://127.0.0.1/Eben"

// const uri = "mongodb+srv://eben19:ebenezer19@cluster0.u3wri8y.mongodb.net/"

const uri = process.env.MONGOOSE_DB;

// deployed url = https://volatic-reg-be.onrender.com

// if (!uri) {
//   console.error('MONGOOSE_DB environment variable is not defined');
//   // Handle the error or provide a default URI
// } else {
//   const conn = await mongoose.connect(uri);
//   // Continue with the connection logic
// }


const dbConfig = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(uri);
      console.log(`connected to database on port ${conn.connection.host}`);
    } catch (error) {
      console.log(`failed to connect to database` , error);
    }
  };
  
  export default dbConfig;

