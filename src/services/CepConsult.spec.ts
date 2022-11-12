import { HttpException } from "../utils/HttpException";
import { CepConsultService } from "./CepConsultService";

const createSut = () => {
  return new CepConsultService();
};

describe("CepConsult Service Test", () => {
  it("should return no 'bairro'", async () => {
    const sut = createSut();

    const cepRequest = {
      cep: "18150000",
    };

    const adress = await sut.execute(cepRequest);
    expect(adress).toHaveProperty(
      "message",
      "O CEP informado não possui Bairro!"
    );
  });

  it("consulting cep should return error looking for cep", async () => {
    const sut = createSut();

    const cepRequest = {
      cep: "11111111",
    };

    const adress = () => sut.execute(cepRequest);

    await expect(adress).rejects.toThrow(
      "A API viaCEP não identificou o CEP :("
    );
  });

  it("consulting cep should return error (viaCEP bug error with status 200)", async () => {
    const sut = createSut();

    const cepRequest = {
      cep: "49035197",
    };

    const adress = () => sut.execute(cepRequest);

    await expect(adress).rejects.toThrow(
      "A API viaCEP não identificou o CEP :("
    );
  });
});
