"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.MONGOOSE_DB;
const dbConfig = async () => {
    try {
        const conn = await mongoose_1.default.connect(uri);
        console.log(`connected to database on port ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`failed to connect to database`, error);
    }
};
exports.default = dbConfig;
