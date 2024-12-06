
// modificar estilos css mediante clases xd
const primeraCaja = document.querySelector("#contenedor1 .caja")
console.log(primeraCaja.classList);

const agregarClase = () => {
    primeraCaja.classList.add("activa")
}

const eliminarClase = () => {
    primeraCaja.classList.remove("activa")
}

// con toggle hacemos que si un elemento tiene una determinada clase la elimine y si no que la cree
const toggleClass = () => {
    primeraCaja.classList.toggle("activa")
}

// con .contains() comprobamos si un elemento tiene una
const comprobarClase = () => {
    if (primeraCaja.classList.contains("active")){
        console.log("La caja tiene la clase activa");
    }
    else{
        console.log("La caja no tiene la clase activa");
    }
    console.log("contiene las siguientes clases: ");
    primeraCaja.classList.forEach((clase) => {
        console.log(clase);
    })
}