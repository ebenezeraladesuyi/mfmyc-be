"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SwysController_1 = require("../controller/SwysController");
const swysRouter = express_1.default.Router();
swysRouter.get("/allregisteredattendee", SwysController_1.getAllReg);
swysRouter.post("/registerattendee", SwysController_1.registerAttendee);
exports.default = swysRouter;
