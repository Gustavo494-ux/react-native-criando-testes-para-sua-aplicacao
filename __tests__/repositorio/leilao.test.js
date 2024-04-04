import { obtemLeiloes } from "../../src/repositorio/leilao"

jest.mock('../../src/servicos/apiLeiloes')

describe('repositorio/leilao',() =>{
    describe('obtemLeiloes', () => {
      test('deve retornar uma lista de leilões',async () => { 
        const leiloes = await obtemLeiloes();
        console.log(leiloes)
      })  
    })
})