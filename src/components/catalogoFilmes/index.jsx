import './index.scss';


export default function CatalogoFilmes(props) {
    return (
        <div className='comp-cartao-filme'>
            <img src={props.item.url} />

            {props.item.estreia != '' &&
                < div className='estreia'>
                    {props.item.destaque == true &&
                        <i className='fa fa-star estrela'></i>
                    }
                    Estreia{props.item.estreia}

                </div>
            }

            <p>{props.item.nome}</p>
            <div className='classificacao'>{props.item.classificacao}</div>
        </div >
    )
}