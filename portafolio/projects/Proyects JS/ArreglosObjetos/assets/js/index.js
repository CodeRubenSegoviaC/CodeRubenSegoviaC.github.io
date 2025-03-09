import { prop_rent, prop_buy, numeros, permitDeny } from './objetos.js';

let properties = [
    document.querySelector(".rent1"),
    document.querySelector(".rent2"),
    document.querySelector(".rent3"),
    document.querySelector(".sell1"),
    document.querySelector(".sell2"),
    document.querySelector(".sell3")
];
let pets = [
    document.querySelector(".rent1 div div i.pet"),
    document.querySelector(".rent2 div div i.pet"),
    document.querySelector(".rent3 div div i.pet"),
    document.querySelector(".sell1 div div i.pet"),
    document.querySelector(".sell2 div div i.pet"),
    document.querySelector(".sell3 div div i.pet")
];
let smokes = [
    document.querySelector('.rent1 div div .fa-smoking').nextElementSibling,
    document.querySelector('.rent2 div div .fa-smoking').nextElementSibling,
    document.querySelector('.rent3 div div .fa-smoking').nextElementSibling,
    document.querySelector('.sell1 div div .fa-smoking').nextElementSibling,
    document.querySelector('.sell2 div div .fa-smoking').nextElementSibling,
    document.querySelector('.sell3 div div .fa-smoking').nextElementSibling
];
let baths = [
    document.querySelector('.rent1 div div .fa-toilet').nextElementSibling,
    document.querySelector('.rent2 div div .fa-toilet').nextElementSibling,
    document.querySelector('.rent3 div div .fa-toilet').nextElementSibling,
    document.querySelector('.sell1 div div .fa-toilet').nextElementSibling,
    document.querySelector('.sell2 div div .fa-toilet').nextElementSibling,
    document.querySelector('.sell3 div div .fa-toilet').nextElementSibling
];
let rooms = [
    document.querySelector('.rent1 div div .fa-door-closed').nextElementSibling,
    document.querySelector('.rent2 div div .fa-door-closed').nextElementSibling,
    document.querySelector('.rent3 div div .fa-door-closed').nextElementSibling,
    document.querySelector('.sell1 div div .fa-door-closed').nextElementSibling,
    document.querySelector('.sell2 div div .fa-door-closed').nextElementSibling,
    document.querySelector('.sell3 div div .fa-door-closed').nextElementSibling
];
let parks = [
    document.querySelector('.rent1 div div .fa-car').nextElementSibling,
    document.querySelector('.rent2 div div .fa-car').nextElementSibling,
    document.querySelector('.rent3 div div .fa-car').nextElementSibling,
    document.querySelector('.sell1 div div .fa-car').nextElementSibling,
    document.querySelector('.sell2 div div .fa-car').nextElementSibling,
    document.querySelector('.sell3 div div .fa-car').nextElementSibling
];
let numeroObj1 = Math.floor(Math.random() * 8) ;
let numeroObj2 = numeroObj1+1 ;
let numeroObj3 = numeroObj2+1 ;

if (numeroObj1 == 7){
    numeroObj2 = 0;
    numeroObj3 = 1;
}
else if (numeroObj2 == 7) {
    numeroObj3 = 0;
}
let numerosObj = [numeroObj1, numeroObj2, numeroObj3]
let asignarCasaImg = () => {
    for (let i = 0; i < 3; i++) {
        console.log(numeroObj1)
        properties[i].style.backgroundImage = `url("${prop_rent[numerosObj[i]].src[0]}")`;
        properties[i + 3].style.backgroundImage = `url("${prop_buy[numerosObj[i]].src[0]}")`;
    }
}
asignarCasaImg();

/* Aqui Aplico funcion para el Icono de permitir o denegar mascotas 'NO es lo mismo que la guia pero se entiende Claramente Supongo xD' */
let permisosCasaPet = () => {
    for (let i = 0; i < 3; i++) {
    /* Mascosa Casa 1,2,3,4,5,6 */
        if (prop_rent[numeroObj1].pets) {
            pets[i].classList.add(permitDeny.permitir);
            pets[i].classList.remove(permitDeny.deny);
            pets[i+3].classList.add(permitDeny.permitir);
            pets[i+3].classList.remove(permitDeny.deny);
        } 
        else {
            pets[i].classList.add(permitDeny.deny);
            pets[i].classList.remove(permitDeny.permitir);
            pets[i+3].classList.add(permitDeny.deny);
            pets[i+3].classList.remove(permitDeny.permitir);
        }
    }
}
permisosCasaPet();

