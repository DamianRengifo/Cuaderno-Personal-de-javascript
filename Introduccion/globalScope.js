/** Global scope o variables globales
 *  Son variables declaradas desde fuera de una funcion
 *  podemos acceder a ellas desde cualquier parte del codigo
 *  podemos usar let, var y const
 */

var nombre = "carlos"

const saludo = () => {
    console.log("Hola " + nombre)
};
saludo() 