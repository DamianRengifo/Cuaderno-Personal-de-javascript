const usuario = {
    nombre: "Damian", 
    edad: 20, 
    pais: "Colombia",
    ticket: true
}

if (usuario.edad >= 18){
    if (usuario.ticket){
        console.log(`El usuario ${usuario.nombre} es mayor de edad y tiene un ticket`)
    }else{
        console.log(`El usuario ${usuario.nombre} es mayor de edad pero no tiene un ticket`)
    }

}else{
    console.log(`El usuario ${usuario.nombre} es menor de edad`)
}

if  (usuario.pais == "Colombia"){
    console.log(`El usuario ${usuario.nombre} es de nacionalidad colombiana`)
}
else if(usuario.pais == "Mexico"){
    console.log(`El usuario ${usuario.nombre} es de nacionalidad mexicana`)
}