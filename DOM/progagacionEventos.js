/**
    Bubling(false, por defecto) si nuestra funcion addEventListener solo tiene 2 argumentos o tiene como tercer
    argumento un false, siempre se ejecutara primero el evento del hijo y luego el del padre 

    Capturing(true), si nuestra funcion addEventListener tiene como tercer argumento un true siempre se 
    ejecutara primero el evento del elemento padre y luego el del hijo xd

    siempre es necesario que solamente se apliquen estos parametros a la funcion del elemento padre
*/
const contenedor = document.getElementById("contenedor1")

contenedor.addEventListener("click", (e) => {
    console.log("Hiciste click en este contenedor");
})

const primeraCaja = document.querySelector("#contenedor1 .caja"); 
primeraCaja.addEventListener("click", (e) => {
    // con esto paramos la progagacion y evitamos que se ejecute el evento del elemento padre
    e.stopPropagation()
    console.log("Hiciste click en la caja uno xd");
})
