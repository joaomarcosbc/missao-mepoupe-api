import { Request, Response } from "express";
import { CepConsultService } from "../services/CepConsultService";
import validateCepConsultRequest from "../utils/validateRequests/validateCepConsultRequest";

class CepConsultController {
  async handle(request: Request, response: Response) {
    let { cep } = request.body;

    cep = String(cep);

    cep = cep.replace(/\s/g, "");

    validateCepConsultRequest(cep);

    const cepConsultService = new CepConsultService();

    const result = await cepConsultService.execute({ cep });

    return response.json({ result });
  }
}

export { CepConsultController };
