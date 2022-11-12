import { HttpException } from "../HttpException";

export default function validateCepConsultRequest(cep: string) {
  const cepLength = cep.replace("-", "").length;
  const isDashAtWrongPlace = cep.includes("-") && "-" !== cep[5];
  const onlyNumbersAnDashRegex = /^[0-9-]*$/;

  if (!onlyNumbersAnDashRegex.test(cep)) {
    throw new HttpException(400, "O CEP só deve conter traço e números!");
  }

  if (cepLength != 8 || isDashAtWrongPlace) {
    throw new HttpException(400, "O formato do CEP informado é inválido :(");
  }
}
