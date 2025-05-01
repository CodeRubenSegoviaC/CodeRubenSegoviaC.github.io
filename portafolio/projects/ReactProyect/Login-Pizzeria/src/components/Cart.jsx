import { useState } from 'react';

function ArtCart ({nombrePizza, imgPizza, precPizza, disminuir, aumentar, contador}) {
    return (
        <div className='cartPizza'>
            <div>
                <img src={imgPizza} alt={"imagen Pizza "+ nombrePizza} width={"100px"} />
                <strong>{nombrePizza}</strong>
            </div>
            <div>
                <strong>${precPizza}</strong>
                <button onClick={disminuir}>-</button>
                <strong>{contador}</strong>
                <button onClick={aumentar}>+</button>
            </div>
        </div>
    )
}
export default ArtCart;