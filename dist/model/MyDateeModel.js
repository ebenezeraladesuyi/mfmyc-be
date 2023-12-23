"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dateSchema = new mongoose_1.default.Schema({
    date: {
        type: String,
        required: [true, "please enter your respoose"],
    },
});
const dateModel = mongoose_1.default.model("myDate", dateSchema);
exports.default = dateModel;
