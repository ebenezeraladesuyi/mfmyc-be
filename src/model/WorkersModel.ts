import mongoose from "mongoose";

interface worker {
  firstName: string;
  surname : string;
  email: string;
  phoneNumber: string;
  departmentInChurch: string;
  maritalStatus: string;
  educationalQualification : string;
  address: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactNumber: string;
}

interface iWorker extends worker, mongoose.Document {}

const workerSchema = new mongoose.Schema({
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
  departmentInChurch: {
    type: String,
    required: [true, "please enter department in church"],
  },
  maritalStatus: {
    type: String,
    required: [true, "please enter your marital status"],
  },
  educationalQualification: {
    type: String,
    required: [true, "please enter your educational qualification"],
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


const workerModel = mongoose.model<iWorker>("AllWorkers" , workerSchema)

export default workerModel;