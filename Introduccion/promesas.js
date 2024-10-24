const promesa = new Promise((resolve, rejected) => {
    // accicon que se ejecutara 
    setTimeout(() => {
        const exito = true;

        if (exito) {
            resolve("La operacion tuvo exito")
        }else{
            rejected("La operacion no tuvo exito")
        }
    }, 4000)
})

promesa.then((mensaje) => {
    console.log(mensaje);
})

promesa.catch((mensaje) => {
    console.log(mensaje);
})