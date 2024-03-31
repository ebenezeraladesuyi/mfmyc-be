"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const unveilingSchema = new mongoose_1.default.Schema({
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
const unveilingModel = mongoose_1.default.model("unveiling24", unveilingSchema);
exports.default = unveilingModel;
