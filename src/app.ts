import express, { Application , Request , Response } from "express";
import cors from "cors";
import memberRouter from "./routes/MemberRouter";
import workerRouter from "./routes/WorkerRouter";
import dateRouter from "./routes/DateRoute";


const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());

  //routes
  app.use("/member" , memberRouter);
  app.use("/worker" , workerRouter);
  app.use("/date" , dateRouter);


  app.get("/" , (req: Request , res:Response)=>{
    return res.status(200).json({
      message : "default get"
    })
  })
};



export default appConfig