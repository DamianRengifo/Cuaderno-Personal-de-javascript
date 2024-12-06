const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const primeraCaja = document.querySelector(".caja")

const toggleClass = () => {
    primeraCaja.classList.toggle("activa")
}
boton1.addEventListener("click", () => {
    console.log("Se ha agregado un evento a la primera caja");
    primeraCaja.addEventListener("click", toggleClass)
})

boton2.addEventListener("click", () => {
    console.log("Eliminar evento xd");
    // para eliminar un evento, ejecutamos el removeEventListener()
    // recibe el tipo de evento y la funcion que queremos eliminar
    primeraCaja.removeEventListener("click", toggleClass)
})