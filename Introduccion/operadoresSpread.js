/**
 *  Operador Spread
 *  Permite tomar todos los elementos de un arreglo y objeto y expandirlos en otro sitio
 */

const frutas = ["Manzana", "Maracuya", "Naranja"]
const comidaFavortia = ["Pizza", "Hamburguesa", "Bandeja Paisa", "Pescado", ...frutas]
console.log(comidaFavortia);

const datosLogin = {
    nombre: "Repoio",
    correo: "damian@gmail.com",
    contraseña: "ASFDUHF21343,,,..."
}

const usuario = {
    ...datosLogin,
    nombre: "Damian", 
    edad: 18,
}

console.log(usuario);

/**
 * Parametros Rest
 * Permite que una funcion tenga un numero indefinido de valores
 * los argumentos extra que encuentre los convertira en arreglo
 */

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
}

registrarUsuario("Damian", "damianfelipe.rengiforincon@gmail.com")
registrarUsuario("Repoio", "repoio@gmail.com", 18, "Colombia")

/**
 * Destructuracion de objetos
 * nos permite obtener elmentos de un objeto o arreglo y guardarlos en una variable o varias variables
 */

const familia = ["Eliana", "Juliana", "Wilson", "Chikis"]
// const primerFamiliar = familia[0]
// const SegundoFamiliar = familia[1]

const [primerFamiliar, segundoFamiliar, tercerFamiliar, cuartoFamiliar] = familia
console.log(primerFamiliar);

const persona = {
    nombre: "Damian", 
    edad: 18,
    pais: "Colombia"
}

const {nombre, edad, pais} = persona
console.log(nombre);
console.log(edad);
console.log(pais);

const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(persona)