let permisosCasaSmoke = () => {
    for (let i = 0; i < 3; i++) {
    /* Permiso para fumar Casa 1,2,3,4,5,6 */
        if (prop_rent[numerosObj[i]].smoke) {
            /* Arriendo */
            smokes[i].classList.add(permitDeny.permitir);
            smokes[i].classList.remove(permitDeny.deny);
            /* venta */
            smokes[i+3].classList.add(permitDeny.permitir);
            smokes[i+3].classList.remove(permitDeny.deny);
        } else {
            /* arriendo */
            smokes[i].classList.add(permitDeny.deny);
            smokes[i].classList.remove(permitDeny.permitir);
            /* ventas */
            smokes[i+3].classList.add(permitDeny.deny);
            smokes[i+3].classList.remove(permitDeny.permitir);
        }
    }
}
permisosCasaSmoke();

let numeroBannos = () =>{
    for (let i = 0; i < 3; i++) {
        for(let x = 0; x < 8; x++) {
            if(prop_rent[numerosObj[i]].banos == x){
                let restroom = numeros[Object.keys(numeros)[x]]; 
                baths[i].classList.remove('fa-circle-check');
                baths[i].classList.add(restroom);
            }
        }
        for(let y = 0; y < 8; y++) {
            if(prop_buy[numerosObj[i]].banos == y){
                let restroom2 = numeros[Object.keys(numeros)[y]]; 
                baths[i+3].classList.remove('fa-circle-check');
                baths[i+3].classList.add(restroom2);
            }
        }    
    }   
}
numeroBannos();

let numeroRooms = () =>{
    for (let i = 0; i < 3; i++) {
        console.log(prop_rent[numerosObj[i]].habitaciones)
        for(let x = 0; x < 8; x++) {
            console.log(prop_rent[numerosObj[i]].habitaciones)
            if(prop_rent[numerosObj[i]].habitaciones == x){
                let rooms1 = numeros[Object.keys(numeros)[x]]; 
                rooms[i].classList.remove('fa-circle-check');
                rooms[i].classList.add(rooms1);
            }
        }
        for(let y = 0; y < 8; y++) {
            if(prop_buy[numerosObj[i]].habitaciones == y){
                let rooms2 = numeros[Object.keys(numeros)[y]]; 
                rooms[i+3].classList.remove('fa-circle-check');
                rooms[i+3].classList.add(rooms2);
            }
        }    
    }   
}
numeroRooms();

let numeroParking = () =>{
    for (let i = 0; i < 3; i++) {
        for(let x = 0; x < 8; x++) {
            if(prop_rent[numerosObj[i]].parking == x){
                let park1 = numeros[Object.keys(numeros)[x]]; 
                parks[i].classList.remove('fa-circle-check');
                parks[i].classList.add(park1);
            }
        }
        for(let y = 0; y < 8; y++) {
            if(prop_buy[numerosObj[i]].parking == y){
                let park2 = numeros[Object.keys(numeros)[y]]; 
                parks[i+3].classList.remove('fa-circle-check');
                parks[i+3].classList.add(park2);
            }
        }    
    }   
}
numeroParking();

/* ************************************************************** */
let names = [
    document.querySelector(".contenido0 .property-name"),
    document.querySelector(".contenido1 .property-name"),
    document.querySelector(".contenido2 .property-name"),
    document.querySelector(".contenido3 .property-name"),
    document.querySelector(".contenido4 .property-name"),
    document.querySelector(".contenido5 .property-name"),
    document.querySelector(".contenido6 .property-name"),
    document.querySelector(".contenido7 .property-name")
];

let descriptions = [
    document.querySelector(".contenido0 .property-description"),
    document.querySelector(".contenido1 .property-description"),
    document.querySelector(".contenido2 .property-description"),
    document.querySelector(".contenido3 .property-description"),
    document.querySelector(".contenido4 .property-description"),
    document.querySelector(".contenido5 .property-description"),
    document.querySelector(".contenido6 .property-description"),
    document.querySelector(".contenido7 .property-description")
];

let locations = [
    document.querySelector(".contenido0 .property-location"),
    document.querySelector(".contenido1 .property-location"),
    document.querySelector(".contenido2 .property-location"),
    document.querySelector(".contenido3 .property-location"),
    document.querySelector(".contenido4 .property-location"),
    document.querySelector(".contenido5 .property-location"),
    document.querySelector(".contenido6 .property-location"),
    document.querySelector(".contenido7 .property-location")
];