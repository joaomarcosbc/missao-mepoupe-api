import { Router } from "express";
import { routerMean } from "./mean.routes";
import { routerCep } from "./cep.routes";

const router = Router();

router.use("/mean", routerMean);
router.use("/cep", routerCep);

export { router };
