/* ---------------------------------------------------------- */
/* ################### Ejercicio 1 ######################### */
/* ---------------------------------------------------------- */
let borde = document.querySelector(".imagen")

function cambiarBorde () {
    if(!borde.classList.contains('bordeado')){
        borde.classList.add('bordeado');
    }
    else{
        borde.classList.remove('bordeado');
    }
}
borde.addEventListener("click", cambiarBorde);

/* ---------------------------------------------------------- */
/* ################### Ejercicio 2 #########################  */
/* ---------------------------------------------------------- */

let cart1 = document.querySelector(".num1");
let cart2 = document.querySelector(".num2");
let cart3 = document.querySelector(".num3");
let compra = document.querySelector(".resultadoCompra");
let compraFinal = document.querySelector(".botonComprar")
let popupp = document.querySelector(".popup")
cart1.value = "0"
cart2.value = "0"
cart3.value= "0"
let stickerTotal = 0


function comprando (){
    carro = [cart1.value, cart2.value, cart3.value];
    stickerTotal = 0;
    for (let cart of carro) {
        if(!isNaN(parseInt(cart))) {

            stickerTotal = parseInt(cart) + stickerTotal
            compra.innerHTML = ("Evaluando Stock para "+ stickerTotal + " Stickers")
        }
        else if(cart === null || cart === ""){
            compra.innerHTML = "Inicie su compra <br> ingresando la cantidad deseada"
            compra.style.color = "red";
            compra.style.backgroundColor = "white";
        }
        else {
            compra.innerHTML = "- ERROR - <br> Ingrese Numeros";
            break;
        }

        if (stickerTotal >= 11){
            compra.innerHTML = ("- ERROR - <br> Menos de 11 Stickers <br> <br>"+ stickerTotal +" Stickers <br> NOOOO" )
        }
    }
    popupp.classList.remove("active1")
    popupp.classList.remove("active2")
    popupp.classList.remove("standby")
}

function checkBuy () {
    stickerTotal = parseInt(cart1.value)+parseInt(cart2.value)+parseInt(cart3.value)
    if(!isNaN(parseInt(stickerTotal)) && stickerTotal<11 && stickerTotal!=0 ){
        popupp.innerHTML = ("COMPRASTE "+ stickerTotal+" Stickers <br> Ahora a esperar sentadito por tus Stickers FAKEMON <br><br> (°⌣°) ")
        popupp.classList.add("active1")
    }
    else if(stickerTotal==0){
        popupp.innerHTML = ("Si Claro "+ stickerTotal+" Stickers <br><br> Almenos compra 1 <br> (͡• ʖ ͡•) ")
        popupp.classList.add("standby")
    }
    else{
        popupp.innerHTML = ("Bueno compa <br> si quiere le hace caso a los mensajes de error <br><br><br> llena los campos <br>OTRA VEZ (¬､¬)")
        popupp.classList.add("active2")
    }
}
function quitarVentana (){
    popupp.classList.remove("active1")
    popupp.classList.remove("active2")
    popupp.classList.remove("standby")
}

cart1.addEventListener("input", comprando);
cart2.addEventListener("input", comprando);
cart3.addEventListener("input", comprando);
compraFinal.addEventListener("click", checkBuy);
popupp.addEventListener("click", quitarVentana)

/* ---------------------------------------------------------- */
/* ################### Ejercicio 3 #########################  */
/* ---------------------------------------------------------- */

let showKey1 = document.querySelector(".vista1")
let showKey2 = document.querySelector(".vista2")
let showKey3 = document.querySelector(".vista3")
let showK = [showKey1,showKey2,showKey3];
let teclado = document.querySelector(".keyboard")
let ingresaKey = document.querySelector(".screenPw")
let checkPassword = document.querySelector(".verificarPassword")
let resultadoCheck = document.querySelector(".resultadoValidacion")

let key1 = document.querySelector(".key1")
let key2 = document.querySelector(".key2")
let key3 = document.querySelector(".key3")
let key4 = document.querySelector(".key4")
let key5 = document.querySelector(".key5")
let key6 = document.querySelector(".key6")
let key7 = document.querySelector(".key7")
let key8 = document.querySelector(".key8")
let key9 = document.querySelector(".key9")
let key0 = document.querySelector(".key0")
let keyReset = document.querySelector(".reset")
let keyClose = document.querySelector(".ok")
let showK1 = document.querySelector(".k1")
let showK2 = document.querySelector(".k2")
let showK3 = document.querySelector(".k3")
let valor = 0
let pw1 = "911";
let pw2 = "714";

let numeros = ["1","2","3","4","5","6","7","8","9","0"]
let otros = ["R","OK"]

function clave () {
    let i=0;
    show = [showK1,showK2,showK3];
    showK = [showKey1,showKey2,showKey3];
    teclado.classList.add("activo");
        function detectKey(event) {
            valor = event.target.textContent;
            console.log(valor);
            if(otros.includes(valor)){
                if(valor == "OK"){
                    teclado.classList.remove("activo");
                    i=0;
                }
                else{
                    i=0;
                }
            }
            else if(numeros.includes(valor) && i<3){
                show[i].innerHTML = valor;
                showK[i].innerHTML = valor;
                i++;
            }
            if(i>2){
                teclado.classList.remove("activo");
                i=0;
            }
        }
    key0.addEventListener("click", detectKey)
    key1.addEventListener("click", detectKey)
    key2.addEventListener("click", detectKey)
    key3.addEventListener("click", detectKey)
    key4.addEventListener("click", detectKey)
    key5.addEventListener("click", detectKey)
    key6.addEventListener("click", detectKey)
    key7.addEventListener("click", detectKey)
    key8.addEventListener("click", detectKey)
    key9.addEventListener("click", detectKey)
    keyReset.addEventListener("click", detectKey)
    keyClose.addEventListener("click", detectKey)
    console.log(i)
}

function comprar() {
    let showKText = showK.map(element => element.innerText).join('');
    console.log(showKText)
    if(showKText == pw1){
        resultadoCheck.innerHTML = "PW 1 CORRECTA"
    }
    else if(showKText == pw2){
        resultadoCheck.innerHTML = "PW 2 CORRECTA"
    }
    else{
        resultadoCheck.innerHTML = "PW INCORRECTA"
    }
    showKText ="000"
}
ingresaKey.addEventListener("click",clave)
checkPassword.addEventListener("click", comprar )