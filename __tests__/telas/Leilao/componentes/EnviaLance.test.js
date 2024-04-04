import React from 'react';
import { render } from '@testing-library/react';
import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance';
import { ENVIADO } from '../../../../src/negocio/constantes/estadosLance';

describe('telas/Leilao/componentes/EnviaLance', () => {
    it('deve enviar o lance quando o botão for pressionado', () => {
        const enviaLance = jest.fn(() => new Promise( resolve => resolve(ENVIADO)))

        const {toJSON} = render(
            <EnviaLance
                enviaLance={enviaLance}
                cor='blue'
            />
        );

        // console.log(toJSON());
    });
});