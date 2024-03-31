import express, { Application , Request , Response } from "express";
import cors from "cors";
import memberRouter from "./routes/MemberRouter";
import workerRouter from "./routes/WorkerRouter";
import dateRouter from "./routes/DateRoute";
import swysRouter from "./routes/SwysRouter";
import swysSubscribeRouter from "./routes/SwysSubscribeRouter";
import unveilingRouter from "./routes/UnveilingRoutes";


const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());

  //routes
  app.use("/member" , memberRouter);
  app.use("/worker" , workerRouter);
  app.use("/swys" , swysRouter);
  app.use("/date" , dateRouter);
  app.use("/subscribe", swysSubscribeRouter)
  app.use("/unveiling", unveilingRouter)


  app.get("/" , (req: Request , res:Response)=>{
    return res.status(200).json({
      message : "default get"
    })
  })
};



export default appConfig