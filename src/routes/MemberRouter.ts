import express from "express"
import { registerMember } from "../controller/MemberController";

const memberRouter = express.Router()

// userRouter.get("/registered" , getAllWorkers)
memberRouter.post("/register", registerMember)


export default memberRouter