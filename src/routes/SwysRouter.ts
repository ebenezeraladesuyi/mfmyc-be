import express from "express"
import { getAllReg, registerAttendee } from "../controller/SwysController";

const swysRouter = express.Router()

swysRouter.get("/allregisteredattendee" , getAllReg);
swysRouter.post("/registerattendee", registerAttendee);


export default swysRouter;