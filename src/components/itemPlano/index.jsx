import './index.scss';

export default function ItemPlano(props) {


    return (
        <div className='comp-item-plano' >
            <div className='cor' style={{ backgroundColor: props.item.tema }}>&nbsp;</div>
            <div >
                <h1> {props.item.nome}</h1>
                <h2> {props.item.estatus}</h2>
            </div>
            <div>
                <i className='fa fa-pen-to-square' onClick={() => props.alterarPlano(props.pos)}></i> &nbsp;
                <i className='fa fa-trash-can' onClick={() => props.removerPlano(props.pos)}></i> &nbsp;
            </div>
        </div>
    )
}