"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const MemberRouter_1 = __importDefault(require("./routes/MemberRouter"));
const WorkerRouter_1 = __importDefault(require("./routes/WorkerRouter"));
const DateRoute_1 = __importDefault(require("./routes/DateRoute"));
const SwysRouter_1 = __importDefault(require("./routes/SwysRouter"));
const SwysSubscribeRouter_1 = __importDefault(require("./routes/SwysSubscribeRouter"));
const UnveilingRoutes_1 = __importDefault(require("./routes/UnveilingRoutes"));
const DWCrouterModel_1 = __importDefault(require("./routes/DWCrouterModel"));
const CacRoutes_1 = __importDefault(require("./routes/CacRoutes"));
const appConfig = (app) => {
    app.use(express_1.default.json()).use((0, cors_1.default)());
    //routes
    app.use("/member", MemberRouter_1.default);
    app.use("/worker", WorkerRouter_1.default);
    app.use("/swys", SwysRouter_1.default);
    app.use("/date", DateRoute_1.default);
    app.use("/subscribe", SwysSubscribeRouter_1.default);
    app.use("/unveiling", UnveilingRoutes_1.default);
    app.use("/dwcsub", DWCrouterModel_1.default);
    app.use("/cac", CacRoutes_1.default);
    app.get("/", (req, res) => {
        return res.status(200).json({
            message: "default get"
        });
    });
};
exports.default = appConfig;
