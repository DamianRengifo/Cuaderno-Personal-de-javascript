/** Local Scope o variables locales 
 *  son las variables dentro de una funcion
 *  Solo podemos acceder a ellas dentro de la funcion 
 */

var numero = 1

var obtenerNumerosFuncion = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene una longitud de ${numero}`)

    var funcionAnidada = () => {
        console.log(numero)
    }

    if (numero >= 10) {
        funcionAnidada()
    }
}

obtenerNumerosFuncion("Damian Rengifo")
