/**
 *  podemos modificar estilos css directamente desde javascript con "inline_styles"
 */

const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child")
ultimaCaja.style.background = "#000"
ultimaCaja.style.color = "#fff"
const cajas = document.querySelectorAll(".caja")
// console.log(window.getComputedStyle(ultimaCaja).fontSize);

const aumentarTamañoLetra = (pixeles) => {
    cajas.forEach((caja) => {
        pixelesCaja = parseInt(window.getComputedStyle(caja).fontSize) + pixeles 
        caja.style.fontSize = `${pixelesCaja}px`
    })
    // pixelesCaja = parseInt(window.getComputedStyle(ultimaCaja).fontSize) + pixeles 
    // ultimaCaja.style.fontSize = `${pixelesCaja}px`
}

const disminuirTamañoLetra = (pixeles) => {
    cajas.forEach( (caja) => {
        pixelesCaja = parseInt(window.getComputedStyle(caja).fontSize) - pixeles 
        caja.style.fontSize = `${pixelesCaja}px`
    })
}