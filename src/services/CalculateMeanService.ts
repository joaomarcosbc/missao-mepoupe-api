import { HttpException } from "../utils/HttpException";

interface ICalculateMeanRequest {
  firstNumber: number;
  secondNumber: number;
}

class CalculateMeanService {
  execute({ firstNumber, secondNumber }: ICalculateMeanRequest) {
    const sum = firstNumber + secondNumber;
    const mean = sum / 2;
    const roundedMean = Number(mean.toFixed(2));

    console.log(
      "O endpoint recebeu os valores",
      firstNumber,
      "e",
      secondNumber
    );
    console.log("A soma dos valores recebidos é", sum);
    console.log("A média aritmética desses dois valores é", mean);
    console.log(
      "O retorno do endpoint terá como valor(arredondamento Half Round Up):",
      roundedMean,
      "\n"
    );

    return roundedMean;
  }
}

export { CalculateMeanService };
