import express from "express"
import { getAllWorkers, registerWorker } from "../controller/WorkerController";

const workerRouter = express.Router()

workerRouter.get("/allregisteredworker" , getAllWorkers);
workerRouter.post("/registerworker", registerWorker);


export default workerRouter;