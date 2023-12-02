import express from "express"
import { getAllWorkers, registerWorker } from "../controller/WorkerController";

const workerRouter = express.Router()

workerRouter.get("/registered" , getAllWorkers);
workerRouter.post("/register", registerWorker);


export default workerRouter;