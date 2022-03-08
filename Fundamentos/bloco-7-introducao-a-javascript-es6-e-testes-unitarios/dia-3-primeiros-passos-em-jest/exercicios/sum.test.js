const sum = require("./sum");

describe("exercise 1", () => {
  it("Deve retornar 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Deve retornar 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Deve retornar erro se algum parâmetro for string", () => {
    expect(() => sum(4, "5")).toThrowError();
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});
