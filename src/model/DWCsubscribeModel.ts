import mongoose from "mongoose";

interface iSubscribe {
  fullName: string;
  email: string;
}

interface DWCsubscribe extends iSubscribe, mongoose.Document {}

const swysSchema = new mongoose.Schema({
    fullName: {
    type: String,
    required: [true, "please enter your fullname"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },

 
});


const DWCSubscribeModel = mongoose.model<DWCsubscribe>("dwc_subscribe" , swysSchema)

export default DWCSubscribeModel