"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UnveilingController_1 = require("../controller/UnveilingController");
const unveilingRouter = express_1.default.Router();
unveilingRouter.get("/allregisteredunveiling", UnveilingController_1.getAllRegUnveiling);
unveilingRouter.post("/registerunveiling", UnveilingController_1.registerUnveiling);
exports.default = unveilingRouter;
