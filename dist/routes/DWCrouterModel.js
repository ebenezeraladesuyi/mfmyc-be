"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DWCsubController_1 = require("../controller/DWCsubController");
const DWCSubscribeRouter = express_1.default.Router();
DWCSubscribeRouter.get("/dwcallsubscribed", DWCsubController_1.DWCallSubscribed);
DWCSubscribeRouter.post("/dwcsubscribe", DWCsubController_1.DWCSubscribe);
exports.default = DWCSubscribeRouter;
