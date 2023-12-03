"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const workerSchema = new mongoose_1.default.Schema({
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
    dateOfBirth: {
        type: String,
        required: [true, "please enter your dat of birth"],
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
const workerModel = mongoose_1.default.model("AllWorkers", workerSchema);
exports.default = workerModel;
