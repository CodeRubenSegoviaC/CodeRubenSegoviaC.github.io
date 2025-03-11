import { prop_buy } from './objetos.js';
/* **********************Aqui enlisto los query selector en array para recorrerlos con un for *************************** */
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

let roomss = [
    document.querySelector(".contenido0 .property-rooms"),
    document.querySelector(".contenido1 .property-rooms"),
    document.querySelector(".contenido2 .property-rooms"),
    document.querySelector(".contenido3 .property-rooms"),
    document.querySelector(".contenido4 .property-rooms"),
    document.querySelector(".contenido5 .property-rooms"),
    document.querySelector(".contenido6 .property-rooms"),
    document.querySelector(".contenido7 .property-rooms")
];

console.log(roomss);

let costs = [
    document.querySelector(".contenido0 .property-cost"),
    document.querySelector(".contenido1 .property-cost"),
    document.querySelector(".contenido2 .property-cost"),
    document.querySelector(".contenido3 .property-cost"),
    document.querySelector(".contenido4 .property-cost"),
    document.querySelector(".contenido5 .property-cost"),
    document.querySelector(".contenido6 .property-cost"),
    document.querySelector(".contenido7 .property-cost")
];

console.log(costs); 

let smoke = [
    document.querySelector(".contenido0 .property-smoke"),
    document.querySelector(".contenido1 .property-smoke"),
    document.querySelector(".contenido2 .property-smoke"),
    document.querySelector(".contenido3 .property-smoke"),
    document.querySelector(".contenido4 .property-smoke"),
    document.querySelector(".contenido5 .property-smoke"),
    document.querySelector(".contenido6 .property-smoke"),
    document.querySelector(".contenido7 .property-smoke")
];

console.log(smoke);

let petss = [
    document.querySelector(".contenido0 .property-pets"),
    document.querySelector(".contenido1 .property-pets"),
    document.querySelector(".contenido2 .property-pets"),
    document.querySelector(".contenido3 .property-pets"),
    document.querySelector(".contenido4 .property-pets"),
    document.querySelector(".contenido5 .property-pets"),
    document.querySelector(".contenido6 .property-pets"),
    document.querySelector(".contenido7 .property-pets")
];

console.log(petss);

let parkings = [
    document.querySelector(".contenido0 .property-parking"),
    document.querySelector(".contenido1 .property-parking"),
    document.querySelector(".contenido2 .property-parking"),
    document.querySelector(".contenido3 .property-parking"),
    document.querySelector(".contenido4 .property-parking"),
    document.querySelector(".contenido5 .property-parking"),
    document.querySelector(".contenido6 .property-parking"),
    document.querySelector(".contenido7 .property-parking")
];

console.log(parkings);

let bathrooms = [
    document.querySelector(".contenido0 .property-bathrooms"),
    document.querySelector(".contenido1 .property-bathrooms"),
    document.querySelector(".contenido2 .property-bathrooms"),
    document.querySelector(".contenido3 .property-bathrooms"),
    document.querySelector(".contenido4 .property-bathrooms"),
    document.querySelector(".contenido5 .property-bathrooms"),
    document.querySelector(".contenido6 .property-bathrooms"),
    document.querySelector(".contenido7 .property-bathrooms")
];

console.log(bathrooms);

let photo = [
    document.querySelector(".imagenes0 .property-photo"),
    document.querySelector(".imagenes1 .property-photo"),
    document.querySelector(".imagenes2 .property-photo"),
    document.querySelector(".imagenes3 .property-photo"),
    document.querySelector(".imagenes4 .property-photo"),
    document.querySelector(".imagenes5 .property-photo"),
    document.querySelector(".imagenes6 .property-photo"),
    document.querySelector(".imagenes7 .property-photo")
];

console.log(photo);


let recorrer = () => {
    for (let i = 0; i < 8; i++) { 
        let propiedad = Object.keys(prop_buy[i]); /* creo los array con las keys */
        /* ahora busco el contenido de las key para cada uno de los objetos dentro del array */
        /* el metodo .find me ayuda a recorrer el array hasta encontrar la key que necesito para guardar el valor */
        let getNombre = prop_buy[i][propiedad.find(key => key === 'nombre')];
        let getSrc = prop_buy[i][propiedad.find(key => key === 'src')];
        let getDescripcion = prop_buy[i][propiedad.find(key => key === 'descripcion')];
        let getUbicacion = prop_buy[i][propiedad.find(key => key === 'ubicacion')];
        let getHabitaciones = prop_buy[i][propiedad.find(key => key === 'habitaciones')];
        let getCosto = prop_buy[i][propiedad.find(key => key === 'costo')];
        let getSmoke = prop_buy[i][propiedad.find(key => key === 'smoke')];
        let getPets = prop_buy[i][propiedad.find(key => key === 'pets')];
        let getParking = prop_buy[i][propiedad.find(key => key === 'parking')];
        let getBanos = prop_buy[i][propiedad.find(key => key === 'banos')]; 

        names[i].nextSibling.textContent = getNombre;
        descriptions[i].nextSibling.textContent = getDescripcion;
        locations[i].nextSibling.textContent = getUbicacion;
        roomss[i].nextSibling.textContent = getHabitaciones;
        bathrooms[i].nextSibling.textContent = getBanos;
        parkings[i].nextSibling.textContent = getParking;
        if(getPets){
            getPets='Mascotas Permitidas';
            petss[i].nextElementSibling.style.backgroundColor = "#90EE90";  }
        else{
            getPets='Mascotas NO Permitidas';
            petss[i].nextElementSibling.style.backgroundColor = "salmon"; 
         }
        petss[i].nextSibling.textContent = getPets;
        if(getSmoke){
            getSmoke='Fumar Permitido  ';
            smoke[i].nextElementSibling.style.backgroundColor = "#90EE90";
        }
        else{
            getSmoke='Fumar NO Permitido';
            smoke[i].nextElementSibling.style.backgroundColor = "salmon"; }
        smoke[i].nextSibling.textContent = getSmoke;
        costs[i].nextSibling.textContent = getCosto;
        photo[i].src = getSrc[1];

/*         console.log('Nombre:', getNombre);
        console.log('Src:', getSrc);
        console.log('Descripcion:', getDescripcion);
        console.log('Ubicacion:', getUbicacion);
        console.log('Habitaciones:', getHabitaciones);
        console.log('Costo:', getCosto);
        console.log('Smoke:', getSmoke);
        console.log('Pets:', getPets);
        console.log('Parking:', getParking);
        console.log('Banos:', getBanos); */


        }
    }
;

recorrer(); 