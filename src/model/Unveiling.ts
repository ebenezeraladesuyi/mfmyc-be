import mongoose from "mongoose";

interface unveiling {
  fullName: string;
  email: string;
  phoneNumber: string;
  department: string;
  level : string;
  haveYou: string;
  expectations: string;
}

interface iUnveiling extends unveiling, mongoose.Document {}

const unveilingSchema = new mongoose.Schema({
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
  department: {
    type: String,
    required: [false, "please enter your department"],
  },
  level: {
    type: String,
    required: [false, "please enter your level"],
  },
  haveYou: {
    type: String,
    required: [true, "please enter if you have attended in the past"],
  },
  expectations: {
    type: String,
    required: [true, "please enter your expectations"],
  },
 
});


const unveilingModel = mongoose.model<iUnveiling>("unveiling24" , unveilingSchema)

export default unveilingModel