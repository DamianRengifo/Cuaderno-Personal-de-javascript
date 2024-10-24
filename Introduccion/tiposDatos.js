// strings
const nombre = "Damian Felipe Rengifo Rincon"
const nombreperro = "Super boy papi firulays veggeto leni light mussolini"
console.log(typeof(nombre))
console.log(nombre.concat(" y su perro se llama:\n", nombreperro ))
// numbers
telefono = 31883067324
console.log(typeof(telefono))

// booleans
let variable1 = false 
let comprobacion = "Damian Felipe Rengifo Rincon" == nombre 
console.log(comprobacion)

// arrays
const arreglo = [1, 3, 5, {propiedad: "valor"}, [1, 2, 3], "repoio" ]

for (let valor of arreglo){
    console.log("Tipo de: ".concat(valor, " es: ", typeof(valor)))
}
console.log(arreglo)

// objeto
let persona = {
    nombre: "Damiansito",
    edad: 18,
    identificacion: 1016713286,
    carro: {
        marca: "audi",
        color: "blanco"
    }
}

console.log(persona.nombre)
console.log(persona.carro.marca)

// function 
function hola(){
    console.log("hola xd")
}

hola()

// undefined y null

// undefined es cuando el valor no tiene ningun valor y no tiene espacio en la memoria
bonny = undefined
