const agregarCaja = () => {
    /**
     *  para crear elementos usamos el metodo createElement
     *  primero recibe como argumentos una cadena de texto con la etiqueta de texto que queremos insertar
     */
    // creamos el elemento y lo asignamos a una variable
    const nuevaCaja = document.createElement("div")

    // a esa variable le agregamos texto, id y clase 
    nuevaCaja.innerText = "Nueva Caja"
    nuevaCaja.setAttribute("id", "nuevo-id")
    nuevaCaja.setAttribute("class", "caja activa")

    // luego agregamos dicho elemento al DOM 
    const contenedor = document.getElementById("contenedor1")
    // con appendChild() agregamos elementos siempre al final
    // contenedor.appendChild(nuevaCaja)

    /**
     *  insertAdjacentElement() nos permite agregar nuevos elementos a las siguientes posiciones: 
     *  afterbegin: como primer elemento 
     *  beforebegin: antes del elemento padre
     *  beforeend: como ultimo elemento 
     *  afterend: despues del ultimo padre
     */
    // contenedor.insertAdjacentElement("beforeend", nuevaCaja)

    // con replaceWidth() remplazamos un elemento por otro
    document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja)
}