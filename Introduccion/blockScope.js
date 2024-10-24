/** Block Scope o Variables de bloque
 *  Pertenecen las variables declaradas con const o let dentro de un bloque{}
 *  Solo podemos acceder a ellas mediante ese bloque 
 */

const edad = 19

if(edad >= 18){
    const accesoPermitido = true 
    
    if(true){
        console.log(accesoPermitido)
    }

    const miFuncion = () => {
        console.log(accesoPermitido)
    }
    miFuncion()
}

// console.log(accesoPermitido)