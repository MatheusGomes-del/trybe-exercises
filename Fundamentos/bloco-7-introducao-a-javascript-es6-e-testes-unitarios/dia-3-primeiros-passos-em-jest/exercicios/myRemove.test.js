const myRemove = require("./myRemove");

describe("exercise 2", () => {
  it("Deve retornar um array com menos um item", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Não deve retornar o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("Deve retornar o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
