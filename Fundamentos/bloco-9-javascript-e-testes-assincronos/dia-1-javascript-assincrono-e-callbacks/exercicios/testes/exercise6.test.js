// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('../exercise6.js');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, message) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'blastoise', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const mensagem = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'

    function callback (error, message) {
       expect(message).toBe(mensagem)
       done()
    }
    function poke (pokemon) { return  pokemon.name === 'Charmander'}

    getPokemonDetails(poke, callback)
  });
});