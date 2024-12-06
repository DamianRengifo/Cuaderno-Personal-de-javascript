// con getElementById obtenemos un elemento en base al id
const caja1 = document.getElementById("contenedor1")
console.log(typeof(caja1));

// con children obtenemos los hijos que tiene un elemento, es importante aclarar que esto es un metodo de la clase 
console.log(caja1.children);

// con ParentElement obtenemos el padre de un elemento 

console.log(caja1.parentElement);

// con getElementsByTagName nos devuelve una coleccion de elementos en base a la etiqueta que especifiquemos 
console.log("Aca ya trabajaremos con la variable caja2");
const divs = document.getElementsByTagName("div")
// nos devuelve todos los elementos que sean div 
console.log(divs);
console.log(`Tenemos la cantidad de ${divs.length} divs en esta pagina`);

/**
 * Con getElementsByClassName obtendremos todos los elementos segun la clase que le especifiquemos 
 */

const contenedores = document.getElementsByClassName("contenedor")
console.log(contenedores);

// con QuerySelector obtendremos los elementos que tengan un selector css como puede ser #xd .clase input[type="Text"] 
// es importante aclarar que solamente devuelve el primer elemento que coincida con el selector, siempre devuelve solo 1 elemento
const elementoQuery = document.querySelector("#contenedor1 .caja");
console.log(elementoQuery); 

// con QuerySelectorAll obtendremos todos los elementos
const cajas = document.querySelectorAll("#contenedor1 .caja");
console.log(cajas);

cajas.forEach((caja) => {
    console.log(caja);
});
const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child")
console.log(ultimaCaja);
// closest() nos permite buscar de adentro hacia afuera un elemento segun el selector que le indiquemos
console.log(ultimaCaja.closest(".contenedor-principal"));

// podemos encadenar todos los metodos anteriores
const contenedor3 = document.getElementById("contenedor2")
console.log(contenedor3.querySelector(".caja"));