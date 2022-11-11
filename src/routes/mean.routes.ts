import { Router } from "express";

import { CalculateMeanController } from "../controllers/CalculateMeanController";

const routerMean = Router();

const calculateMeanController = new CalculateMeanController();

routerMean.post("/calculateMean", calculateMeanController.handle);

export { routerMean };
