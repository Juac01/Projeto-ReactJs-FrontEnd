
import axios from 'axios'
import Cabecalho from '../../../components/cabecalho';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import './index.scss';



export default function ListarTurmas() {

    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [anoLetivo, setAnoLetivo] = useState('');
    const [qtdCapacidade, setQtdCapacidade] = useState(0);
    const [ativo, setAtivo] = useState(false);
    const [inclusao, setInclusao] = useState('')

    const [lista, setLista] = useState([]);
    const [editar, setEditar] = useState(-1);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('TOKEN') == undefined) {
            navigate('/tabelaTurma/login');
        }

    }, []);


    async function remover(pos) {
        const id = lista[pos].id;

        try {
            // Chamada ao back-end para deletar o item
            await axios.delete(`http://localhost:3010/tabelaTurma/${id}`);
            alert('Item removido com sucesso!');

            // Remove o item do front-end
            lista.splice(pos, 1);
            setLista([...lista]);
        } catch (error) {
            console.error("Erro ao remover:", error);
            alert('Erro ao remover item');
        }
    }

    async function buscar() {
        let token = localStorage.getItem('TOKEN');
        let resp = await axios.get('http://localhost:3010/tabelaTurma', {
            headers: { 'x-access-token': token }
        });
        setLista(resp.data);
    }
    
    async function alterar(pos) {
        // Atualizar plano atual para o estado de edição
        setTurma(lista[pos].turma);
        setCurso(lista[pos].curso);
        setAnoLetivo(lista[pos].anoLetivo);
        setQtdCapacidade(lista[pos].qtdCapacidade);
        setAtivo(lista[pos].ativo);
        setInclusao(lista[pos].inclusao);
        setEditar(pos);

    
    }
    
    async function salvar() {
        let body = {
            'turma': turma,
            'curso': curso,
            'anoLetivo': anoLetivo,
            'qtdCapacidade': qtdCapacidade,
            'ativo': ativo,
            'inclusao': inclusao
        };
    
        if (editar === -1) {
            // Adicionar novo item (POST)
            let resp = await axios.post('http://localhost:3010/tabelaTurma', body);
            setLista([...lista, { ...body, id: resp.data.novoId }]); // Adiciona o item com o novo ID
            alert('Novo registro inserido: ' + resp.data.novoId);
        } else {
            // Atualizar item existente (PUT)
            const id = lista[editar].id; // Pegue o ID do item que está sendo editado
            await axios.put(`http://localhost:3010/tabelaTurma/${id}`, body); // Envia o PUT com o ID correto
            const planosAtualizados = lista.map((item, index) =>
                index === editar ? { ...body, id: item.id } : item // Atualiza o item na lista local
            );
            setLista(planosAtualizados); // Atualiza a lista no estado
            alert('Registro atualizado com sucesso!');
            setEditar(-1); // Resetar o estado de edição após salvar
        }
    
        // Limpar campos após salvar
        setTurma('');
        setCurso('');
        setAnoLetivo('');
        setQtdCapacidade('');
        setAtivo('');
        setInclusao('');
    }
    


   




    return (
        <div className='pagina-tabela-turma2 pagina'>
          
            <Cabecalho titulo='Buscar Turmas 👀' />

            <div className='busca'>
                <div>
                    <button onClick={buscar}> Buscar Turmas </button>

                </div>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Turma</th>
                            <th>Curso</th>
                            <th>Ano Letivo</th>
                            <th>Capacidade</th>
                            <th>Ativo</th>
                            <th>Inclusão</th>
                            <th>Alterar</th>
                            <th>Remover</th>
                        </tr>

                    </thead>

                    <tbody>

                        {lista.map((item, pos) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.turma}</td>
                                <td>{item.curso}</td>
                                <td>{item.anoLetivo}</td>
                                <td>{item.qtdCapacidade}</td>
                                <td>{item.ativo ? 'Sim' : 'Não'}</td>
                                <td>{new Date(item.inclusao).toLocaleDateString()}</td>
                                <td>
                                    <div className="icon-container">
                                        <i className='fa fa-pen-to-square'  onClick={() => navigate('/tabelaTurma/Inserir') + alterar(pos)}></i>
                                    </div>
                                </td>
                                <td>
                                    <div className="icon-container">
                                        <i className='fa fa-trash-can' onClick={() => remover(pos)}></i>
                                    </div>
                                </td>

                            </tr>

                        )}

                    </tbody>
                </table>

            </div>

        </div>
    )
}




