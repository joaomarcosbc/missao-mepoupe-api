import { Request, Response } from "express";
import { CalculateMeanService } from "../services/CalculateMeanService";
import validateCalculateMeanRequest from "../utils/validateRequests/validateCalculateMeanRequest";

class CalculateMeanController {
  handle(request: Request, response: Response) {
    const { firstNumber, secondNumber } = request.body;

    validateCalculateMeanRequest(firstNumber, secondNumber);

    const calculateMeanService = new CalculateMeanService();

    const result = calculateMeanService.execute({
      firstNumber,
      secondNumber,
    });

    return response.json({ mean: result });
  }
}

export { CalculateMeanController };
