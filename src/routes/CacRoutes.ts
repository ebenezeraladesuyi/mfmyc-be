import express from "express";
import { getAllCac, registerCac } from "../controller/CacController";

const cacRouter = express.Router();

cacRouter.post("/registercac", registerCac);
cacRouter.get("/getallcac", getAllCac);

export default cacRouter;

