"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DateController_1 = require("../controller/DateController");
const dateRouter = express_1.default.Router();
dateRouter.post("/datereply", DateController_1.dateReply);
exports.default = dateRouter;
