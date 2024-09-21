import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Eventos() {

    function clicou() {
        alert("O usuario clicou o button")
    }
    function mexeuMouse() {
        alert("Opa voce pasou o Mause por aqui!")
    }

    function alterouValor(e) {
        let novoValor = e.target.value; //String
        alert("O usuario acava de alterar o valor por " + novoValor)
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked; //Boolean
        alert("O usuario acava de alterar o valor por " + novoValor)
    }


    return (
        <div className='pagina-eventos pagina'>
            <Cabecalho titulo="ReactJs | Eventos"/>

            <section className='secao'>
                <h1 onMouseMove={mexeuMouse}>Entendendo Eventos</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur tempore ad aliquid tempora ducimus vel ratione suscipit. Quis eveniet non blanditiis optio facere libero provident distinctio accusamus? Aperiam, voluptates.</p>

                <input onChange={alterouValor} type="text" name="" id="" placeholder='Digite aqui' />

                <textarea onChange={alterouValor} placeholder='Digite Aqui'></textarea>

                <select onChange={alterouValor}>
                    <option >Selecione</option>
                    <option >Item A</option>
                    <option >Item B</option>
                </select>

                <div className='grupo'>
                    <input onChange={alterouCheck} type="checkbox" />Opcao 1
                    <input onChange={alterouCheck} type="checkbox" />Opcao 2
                </div>
                <div className='grupo'>
                    <input type="radio" onChange={alterouCheck} name='gpo' />Opcao 1
                    <input type="radio" onChange={alterouCheck} name='gpo' />Opcao 2
                </div>

                <button onClick={clicou}>Clique aqui</button>

            </section>
        </div>
    )
}