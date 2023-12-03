import mongoose from "mongoose";

interface member {
  firstName: string;
  surname : string;
  email: string;
  phoneNumber: string;
  educationalQualification : string;
  dateOfBirth: string;
  maritalStatus: string;
  address: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactNumber: string;
}

interface iMember extends member, mongoose.Document {}

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please enter your firstname"],
  },
  surname: {
    type: String,
    required: [true, "please enter your surname"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  phoneNumber: {
    type: String,
    required: [true, "please enter your phone number"],
  },
  educationalQualification: {
    type: String,
    required: [true, "please enter your educational qualification"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "please enter your date of birth"],
  },
  address: {
    type: String,
    required: [true, "please enter your address"],
  },
  emergencyContactName: {
    type: String,
    required: [true, "please enter your emergency contact name"],
  },
  emergencyContactRelationship: {
    type: String,
    required: [true, "please enter your emergency contact relationship"],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, "please enter your emergency contact number"],
  },
 
});


const memberModel = mongoose.model<iMember>("AllMembers" , memberSchema)

export default memberModel