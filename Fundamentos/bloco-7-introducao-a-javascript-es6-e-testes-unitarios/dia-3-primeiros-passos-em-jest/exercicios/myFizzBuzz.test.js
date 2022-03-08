const myFizzBuzz = require("./myFizzBuzz");

describe("Exercise 3" , () => {
    it("Deve retornar fizzBuzz", () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
      });
      
    it("Deve retornar fizz", () => {
       expect(myFizzBuzz(9)).toBe("fizz");
    });
      
    it("Deve retornar buzz", () => {
        expect(myFizzBuzz(5)).toBe('buzz');
      });
      
    it('Não deve retornar o valor esperado', () => {
        expect(myFizzBuzz(7)).toBe(7)
      }) 
      
    it("Deve retornar false", () => {
        expect(myFizzBuzz('5')).toBe(false)
    })
})
