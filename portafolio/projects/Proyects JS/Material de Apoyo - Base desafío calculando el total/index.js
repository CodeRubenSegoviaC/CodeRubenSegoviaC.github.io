
let precioBase = 400000; /* Aqui se asignan valores bases */
let cantidad = 0;
let precioTotal = 0;

/* Aqui selecciono los botones del HTML */
let botonMas = document.querySelector('.btnMas')
let botonMenos = document.querySelector('.btnMenos')

/* Aqui asigno el valor del precio base el cual no modifico en ningun momento. */
let precioSpan = document.querySelector(".precio-inicial")/* Selecciono la clase del elemento */
precioSpan.innerHTML = precioBase /* y asigno un valor al elemento */

let cantProduct = document.querySelector('.cantidad')/* lo de aqui es lo mismo de arriba pero la cantidad es variable */
cantProduct.innerHTML = cantidad /* la cantidad varia segun la funcion de los botones mas o menos que hice aqui abajo */

let total = document.querySelector('.valor-total')/*  Aqui hago la seleccion del elementoy mas abajo modifico los valores dependiendo del boton y el valor actual de la cantidad, es una operacion matematica simple */

function pressBtnMas () { /* Funcion del boton para aumentar la cantidad de productos*/
    cantidad = parseInt(cantProduct.value) || 0; /* utilice un operador OR para asignar el valor cero en caso que sea null u otro*/
    cantidad++; /* suma de 1 en 1 */
    cantProduct.value = cantidad;    /* cambia el valor de la cantidad */
    cantProduct.innerHTML = cantidad; /* modifico en pantalla el valor asignado */

    precioTotal = cantidad*precioBase;/* creo la operacion basica de calculo del total */
    total.innerHTML =precioTotal; /* modifico el valor total en pantalla */

}
function pressBtnMenos () {  /* Aqui se repite lo de arriba excepto el if */
    cantidad = parseInt(cantProduct.value) || 0;
    cantidad--;
    if(cantidad<0){ /*  creo la condicion del menor a cero para que no existan numeros negativos */
        cantidad=0  /*  y defino que no puede ser menor a cero asignando un cero*/
    }
    cantProduct.value = cantidad;
    cantProduct.innerHTML = cantidad;
    
    precioTotal = cantidad*precioBase;
    total.innerHTML =precioTotal;
}
botonMas.addEventListener("click",pressBtnMas) /* Aqui capturo los eventos de click para aplicar las funciones */
botonMenos.addEventListener("click",pressBtnMenos)