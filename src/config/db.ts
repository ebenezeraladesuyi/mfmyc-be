import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

// const uri = process.env.MONGOOSE_DB;
const uri = "mongodb+srv://eben19:ebenezer19@cluster0.u3wri8y.mongodb.net/"

// liveURL = "https://mfmyc-ado.onrender.com/"


const dbConfig = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(uri);
      console.log(`connected to database on port ${conn.connection.host}`);
    } catch (error) {
      console.log(`failed to connect to database` , error);
    }
  };
  
  export default dbConfig;

