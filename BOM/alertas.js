const ingresar = () => {
    const accesoPermitido = confirm("¿Eres mayor de edad?")

    if (accesoPermitido) {
        alert("Bienvenido")
    }else {
        alert("Chao de esta pagina porno")
    }
}

/**
 *  alerta con input 
 */

const saludo = () => {
    const nombre = prompt("Por favor digite el nombre suyo")
    alert(`Bienvenido a nuestro sitio ${nombre}`)
}

saludo()