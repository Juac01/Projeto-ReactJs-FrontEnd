import './index.scss';

import { useState } from 'react';

export default function Contador(props) {

    const [contador, setContador] = useState(0);


    function aumentar() {
        setContador(contador + 1);//Deixa mais calro que estamos criando un novo valor aumentadno 
    }
    function diminuir() {
        setContador(contador - 1); //Deixa mais claro que estamos criando un novo valor  disminuindo   
    }


    return (
        <div className='comp-contador'>
            <h1>{props.titulo}</h1>
            <div className='cont'>
                <button onClick={aumentar}> + </button>
                {contador}
                <button onClick={diminuir}> - </button>
            </div>
        </div>
    )
}