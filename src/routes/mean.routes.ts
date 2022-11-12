import { Router } from "express";

import { CalculateMeanController } from "../controllers/CalculateMeanController";

const routerMean = Router();

const calculateMeanController = new CalculateMeanController();

routerMean.post("/", calculateMeanController.handle);

export { routerMean };
