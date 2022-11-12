import axios from "axios";
import { HttpException } from "../utils/HttpException";

interface ICepConsultServiceRequest {
  cep: string;
}

class CepConsultService {
  async execute({ cep }: ICepConsultServiceRequest) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      let adress = response.data;
      if (adress.erro) {
        throw new HttpException(400, "A API viaCEP não identificou o CEP :(");
      }
      if (!adress.bairro) {
        adress = {
          ...adress,
          bairro: "Não existente",
          message: "O CEP informado não possui Bairro!",
        };
      }
      return adress;
    } catch (error) {
      throw new HttpException(400, "A API viaCEP não identificou o CEP :(");
    }
  }
}

export { CepConsultService };
