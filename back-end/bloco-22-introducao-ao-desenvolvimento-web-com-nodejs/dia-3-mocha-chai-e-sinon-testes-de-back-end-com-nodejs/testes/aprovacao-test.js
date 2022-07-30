const { expect } = require('chai')
const { verificaAprovacao, escreveArquivo } = require('../aprovacao')
const fs = require('fs');
const sinon = require('sinon');

describe('teste de aprovação', () => {
    it('testa se retorna positivo', () => {
       const positivo = verificaAprovacao(5)

       expect(positivo).equal('positivo')
    });

    it('testa se retorna negativo', () => {
       
       const negativo = verificaAprovacao(-1)

       expect(negativo).equals('negativo')
    })

    it('testa se retorna neutro', () => {
       const neutro = verificaAprovacao(0)  

       expect(neutro).equals('neutro')
    })

    it('testa se o valor é numérico', () => {
       const erroNumerico = verificaAprovacao('4')

       expect(erroNumerico).equals('valor deve ser numérico')
    })
})

describe('teste com sinon', () => {

    describe('teste simulado' , () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync')
            sinon.stub(fs, 'readFileSync').returns('testando sinon')
        })

        after(() => {
            fs.writeFileSync.restore();
            fs.readFileSync.restore();
        })


        it('testa o conteudo do arquivo', () => {
           const arquivo = escreveArquivo('Teste.txt', 'testando');

           expect(arquivo).equals('testando sinon')
        })
    });


    describe('testando error' , () => {

        before(() => {
            sinon.stub(fs, 'writeFileSync');
            sinon.stub(fs, 'readFileSync').throws(new Error('errou feio, errou rude!'));
        })

        after(() => {
            fs.writeFileSync.restore();
            fs.readFileSync.restore();
        })

        describe('', () => {
            it('testa entrada no catch', () => {
               const file = escreveArquivo('Teste.txt', 'testando')
    
               expect(file).to.be.equals('errou feio, errou rude!')
            })
        })
    })
})