/**
 * length()
 * nos devuelve la longitud del string
 */

const nombre = "Damian Felipe Rengifo"
console.log(nombre.length);

/**
 * indexOf o lastIndexOf nos devuelve el index del primer/ultimo elemento especificado
 */

console.log(nombre.indexOf("n"));
console.log(nombre.lastIndexOf("n"));
console.log(nombre.lastIndexOf("z"));

/**
 *  slice() devuelve un fragmento de texto 
 *  1er parametro: index desde donde queremos cortar
 *  2do parametro: index final donde queremos cortar
 */

const indexInicio = nombre.indexOf('R')
const indexFinal = nombre.lastIndexOf('o')
console.log(nombre.slice(indexInicio, indexFinal + 1));
console.log(nombre.slice(7, 13));
console.log(nombre.slice(-7));

/**
 *  replace() . devuelve una cadena de texto donde remplaza el valor por otro
 *  1er parametro: el texto que quieres remplazar
 *  2do parametro: el texto que queremos poner
 */
const saludo = "Hola soy Damian"
console.log(saludo.replace("Damian", "Repoio"));

/**
 *  split() Convierte una cadena de texto en un arreglo, hay que identificar desde donde vamos a separar
 */
const arreglo = saludo.split(" ")
console.log(arreglo);

console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());