/**
 *  forEach()
 *  Nos permite ejecutar una funcion por cada elemento
 */

const nombres = ["Damian", "Repio", "daulxs", "thepollo"]
nombres.forEach((nombre, index) => {
    console.log(`hola ${nombre} (${index})`)
})

/**
 *  find()
 *  recorre todo el arreglo y devuelve el primer elemento que retornemos
 */

const resultado = nombres.find((nombre) => {
    
    if(nombre[0] == 'R'){
        return nombre
    }
})
console.log(resultado)

/**
 *  map()
 *  nos permite ejecutar una funcion por elemento de un array y nos creara un nuevo arreglo en base a los
 *  resultados de la funcion
 */

const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase())
console.log(nombresMayusculas);

/**
 *  filter()
 *  nos permite ejecutar una funcion por elemento y creara un nuevo array en base a los resultados de la funcion
 */

const nombresLargos = nombres.filter((nombre) => {
    if(nombre.length >= 6){
        return nombre
    }
})
console.log(nombresLargos);

/**
 * includes() 
 * nos permite saber si un arreglo contiene un elemento que nosotros le especifiquemos 
 */

console.log(nombres.includes("thepollo"));
console.log(nombresLargos.includes("Super boy"))

/**
 * every()
 *  nos permite ejecutar un condicional por cada elemento y al final nos dice si todos los elementos cumplieron
 *  con la condicion
 */

const nombresValidos = nombres.every((nombre) => {
    if(typeof(nombre) == 'string'){
        return true
    } else {
        return false
    }
});

console.log("Todos los nombres son validos? " + nombresValidos);

/**
 * some()
 * nos devuelve true si un elemento cumplio con la condicion 
 */

const nombres2 = ["super boy", 3214, "Damiansito", true]
const nombresValidos2 = nombres.some((nombre) => {
    if(typeof(nombre) != 'string'){
        return true
    }else{
        return false
    }
}) 
console.log(nombresValidos2); 