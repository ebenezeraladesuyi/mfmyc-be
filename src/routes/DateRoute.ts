import express from "express"
import { dateReply } from "../controller/DateController"


const dateRouter = express.Router()

dateRouter.post("/datereply", dateReply)


export default dateRouter