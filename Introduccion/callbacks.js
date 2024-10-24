/**
 *  Una callback es una funcion que recibe como parametro otra funcion y la ejecuta internamente para complementar
 *  a la funcion que tiene en su parametro
 */

const obtenerPostsUsuario = ((usuario, callback) => {
    console.log(`Obteniendo los posts de ${usuario}`);

    setTimeout(() => {
        let posts = ["post1", "post2", "post3"];
        callback(posts);
    }, 2000);
})

const posts = obtenerPostsUsuario('Damian', (posts)=>{ console.log(posts);})

function saludar(nombre) {
    alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}  
procesarEntradaUsuario(saludar);