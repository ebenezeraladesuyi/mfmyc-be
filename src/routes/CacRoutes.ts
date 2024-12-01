import express from "express";
import { getAllCac, registerCac } from "../controller/CacController";

const cacRouter = express.Router();

cacRouter.post("/registerunizik", registerCac);
cacRouter.get("/getallunizik", getAllCac);

export default cacRouter;

