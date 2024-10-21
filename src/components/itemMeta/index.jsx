import './index.scss';

export default function ItemMetas(props) {
    return (
        <div className='comp-item-metas'>
            <i className='fa fa-pen-to-square' onClick={() => props.alterarMeta(props.pos)}></i> &nbsp;
            <i className='fa fa-trash-can' onClick={() => props.remover(props.pos)}></i> &nbsp;
            {props.item}
        </div>
    )
}