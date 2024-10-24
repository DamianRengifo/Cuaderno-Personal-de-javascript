// function saludo(){
//     console.log("Hola xd")
// } 
// // const variable = saludo;

// // console.log(variable)

// funciones expression
const saludo = function(){
    console.log("hola xd desde la variable saludo");
}

saludo();

// funciones de tipo flecha
const saludoTipoFlecha = () => { console.log("Hola desde una funcion tipo flecha")}
saludoTipoFlecha()

const saludoUsuario = function(nombre = "amigo"){
    console.log(`Hola ${nombre} como vas?`)
} 
saludoUsuario("Damian")
saludoUsuario("Juliana")
saludoUsuario()

const operacion = function(tipo, numero1, numero2){
    switch (tipo) {
        case "suma":
            console.log(numero1 + numero2)
            break;
        
        case "resta": 
            console.log(numero1 - numero2)
            break; 
        
        case "multiplicacion":
            console.log(numero1 * numero2)
            break;
        
        case "division": 
            console.log(numero1 / numero2)
            break;

        default:
            console.log("No se ha escogido una opcion valida")
            break;
    }
}

operacion("multiplicacion", 5, 5)