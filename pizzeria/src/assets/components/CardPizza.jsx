function CardPizza ({ruta, nombrePizza, ingredientes, valorPizza}) {
    const [ingrediente1, ingrediente2, ingrediente3, ingrediente4] = ingredientes;
    return (
        <div>
            <div>
                <img src={ruta} width={"400px"}/>
            </div>
            <div>
                <h3>{nombrePizza}</h3>
            </div>
            <hr />
            <div>
                <p>Ingredientes</p>
                <ul>
                    <li>{ingrediente1}</li>
                    <li>{ingrediente2}</li>
                    <li>{ingrediente3}</li>
                    <li>{ingrediente4}</li>
                </ul>
            </div>
            <hr />
            <div>
                <p>Precio ${valorPizza}</p>
            </div>
            <div>
                <button>Ver Mas</button>
                <button>Anadir</button>
            </div>
        </div>

    )
}
export default CardPizza;
