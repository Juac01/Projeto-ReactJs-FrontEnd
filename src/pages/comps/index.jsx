import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import ItemMetas from '../../components/itemMeta';
import ItemPlano from '../../components/itemPlano';
import CatalogoFilmes from '../../components/catalogoFilmes';

export default function Comps() {

    const [digitarMeta, setDigitarMeta] = useState("");
    const [mostrarMeta, setMostrarMeta] = useState([]);
    const [editanto, setEditando] = useState(-1);

    const [plano, setPlano] = useState("");
    const [situacao, setSituacao] = useState("");
    const [cor, setCor] = useState("");
    const [listaPlanos, setListaPlanos] = useState([]);
    const [editarPlanos, setEditarPlanos] = useState(-1);

    const [nomeFilme, setNomeFilme] = useState("");
    const [classificacaoFilme, setClassificacaoFilme] = useState("");
    const [url, setUrl] = useState("");
    const [listarFilmes, setListarFilmes] = useState([]);


    function adicionarFilme() {

        if(nomeFilme === '' || classificacaoFilme === '' || url === ''){
            alert("Preencha os campos para continuar");
            return;
        }
        
        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: url
        }

        setListarFilmes([...listarFilmes, novoFilme]);
        setNomeFilme('');
        setClassificacaoFilme('');
        setUrl('');
    }



    function remover(pos) {
        mostrarMeta.splice(pos, 1);
        setMostrarMeta([...mostrarMeta]);
    }

    function alterarMeta(pos) {
        setDigitarMeta(mostrarMeta[pos]);
        setEditando(pos);
    }

    function adicionarMeta() {
        if (digitarMeta !== '') {
            if (editanto === -1) {
                //mostrarMeta.push(novaMeta); Jeito JavaScriptiano
                setMostrarMeta([...mostrarMeta, digitarMeta]); //Jeito Reacttiano
                setDigitarMeta('');
            }
            else {
                mostrarMeta[editanto] = digitarMeta;
                setMostrarMeta([...mostrarMeta]);
                setDigitarMeta('');
                setEditando(-1);
            }

        }

    }




    function teclasApertada(e) {
        if (e.key === 'Enter') {
            adicionarMeta();
        }
    }

    function adicionarPlano() {
        if (plano !== '') {
            const novoPlano = {
                nome: plano,
                estatus: situacao,
                tema: cor
            };

            if (editarPlanos === -1) {
                // Adicionar novo plano
                setListaPlanos([...listaPlanos, novoPlano]);
            } else {
                // Atualizar plano existente
                const planosAtualizados = listaPlanos.map((item, index) =>
                    index === editarPlanos ? novoPlano : item
                );
                setListaPlanos(planosAtualizados);
                setEditarPlanos(-1); // Resetar estado de edição
            }

            // Limpar campos
            setPlano('');
            setSituacao('');
            setCor('');
        }
    }
    function removerPlano(pos) {
        listaPlanos.splice(pos, 1);
        setListaPlanos([...listaPlanos]);
    }

    function alterarPlano(pos) {
        // Atualizar plano atual para o estado de edição
        setPlano(listaPlanos[pos].nome);
        setSituacao(listaPlanos[pos].estatus);
        setCor(listaPlanos[pos].tema);
        setEditarPlanos(pos);
    }




    return (
        <div className='pagina-comps pagina '>
            <Cabecalho titulo="ReactJs | Componentes" />


            <div className='secao filmes'>
                <div className='entradas'>
                    <h1>Catálogo de Filmes</h1>
                    <input type="text" placeholder='Nome do Filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da Capa' value={url} onChange={e => setUrl(e.target.value)} />
                    <button onClick={adicionarFilme}>Adicionar</button>

                    <div className='lista'>
                        {listarFilmes.map(item =>
                            <CatalogoFilmes item={item} />
                        )}

                    </div>
                </div>


            </div>

            <div className='secao'>
                <h1>Transformando o Contador em Componente</h1>
                <Contador titulo="Passos" />
                <Contador titulo="Erros" />

            </div>

            <div className='secao metas'>
                <h1>Transformando os Items da Lista de Meta em Componentes</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' value={digitarMeta} onChange={e => setDigitarMeta(e.target.value)} onKeyUp={teclasApertada} />
                    <button onClick={adicionarMeta}>Adicionar</button>
                </div>

                <ul>


                    <ItemMetas
                        item="Hola" //Quando o item for uma string 
                        pos={0}
                        alterarMeta={alterarMeta}
                        remover={remover}

                    />

                    {mostrarMeta.map((item, pos) =>
                        <ItemMetas
                            item={item}
                            pos={pos}
                            alterarMeta={alterarMeta}
                            remover={remover}
                        />
                    )}

                </ul>
            </div>

            <div className='secao planos'>
                <h1>Meus planos atuais</h1>
                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />
                    <button onClick={adicionarPlano}>Adicionar Plano</button>
                </div>

                <div className='lista'>

                    <ItemPlano
                        item={{ //Quando o item for um objeto 
                            nome: "titulo",
                            estatus: "situacao",
                            tema: "red"
                        }}
                    />
                    {listaPlanos.map((item, pos) =>
                        <ItemPlano
                            item={item}
                            pos={pos}
                            alterarPlano={alterarPlano}
                            removerPlano={removerPlano}
                        />
                    )}
                </div>
            </div>





        </div>
    )
}