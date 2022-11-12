import validateCepConsultRequest from "./validateCepConsultRequest";

describe("Validate CepConsultRequest Test", () => {
  it("should return only numbers and dash error", () => {
    const cep = "49035ste";

    const adress = () => validateCepConsultRequest(cep);

    expect(adress).toThrow("O CEP só deve conter traço e números!");
  });

  it("should return dash at wrong place error", () => {
    const cep = "490-35190";

    const adress = () => validateCepConsultRequest(cep);

    expect(adress).toThrow("O formato do CEP informado é inválido :(");
  });

  it("should return dash at wrong place error", () => {
    const cep = "490390";

    const adress = () => validateCepConsultRequest(cep);

    expect(adress).toThrow("O formato do CEP informado é inválido :(");
  });
});
