import ArtCart from "./Cart";

function HomeCart ({listaCart, botonAumentar, botonDisminuir, total}){
    return (
        <>
        <div><h4>Carrito de Compras</h4></div>
        <div className="orderPizza">
        {listaCart.map((cart, index ) => (
          <ArtCart 
            key={index}
            nombrePizza={cart.nombre}
            imgPizza={cart.imagen}     
            precPizza={cart.precio}
            aumentar={() => botonAumentar(cart.nombre)}
            disminuir={() => botonDisminuir(cart.nombre)}
            contador={cart.cantidad}
          />
        ))}

        <div>
          Total: ${total}
        </div>
        <button>PAGAR</button>
      </div>
      </>
    );
  }
export default HomeCart;