function Pizza({ nombrePizza, imgPizza, ingrPizza, precPizza, onAddToCart }) {

    const handleClick = () => {
        const pizzaSeleccionada = {
          nombre: nombrePizza,
          imagen: imgPizza,
          precio: precPizza,
        };
        onAddToCart(pizzaSeleccionada);
      };
    
    return (
        <div className="cardPizza">
            <div className="imagenPizza">
                <img src={imgPizza} alt={"imagen pizza "+ nombrePizza} width={"350px"}/>
            </div>
            <div className="nombrePizza">
                <h2>{nombrePizza}</h2>
            </div>
            <hr />
            <div className="ingredientesPizza">
                <ul>
                    {ingrPizza.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                    ))}
                </ul>
            </div>
            <hr />
            <div className="precioPizza">
                <h3>${precPizza}</h3>
            </div>
            <div className="carritoPizza">
                <button onClick={handleClick}> Add Cart </button>
                <button> Details </button>
            </div>
        </div>
    )
}
export default Pizza;