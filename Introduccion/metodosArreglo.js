colores = ["Rojo", "Blanco", "Negro"]

/**
 *  Length me permite saber la cantidad de elementos de un arreglo
 */

console.log(colores.length)

/**
 *  toString()
 *  Nos permite transformar un arreglo a una cadena de texto
 */

console.log(colores.toString())

/**
 *  join()
 *  Nos permite transformar un arreglo a una cadena de texto pero separando cada elemento
 */

console.log(colores.join(" "))

/**
 *  sort()
 *  Nos permite ordenar las listas, si es con strings, nos lo ordena alfabeticamente y si es con numeros ascendetemente
 */

console.log(colores.sort())
const numeros = [5, 1, 2, 9, 6, 7]
console.log(numeros.sort())

/**
 *  reverse()
 *  Nos ordena las listas pero ahora de forma descendente
 */

console.log(colores.reverse())
console.log(numeros.reverse())

/**
 *  concat()
 *  Nos permite juntar dos arreglos en una misma lista
 */
const lista1 = [1, 2, 3]
const lista2 = ['a', 'b', 'c']
const lista3 = lista1.concat(lista2)
console.log(lista3);

/**
 *  push()
 *  Nos permite agregar elementos al final de una lista
 */

colores.push("Verde")
console.log(colores)

/**
 *  pop()
 *  Nos permite eliminar elementos al final de una lista
 */

colores.pop()
console.log(colores)

/**
 *  shift()
 *  Elimina el primer elemento de un arreglo y recorre los elementos
 */

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log(diasSemana)
const diasEliminados = diasSemana.shift()
console.log(diasSemana)
console.log(diasEliminados)

/**
 *  unshift()
 *  agrega un elemento al inicio de cada array y empuja a los elementos
 */

diasSemana.unshift("Domingo")
console.log(diasSemana)

/**
 *  splice()
 *  Nos permite agregar elementos donde nosotros especifiquemos en el arreglo
 *  1er parametro: posicion donde queremos insertar los elementos
 *  2do parametros: si queremos eliminar elementos del arreglo desde la posicion indicada 
 *  resto de parametros: elementos a agregar 
 */

const nombres = ["Damian", "Repio", "daulxs", "thepollo"]
console.log(nombres);
nombres.splice(1, 2, "repoioelpio", "repoiomenxd")
console.log(nombres);

/**
 *  slice()
 *  Nos permite copiar un arreglo a otro 
 *  - 1er parametro: Posicion inicial desde donde se inicia la copia
 *  - 2do parametro: posicion final donde se finaliza la copia
 */

const frutas = ["Fresa", "Manzana", "Uva", "Piña", "Mango", "Naranja", "Melon"]
const frutasFavoritas = frutas.slice(1, 5)
console.log(frutasFavoritas);

/**
 *  indexOf()
 *  Obtenemos el primer index de un elemento 
 * si no hay elementos obtenemos un -1
 */

const familia = ["Juini", "Willy", "Eliana", "Eliana"]
console.log(familia.indexOf("Eliana"));

/**
 *  lastIndexOf()
 *  obtenemos el ultimo index de un elemento
 */

console.log(familia.lastIndexOf("Eliana"))