import pizzas from "../data/dataPizza";
import Pizza from "./pizzaCard"



function ContHome({onAgregarPizza}) {
    return(
        <main>
            <div><h2>Menu</h2></div>
            <div>
            {pizzas.map((pizza , index ) => (
                <Pizza 
                key={index}
                nombrePizza={pizza.nombre}
                imgPizza={pizza.img}
                ingrPizza={pizza.ingredientes}        
                precPizza={[pizza.precio]}
                onAddToCart={onAgregarPizza}
            />
            ))}
            </div>
        </main>
        );
    }
export default ContHome;