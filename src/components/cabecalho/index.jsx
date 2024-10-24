import './index.scss';

export default function Cabecalho(props) {
    return (
        <header className='comp-cabecalho'>
            <h1 className='titulo'>{props.titulo ?? "Esperando props..."}</h1>
        </header>
    )
}

//asdasd