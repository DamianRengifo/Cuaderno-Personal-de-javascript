objeto = {
    nombre: "carlos",
    edad: 27,
    correo: "carlos@gmail.com",
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ["Rojo", "azul", "Amarillo"],
    saludo: function(){
        console.log("hola")
    }
}
console.log(objeto.nombre)
console.log(objeto["edad"])
const variable = "suscripciones"
console.log(objeto.suscripciones.web)
objeto.pais = "Colombia"
console.log(objeto.pais)
objeto.pais = "mexico"
console.log(objeto.pais)

// asi accedemos a los metodos de los objetos
objeto.saludo()