const botonAgregarClase = document.getElementById("boton1")
const botonEliminarClase = document.getElementById("boton2")
const primeraCaja = document.querySelector("#contenedor1 .caja")
console.log(botonAgregarClase);

const agregarClase = () => {
    primeraCaja.classList.add("activa")
}

const eliminarClase = () => {
    primeraCaja.classList.remove("activa")
}

const toggleClass = () => {
    primeraCaja.classList.toggle("activa")
}


botonAgregarClase.addEventListener("click", () => {
    primeraCaja.classList.toggle("activa")
})
botonEliminarClase.addEventListener("click", eliminarClase())
