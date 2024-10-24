const nombres = ["Repoio", "Damian", "repoiomenxd", "Thepollo"]

nombres.forEach((nombre, index) => {console.log("la posicion de " + nombre + " es: " + index);})

const persona = {
    nombre: "Damian Rengifo",
    edad: 18,
    correo: "damianfelipe.rengiforincon@gmail.com"
}

for (propiedad in persona){
    console.log(persona[propiedad]);
}

/**
 *  Ciclo for of
 *  Nos sirve para recorrer los valores de un objeto iterable
 *  podemos recorrer: arrelos, cadenas de texto, mapas y listas de nodos 
 */

const etiquetas = document.head.children
console.log(etiquetas);

// for (elemento in etiquetas){
//     console.log(elemento);
// }

[...etiquetas].forEach((elemento) => console.log(elemento));