import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CatalogoFilmes from '../../components/catalogoFilmes';


import { useState } from 'react';

export default function RenderizacaoCondicional() {

    const [exibirBiscoito, setExibirBiscoito] = useState(false);


    const [nomeFilme, setNomeFilme] = useState("");
    const [classificacaoFilme, setClassificacaoFilme] = useState("");
    const [url, setUrl] = useState("");
    const [estreiaFilme, setEstreiaFilme] = useState("");
    const [destaqueFilme, setDestaqueFilme] = useState(false);
    const [listarFilmes, setListarFilmes] = useState([]);



    function adicionarFilme() {

        if (nomeFilme == '' || classificacaoFilme == '' || url == '') {
            alert("Preencha os campos para continuar");
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: url,
            estreia: estreiaFilme,
            destaque: destaqueFilme
        }

        setListarFilmes([...listarFilmes, novoFilme]);
        setNomeFilme('');
        setClassificacaoFilme('');
        setUrl('');
    }


    function mostrarMSG() {
        setExibirBiscoito(!exibirBiscoito);
    }



    return (
        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo='ReacJs | Renderização Condicional' />


            <div className='secao filmes'>
                <div className='entradas'>
                    <h1>Catálogo de Filmes</h1>
                    <input type="text" placeholder='Nome do Filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da Capa' value={url} onChange={e => setUrl(e.target.value)} />
                    <input type="text" placeholder='Estreia do Filme' value={estreiaFilme} onChange={e => setEstreiaFilme(e.target.value)} />
                    <div>
                        <input type="checkbox" value={destaqueFilme} onChange={e => setDestaqueFilme(e.target.checked)} />
                         <label>&nbsp; Destaque</label>
                    </div>


                    <button onClick={adicionarFilme}>Adicionar</button>

                    <div className='lista'>
                        {listarFilmes.map(item =>
                            <CatalogoFilmes item={item} />
                        )}

                    </div>
                </div>


            </div>

            <div className='secao'>
                <h1>Biscoito da Sorte</h1>

                <button onClick={mostrarMSG}>{exibirBiscoito == true ? "Fechar" : "Abrir"}</button>

                {exibirBiscoito == true &&
                    <p className='msg-biscoite' >
                        Balancing to wanna do, with what you need to do.
                    </p>
                }
            </div>
        </div>

    )
}