import { CalculateMeanService } from "./CalculateMeanService";

const createSut = () => {
  return new CalculateMeanService();
};

describe("CalculateMean Service Test", () => {
  it("should return rounded mean", () => {
    const sut = createSut();

    const firstNumber = 3;
    const secondNumber = 50.4851;

    expect(
      sut.execute({
        firstNumber,
        secondNumber,
      })
    ).toBe(26.74);
  });

  it("should return rounded mean", () => {
    const sut = createSut();

    const firstNumber = 50.4951;
    const secondNumber = 3;

    expect(
      sut.execute({
        firstNumber,
        secondNumber,
      })
    ).toBe(26.75);
  });
});
