/**
 *  toString()
 *  Convierte el numero a string
 */

const numero = 10
console.log(numero.toString(), typeof(numero.toString()))

/**
 *  toFixed()
 *  permite obtener un numero con los decimales especificados
 */

const numeroPi = 3.1415
console.log(numeroPi.toFixed(2));

/**
 *  parseInt()
 *  Intenta transformar un numero entero
 */

// const numero1 = parseInt(prompt("Escribe un numero"))
// const numero2 = parseInt(prompt("Escribe otro numero"))
// console.log(numero1 + numero2);

/**
 * parseFloat()
 * transforma un texto a numero flotante
 */

const numero1 = parseFloat(prompt("Escribe un numero"))
const numero2 = parseFloat(prompt("Escribe otro numero"))
console.log(numero1 + numero2);

/**
 * math.random()
 */

const numeroRandom = Math.random().toFixed(2)
console.log(numeroRandom);

/**
 * Math.floor()
 * redondea hacia abajo 
 */

console.log(Math.floor(10.1));
console.log(Math.floor(10.99));

/**
 * Math.ceil()
 * redondea hacia arriba
 */

console.log(Math.ceil(10.1));
console.log(Math.ceil(10.99));

/**
 *  Math.round()
 *  redondea hacia un numero entero
 */
console.log(Math.ceil(14.921781323124));
console.log(Math.ceil(14.24332552));

/**
 *
 * ejemplo de  numero random de 0 a 100
 */
numeroRandom2 = Math.random()
console.log(Math.floor(numeroRandom * 101));

