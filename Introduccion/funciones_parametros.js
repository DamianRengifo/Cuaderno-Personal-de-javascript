const operacion = function(tipo, numero1, numero2){
    
    switch (tipo) {
        case "suma":
            return numero1 + numero2 
            break;
        
        case "resta": 
            return numero1 - numero2 
            break; 
        
        case "multiplicacion":
            return numero1 * numero2 
            break;
        
        case "division": 
            return numero1 / numero2 
            break;

        default:
            return "No se ha escogido una opcion valida"
            break;
    }
}

const variable = operacion("suma", 103, 200)
console.log(variable)