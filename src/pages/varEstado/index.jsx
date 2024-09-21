import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';

import { calcularTotalIngresso } from '../../services/ingresso'


export default function VarEstado() {


    const [contador, setContador] = useState(0);
    const [enviar, setEnviar] = useState("oie");
    const [enviar1, setEnviar1] = useState("todo bien?");
    const [marcoOpcaoS4, setMarcoOpcaoS4] = useState(false);
    const [tituloS5, setTituloS5] = useState("oie");
    const [descricaoS5, setDescricaoS5] = useState("oie");
    const [tituloCalculadora, setTituloCalculadora] = useState(0);



    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [resp, setResp] = useState(0);


    const [qtd, setQtd] = useState();
    const [meiaEntrada, setMeiaEntrada] = useState(0);
    const [cupom, setCupom] = useState('');
    const [total, setTotal] = useState(0);


    const [digitarMeta, setDigitarMeta] = useState("");
    const [mostrarMeta, setMostrarMeta] = useState([]);
    const [editanto, setEditando] = useState(-1);


    const [plano, setPlano] = useState("");
    const [situacao, setSituacao] = useState("");
    const [cor, setCor] = useState("");
    const [listaPlanos, setListaPlanos] = useState([]);
    const [editarPlanos, setEditarPlanos] = useState(-1);





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


    console.log(listaPlanos)



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





    function calcular() {
        let total = calcularTotalIngresso(qtd, meiaEntrada, cupom);
        setTotal(total);
    }
    function aumentar() {

        setContador(contador + 1);//Deixa mais calro que estamos criando un novo valor aumentadno 
        alert(contador)
    }
    function diminuir() {
        setContador(contador - 1); //Deixa mais claro que estamos criando un novo valor  disminuindo   
    }

    function alterarTituloS5() {
        setTituloS5(descricaoS5);
    }

    function alterarCalculadora(e) {
        let novoValor = e.target.value;
        if (tituloCalculadora === 0) {
            setTituloCalculadora(novoValor)
        } else {
            setTituloCalculadora(tituloCalculadora + novoValor);
        }

    }

    function valor1(e) {
        let novoValor = e.target.value;
        setNum1(novoValor);
    }

    function valor2(e) {
        let novoValor = e.target.value;
        setNum2(novoValor);
    }

    function somar() {
        let resposta = Number(num1) + Number(num2);
        setResp(resposta);
    }

    return (
        <div className='pagina-var-estado pagina'>

            <Cabecalho titulo="ReactJs | Variáveis de Estado" />

            <div className='secao planos'>
                <h1>Meus planos atuais</h1>
                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />
                    <button onClick={adicionarPlano}>Adicionar Plano</button>
                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <div className='plano' key={pos}>
                            <div className='cor' style={{ backgroundColor: item.tema }}>&nbsp;</div>
                            <div >
                                <h1> {item.nome}</h1>
                                <h2> {item.estatus}</h2>
                            </div>
                            <div>
                                <i className='fa fa-pen-to-square' onClick={() => alterarPlano(pos)}></i> &nbsp;
                                <i className='fa fa-trash-can' onClick={() => removerPlano(pos)}></i> &nbsp;
                            </div>
                        </div>
                    )}
                </div>
            </div>



            <div className='secao metas'>
                <h1>Meta para os próximo 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' value={digitarMeta} onChange={e => setDigitarMeta(e.target.value)} onKeyUp={teclasApertada} />
                    <button onClick={adicionarMeta}>Adicionar</button>
                </div>

                <ul>
                    {mostrarMeta.map((item, pos) =>
                        <li key={pos}>
                            <i className='fa fa-pen-to-square' onClick={() => alterarMeta(pos)}></i> &nbsp;
                            <i className='fa fa-trash-can' onClick={() => remover(pos)}></i> &nbsp;
                            {item}
                        </li>
                    )}

                </ul>
            </div>

            <div className='secao ingressos'>
                <h1>Venda de Ingressos</h1>
                <div className='entrada'>
                    <div>
                        <label> Quantidade:</label>
                        <input value={qtd} onChange={e => setQtd(e.target.value)} type="text" placeholder='0' />
                    </div>

                    <div>
                        <label > Meia Entrada:</label>
                        <input checked={meiaEntrada} onChange={e => setMeiaEntrada(e.target.checked)} type="checkbox" />
                    </div>
                    <div>
                        <label> Cupom:</label>
                        <input value={cupom} onChange={e => setCupom(e.target.value)} type="text" />
                    </div>
                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcular}>Calcular</button>
                    </div>
                    <hr />
                    <div>
                        O total é R${total}
                    </div>

                </div>
            </div>

            <div className='secao calculadora'>
                <div className='entrada'>
                    <input placeholder='0' type="text" onChange={valor1} value={num1} /> +
                    <input placeholder='0' type="text" onChange={valor2} value={num2} />
                    <div>=</div>
                    <div className='res'>{resp}</div>
                </div>
                <button onClick={somar}>Somar</button>

            </div>


            <div className='secao'>
                <h1>Calculadora</h1>
                <h1> {tituloCalculadora} </h1>
                <button>AC</button>
                <button>^</button>
                <button>%</button>
                <button>/</button><br />
                <button onClick={alterarCalculadora} value={7}>7</button>
                <button onClick={alterarCalculadora} value={8}>8</button>
                <button onClick={alterarCalculadora} value={9}>9</button>
                <button>x</button><br />
                <button onClick={alterarCalculadora} value={4}>4</button>
                <button onClick={alterarCalculadora} value={5}>5</button>
                <button onClick={alterarCalculadora} value={6}>6</button>
                <button>-</button><br />
                <button onClick={alterarCalculadora} value={1}>1</button>
                <button onClick={alterarCalculadora} value={2}>2</button>
                <button onClick={alterarCalculadora} value={3}>3</button>
                <button>+</button><br />
                <button onClick={alterarCalculadora} value={0}>0</button>
                <button>,</button>
                <button>=</button>





            </div>

            <div className='secao'>
                <h1>Contador</h1>
                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                    {contador}
                    <button onClick={diminuir}> - </button>
                </div>


            </div>

            <div className='secao'>
                <h1>{enviar} </h1> <br />
                <input type="text" value={enviar} onChange={e => setEnviar(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{enviar1} </h1> <br />
                <select onChange={e => setEnviar1(e.target.value)}>
                    <option>Selecione</option>
                    <option>React</option>
                    <option>Swift</option>
                    <option>Node</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é moleza? {marcoOpcaoS4 ? 'Sim' : 'Não'} </h1> <br />
                <input type="checkbox" checked={marcoOpcaoS4} onChange={e => setMarcoOpcaoS4(e.target.checked)} />Programar é moleza?
            </div>

            <div className='secao'>
                <h1>{tituloS5} </h1> <br />
                <input type="text" value={descricaoS5} onChange={e => setDescricaoS5(e.target.value)} /><br />
                <button onClick={alterarTituloS5}>Clique em mim</button>
            </div>

        </div>
    )
}