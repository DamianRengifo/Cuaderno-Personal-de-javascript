// con innerHTML podemos cambiar el contenido html de un elemento

const caja1 = document.querySelector(".caja")
caja1.innerHTML = "<b>Hola xd</b>"

/**
 * elemento.atribute
 * Nos permite acceder y cambiar el atributo html que le indiquemos
 */ 
caja1.value = "xd"
console.log(caja1.value);

/**
 *  con Setatribute
 *  primer argumento: el atributo que le vamos a cambiar 
 *  segundo argumento: el valor que va a tener dicho atributo  
 *  tambien podemos agregar atributos personalizados 
 */

caja1.setAttribute("class", "caja activa")
caja1.setAttribute("data-id", 214)

/**
 *  elemento.style.property
 */

const contenedor2 = document.querySelector("#contenedor2 .caja")
contenedor2.style.background = "#000"
contenedor2.style.color = "#fff"
contenedor2.style.textTransform = "uppercase"