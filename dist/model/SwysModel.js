"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const swysSchema = new mongoose_1.default.Schema({
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
const swysModel = mongoose_1.default.model("SWYS", swysSchema);
exports.default = swysModel;
