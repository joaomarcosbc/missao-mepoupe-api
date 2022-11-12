import { Router } from "express";

import { CepConsultController } from "../controllers/CepConsultController";

const routerCep = Router();

const cepConsultController = new CepConsultController();

routerCep.post("/", cepConsultController.handle);

export { routerCep };
