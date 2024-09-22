import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import './index.scss';
import axios from 'axios';
import CartaoOmdb from '../../components/cartaoOmdb';

export default function ChamadaApi() {

    const [cep, setCEP] = useState('');
    const [infoLogradouro, setInfoLogradouro] = useState('');

    const [filmesBusca, setFilmesBusca] = useState('');
    const [listaFilmes, setListaFilmes] = useState([]);
    const [imgFilme, setImgFilme] = useState([]);


    async function buscarCEP() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/';
        let res = await axios.get(url);
        let dados = res.data;

        let msg = dados.logradouro + ',' + dados.bairro + ',' + dados.localidade + '/' + dados.uf;
        setInfoLogradouro(msg);
    }



    async function buscarFilmes() {


        let url = 'http://www.omdbapi.com/?&apikey=d43a5114&s=' + filmesBusca;
        let res = await axios.get(url);
        let dados = res.data;

        if (dados.Response === 'False') {
            alert('Nenhum dado encontrado');
            return;
        }

        let filmesEncontrados = dados.Search;
        setListaFilmes(filmesEncontrados);
    }

    return (
        <div className='pagina-chamada-api pagina'>
            <Cabecalho titulo='ReacJs | Chamada API' />


            <div className='secao omdb'>
                <h1>API omdb</h1>
                <div className='entradas'>
                    <input type="text" placeholder='Nome do Filme' value={filmesBusca} onChange={e => setFilmesBusca(e.target.value)} />
                    <button onClick={buscarFilmes}>Buscar</button>
                </div>

                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoOmdb item={item}/>
                    )}
                </div>



                {/* <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFilmes.map(item =>
                            <tr>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
            </div>

            <div className='secao correio'>
                <h1>Api do Correio</h1>

                <div>
                    <input type="text" placeholder='Digite o CEP' value={cep} onChange={e => setCEP(e.target.value)} />
                    <button onClick={buscarCEP}>Buscar</button>
                    <p>{infoLogradouro}</p>
                </div>
            </div>

        </div>
    )
}