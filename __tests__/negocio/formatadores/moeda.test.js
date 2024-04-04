import { formataBrasileiroParaDecimal, formataDecimalParaReal } from "../../../src/negocio/formatadores/moeda";

describe('negocio/formatadores/moeda', () =>{
    describe('formataBrasileiroParaDecimal', ()=> {
        //Técnica de Tabela de Decisão
        const cenarios = [
            {entrada: '8,59', saidaEsperada: 8.59},
            {entrada: '7,49', saidaEsperada: 7.49},
            {entrada: '14,43', saidaEsperada: 14.43}
        ]
        cenarios.forEach(({entrada, saidaEsperada}) => {                
            it("deve retornar "+saidaEsperada.toString()+"quando a entrada for "+entrada.toString(), () => {
                const resultado = formataBrasileiroParaDecimal(entrada)
                expect(resultado).toBe(saidaEsperada)
            });
        })
    });

    describe('formataDecimalParaReal', ()=> {
        //Técnica de Tabela de Decisão usando regex na validação
        const cenarios = [
            {entrada: 8.59, saidaEsperada: '8,59'},
            {entrada: 7.49, saidaEsperada: '7,49'},
            {entrada: 14.43, saidaEsperada: '14,43'}
        ]
        cenarios.forEach(({entrada, saidaEsperada}) => {                
            it("deve retornar "+saidaEsperada.toString()+" quando a entrada for "+entrada.toString(), () => {
                const resultado = formataDecimalParaReal(entrada)
                expect(resultado).toMatch(new RegExp(`R\\$\\s${saidaEsperada}`));
            });
        })
    });


})