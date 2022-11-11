import { HttpException } from "../HttpException";

export default function validateMeanRequest(
  firstNumber: number,
  secondNumber: number
) {
  if (!firstNumber || !secondNumber) {
    throw new HttpException(400, "Todos os parâmetros devem ser enviados");
  }

  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new HttpException(400, "Parâmetros devem ser do tipo number");
  }
}
