import mongoose from "mongoose";

interface swys {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  stateOfOrigin : string;
  hometown: string;
  occupation: string;
  educationalQualification: string;
}

interface iSWYS extends swys, mongoose.Document {}

const swysSchema = new mongoose.Schema({
    fullName: {
    type: String,
    required: [true, "please enter your fullname"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  phoneNumber: {
    type: String,
    required: [true, "please enter your phone number"],
  },
  address: {
    type: String,
    required: [true, "please enter your address"],
  },
  stateOfOrigin: {
    type: String,
    required: [true, "please enter your state of origin"],
  },
  hometown: {
    type: String,
    required: [true, "please enter your hometown"],
  },
  occupation: {
    type: String,
    required: [true, "please enter your occupation"],
  },
  educationalQualification: {
    type: String,
    required: [true, "please enter your educational qualification"],
  },
 
});


const swysModel = mongoose.model<iSWYS>("SWYS" , swysSchema)

export default swysModel