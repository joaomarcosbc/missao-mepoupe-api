import { CalculateMeanService } from "./CalculateMeanService";

const createSut = () => {
  return new CalculateMeanService();
};

describe("CalculateMean Service Test", () => {
  it("should return rounded mean", () => {
    const sut = createSut();

    const meanRequest = {
      firstNumber: 3,
      secondNumber: 50.4851,
    };

    const roundedMean = sut.execute(meanRequest);

    expect(roundedMean).toBe(26.74);
  });

  it("should return rounded mean", () => {
    const sut = createSut();

    const meanRequest = {
      firstNumber: 3,
      secondNumber: 50.4951,
    };

    const roundedMean = sut.execute(meanRequest);

    expect(roundedMean).toBe(26.75);
  });
});
