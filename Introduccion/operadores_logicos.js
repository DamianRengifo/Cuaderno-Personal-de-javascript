/**
 * Operadores logicos
 * && AND
 * || OR
 * ! NOT
 */

const nombre = "Damian";
const edad = 17;
const tieneEntrada = true
const tienePermiso = true
// ejemplo del and
// const permitirAcceso = edad >= 18 && tieneEntrada
// console.log('Acceso permitido al concierto ' + permitirAcceso)

// ejemplo del or 

const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada)
console.log('Acceso permitido al concierto ' + permitirAcceso)

// ejemplo del not !
const variable = true
console.log(!variable)