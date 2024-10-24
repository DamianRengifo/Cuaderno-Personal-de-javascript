const usuario =  {
    nombre: "Damian Rengifo",
    pais: "Mexico"
}

switch(usuario.pais){
    case 'Colombia': 
        console.log("El usuario es colombiano");
        break 
    
    case 'Mexico':
        console.log("El usuario es mexicano");
        break 
    
    case 'Argentina':
        console.log("El usuario es argentino");
        break
    
    default: 
        console.log("El usuario tiene un pais desconocido");
        break 
}