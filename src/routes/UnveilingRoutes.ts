import express from "express"
import { getAllRegUnveiling, registerUnveiling } from "../controller/UnveilingController";

const unveilingRouter = express.Router()

unveilingRouter.get("/allregisteredunveiling" , getAllRegUnveiling);
unveilingRouter.post("/registerunveiling", registerUnveiling);


export default unveilingRouter;