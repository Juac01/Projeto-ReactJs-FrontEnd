import Cabecalho from '../../components/cabecalho';
import './index.scss';

import { tratarNumero } from '../../utils/conversao';
import { useEffect, useState } from 'react';

export default function Efeitos() {

    const [mencao, setMencao] = useState('');
    const [sitMencao, setSitMencao] = useState('-');

    const [nota1, setNota1] = useState('0');
    const [nota2, setNota2] = useState('0');
    const [nota3, setNota3] = useState('0');
    const [media, setMedia] = useState(0);
    const [sitAluno, setSitAluno] = useState('-');



    useEffect(() => {
        avaliarMencao()
    }, [mencao])

    useEffect(() => {
        avaliarNotas()
    }, [nota1, nota2, nota3])


    useEffect(() => {
        avaliarSituacao()
    }, [media])


    function avaliarSituacao() {
        let s = '';
        if (media >= 6) {
            s = 'Aprovado';
        } else {
            s = 'DP';
        }
        setSitAluno(s);
    }

    function avaliarNotas() {
        let m = (tratarNumero(nota1) + tratarNumero(nota2) + tratarNumero(nota3)) / 3;
        setMedia(m);
    }

    function avaliarMencao() {
        if (mencao === 'P') {
            setSitMencao('Plenamenta Satisfatório');
        } else if (mencao === 'S') {
            setSitMencao('Satisfatório');
        } else if (mencao === 'NS') {
            setSitMencao('Não Satisfatório');
        } else {
            setSitMencao('Invalido');
        }
    }

    return (
        <div className='pagina-efeitos pagina'>
            <Cabecalho titulo='ReactJs | Efeitos' />

            <div className='secao'>
                <h1>Notas Aluno</h1>
                <div className='notas-aluno'>
                    <div className='entradas'>
                        <input type="text" value={nota1} onChange={e => setNota1(e.target.value)} />
                        <input type="text" value={nota2} onChange={e => setNota2(e.target.value)} />
                        <input type="text" value={nota3} onChange={e => setNota3(e.target.value)} />
                    </div>

                    <div className='media'>
                        <label>Média:</label>
                        <div>{media.toFixed(1)}</div>
                    </div>
                    <div className='media-situacao'>
                        <label>Sit.:</label>
                        <div>{sitAluno}</div>
                    </div>
                </div>
            </div>

            <div className='secao'>
                <h1>Situação Aluno</h1>
                <div className='sit-aluno'>
                    <div>{sitMencao}</div>
                    <div>
                        <label> Menção: </label>
                        <input type="text" value={mencao} onChange={e => setMencao(e.target.value)} />
                    </div>

                </div>
            </div>

        </div>
    )
}