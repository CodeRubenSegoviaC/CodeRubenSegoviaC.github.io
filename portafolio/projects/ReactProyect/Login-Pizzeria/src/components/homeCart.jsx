import ArtCart from "./Cart";

function HomeCart ({listaCart}){
    return (
        <div className="orderPizza">
        {listaCart.map((cart, index ) => (
            <ArtCart 
            key={index}
            nombrePizza={cart.nombre}
            imgPizza={cart.imagen}     
            precPizza={[cart.precio]}
        />
        ))}
        </div>
    )
}
export default HomeCart;