import mongoose from "mongoose";


interface date {
  date: string;
}


interface iDate extends date, mongoose.Document {}

const dateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, "please enter your respoose"],
  },
 
});


const dateModel = mongoose.model<iDate>("myDate" , dateSchema)

export default dateModel;