const arreglo = ["texto", 318.10, false, {propiedad: "valor"}, [1, 2, 3]]
const colores = []
colores[0] = "Rojo"
colores[1] = "verde"
colores[3] = "Amarillo"
colores[3] = "blanco"
colores.push('azul')
console.log(colores)
console.log("La longitud del arreglo de colores es: ".concat(colores.length, " colores"))

const menu = ["Agregar", "Actualizar", "Borrar", "salir"]
for(let j = 0; j < menu.length; j++){
    console.log(`${j + 1}. ${menu[j]}`)
} 
