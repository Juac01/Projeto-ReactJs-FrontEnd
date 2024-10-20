
import axios from 'axios'
import Cabecalho from '../../../components/cabecalho';
import { useParams } from 'react-router-dom';


import { useState, useEffect } from 'react';
import './index.scss';



export default function Inserir() {

    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [anoLetivo, setAnoLetivo] = useState('');
    const [qtdCapacidade, setQtdCapacidade] = useState('');
    const [ativo, setAtivo] = useState(false);
    const [inclusao, setInclusao] = useState('')

    const [lista, setLista] = useState([]);
    const [editar, setEditar] = useState(-1);

    const { id } = useParams();
    // funcao que executa assim que a tela carrega
    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');
        let resp = await axios.get('http://localhost:3010/tabelaTurma/' + id, {
            headers: { 'x-access-token': token }
        });

        setTurma(resp.data.turma);
        setCurso(resp.data.curso);
        setAnoLetivo(resp.data.anoLetivo);
        setQtdCapacidade(resp.data.qtdCapacidade);
        setAtivo(resp.data.ativo);
        setInclusao(resp.data.inclusao);
    }



    async function salvar() {
        // Validação dos campos obrigatórios, exceto a data
        if (!turma || !curso || !anoLetivo || !qtdCapacidade) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        let body = {
            turma,
            curso,
            anoLetivo,
            qtdCapacidade,
            ativo,
            inclusao,
        };

        let token = localStorage.getItem('TOKEN');
        try {
            if (editar === -1) {
                // Adicionar novo item (POST)
                let resp = await axios.post('http://localhost:3010/tabelaTurma', body, { headers: { 'x-access-token': token } });
                setLista([...lista, { ...body, id: resp.data.novoId }]);
                alert('Novo registro inserido: ' + resp.data.novoId);
            } else {
                // Atualizar item existente (PUT)
                const id = lista[editar].id;
                await axios.put(`http://localhost:3010/tabelaTurma/${id}`, body, { headers: { 'x-access-token': token } });
                const planosAtualizados = lista.map((item, index) =>
                    index === editar ? { ...body, id: item.id } : item
                );
                setLista(planosAtualizados);
                alert('Registro atualizado com sucesso!');
                setEditar(-1);
            }

            setTurma('');
            setCurso('');
            setAnoLetivo('');
            setQtdCapacidade('');
            setAtivo(false);
            setInclusao('');
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert('Erro ao salvar o registro. Tente novamente.');
        }
    }






    return (
        <div className='pagina-tabela-turma pagina'>
            <Cabecalho titulo='Cadastrar Turmas 📒' />


            <div className='form'>
                <div>
                    <label>Turma</label>
                    <input type='text' value={turma} onChange={e => setTurma(e.target.value)} />
                </div>
                <div>
                    <label>Curso</label>
                    <input type='text' value={curso} onChange={e => setCurso(e.target.value)} />
                </div>
                <div>
                    <label>Ano Letivo</label>
                    <input type='text' value={anoLetivo} onChange={e => setAnoLetivo(e.target.value)} />
                </div>
                <div>
                    <label>Capacidade</label>
                    <input placeholder='0' type='text' value={qtdCapacidade} onChange={e => setQtdCapacidade(e.target.value)} />
                </div>
                <div>
                    <label>Ativo</label>
                    <input type='checkbox' checked={ativo} onChange={e => setAtivo(e.target.checked)} />
                </div>
                <div>
                    <label>Inclusão</label>
                    <input type='date' value={inclusao} onChange={e => setInclusao(e.target.value)} />
                </div>
                <div>
                    <button onClick={salvar}> {id == undefined ? 'Salvar' : 'Alterar'}</button>
                </div>
            </div>



        </div>
    )
}




