"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateReply = void 0;
const MyDateeModel_1 = __importDefault(require("../model/MyDateeModel"));
//register a date
const dateReply = async (req, res) => {
    try {
        const { date, } = req.body;
        const myDate = await MyDateeModel_1.default.create({
            date,
        });
        return res.status(200).json({
            message: "date question answered",
            data: myDate
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get date reply",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
};
exports.dateReply = dateReply;
