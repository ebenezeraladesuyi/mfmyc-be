import express from "express"
import { getAllMembers, registerMember } from "../controller/MemberController";

const memberRouter = express.Router()

// userRouter.get("/registered" , getAllWorkers)
memberRouter.post("/registermember", registerMember)
memberRouter.get("/allregisteredmembers", getAllMembers)


export default memberRouter