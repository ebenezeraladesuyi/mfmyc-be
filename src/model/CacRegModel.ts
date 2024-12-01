import mongoose from "mongoose";

interface CAC {
    fullName: string;
    email: string;
    phoneNumber: string;
}

interface iCac extends CAC, mongoose.Document {}

const cacSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "please, enter your full name"]
    },
    email: {
        type: String,
        required: [true, "please, enter your email"]
    },
    phoneNumber: {
        type: String,
        required: [true, "please, enter your phone number"]
    }
});

export const cacModel = mongoose.model<iCac>("allCac", cacSchema);