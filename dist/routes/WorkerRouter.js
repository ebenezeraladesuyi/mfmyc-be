"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WorkerController_1 = require("../controller/WorkerController");
const workerRouter = express_1.default.Router();
workerRouter.get("/allregisteredworker", WorkerController_1.getAllWorkers);
workerRouter.post("/registerworker", WorkerController_1.registerWorker);
exports.default = workerRouter;
