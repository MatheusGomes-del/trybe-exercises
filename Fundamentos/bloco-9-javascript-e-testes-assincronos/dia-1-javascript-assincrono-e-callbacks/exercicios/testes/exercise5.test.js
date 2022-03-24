const uppercase = require('../exercise5')

describe('Verifica funcionamento da função uppercase', () => {

  it('Espera que toda a palavra fica com letra maiúscula', (done) => {
      const nome = 'MATHEUS'
      let callback = (str) => {
         try{
             expect(str).toBe(nome)
             done()
            } catch(erro) {
                done(erro)
            }
      }
      expect(uppercase('matheus',callback))
  })
})


/* uppercase('math', (str) => {
    try{
        expect(str).toBe(nome)
        done()
    } catch (error) {
        done(error)
} */