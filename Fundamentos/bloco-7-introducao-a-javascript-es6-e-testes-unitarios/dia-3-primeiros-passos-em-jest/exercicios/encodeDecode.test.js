const {encode, decode} = require('./encodeDecode')

describe('exercise 4' , () => {

   it('Testa se a função existe', () => {
       expect(encode).toBeDefined()
   })
   it('Deve retornar encode e decode com typeof function', () => {
       expect(typeof encode).toEqual('function')
   })
   it('Deve retornar encode e decode com typeof function', () => {
    expect(typeof decode).toEqual('function')
   })
   it('O retorno de a deve ser 1', () => {
       expect(encode('alaska')).toBe('1l1sk1')
   })
   it('O retorno de e deve ser 2', () => {
    expect(encode('leem')).toBe('l22m')
   })
   it('O retorno de i deve ser 3', () => {
    expect(encode('vixx')).toBe('v3xx')
   })
   it('O retorno de o deve ser 4', () => {
    expect(encode('olho')).toBe('4lh4')
   })
   it('O retorno de u deve ser 5', () => {
    expect(encode('cru')).toBe('cr5')
   })
   it('Deve retornar onde tem numero 1 colocar vogal a', () => {
       expect(decode('1l1sk1')).toBe('alaska')
   })
   it('Deve retornar onde tem numero 2 colocar vogal e', () => {
    expect(decode('l22m')).toBe('leem')
   })
   it('Deve retornar onde tem numero 3 colocar vogal i', () => {
    expect(decode('v3xx')).toBe('vixx')
   })
   it('Deve retornar onde tem numero 4 colocar vogal o', () => {
    expect(decode('4lh4')).toBe('olho') 
   })
   it('Deve retornar onde tem numero 5 colocar vogal u', () => {
    expect(decode('cr5')).toBe('cru')
   })
   it('Deve retornar o mesmo número de caracteres que a string passada como parâmetro', () => {
       expect(encode('canada').length).toBe(6)
   })
})