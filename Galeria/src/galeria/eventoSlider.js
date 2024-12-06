import cerrarGaleria from "./cerrarGaleria";
const btnCloseGalery = document.querySelector("#galeria .galeria__btn")

btnCloseGalery.addEventListener("click", () => {
    cerrarGaleria()
})

console.log(btnCloseGalery);