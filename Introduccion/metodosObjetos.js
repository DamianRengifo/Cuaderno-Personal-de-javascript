const usuario = {
    nombre: "Damian Felipe",
    edad: 18,
    familia: ["Eliana", "Willson", "Juliana"],
    saludo: () => {
        console.log("Hola");
    }
}
/**
 *  metodos propios 
 *  los objetos pueden tener metodos propios a ejecutar
 */
usuario.saludo()

/**
 * Object.keys()
 * nos devuelve un arreglo con las llaves (keys) del objeto
 */

console.log(Object.keys(usuario));

/**
 * Object.values()
 * nos devuelve un arrelo con los valores del objeto
 */
console.log(Object.values(usuario));

/**
 * Object.entries()
 * nos devuelve un arreglo con las parejas de clave y valor
 */
console.log(Object.entries(usuario));
console.log(`El objeto tiene ${Object.entries(usuario).length} propiedades`);