import { Router } from "express";
import { routerMean } from "./mean.routes";
import { Request, Response } from "express";

const router = Router();

router.use("/mean", routerMean);

export { router };
