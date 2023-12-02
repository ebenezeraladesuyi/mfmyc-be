import express from "express"
import { getAllWorkers, registerWorker } from "../controller/WorkerController";

const workerRouter = express.Router()

workerRouter.get("/worker/registered" , getAllWorkers);
workerRouter.post("/worker/register", registerWorker);


export default workerRouter;