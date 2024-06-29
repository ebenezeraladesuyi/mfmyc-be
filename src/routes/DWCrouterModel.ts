import express from "express"
import { getAllSubscribed, userSubscribe } from "../controller/SwysSubscribeContoller";
import { DWCSubscribe, DWCallSubscribed } from "../controller/DWCsubController";

const DWCSubscribeRouter = express.Router()

DWCSubscribeRouter.get("/dwcallsubscribed" , DWCallSubscribed);
DWCSubscribeRouter.post("/dwcsubscribe", DWCSubscribe);


export default DWCSubscribeRouter;