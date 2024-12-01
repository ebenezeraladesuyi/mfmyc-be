"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CacController_1 = require("../controller/CacController");
const cacRouter = express_1.default.Router();
cacRouter.post("/registerunizik", CacController_1.registerCac);
cacRouter.get("/getallunizik", CacController_1.getAllCac);
exports.default = cacRouter;
