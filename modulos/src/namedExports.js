// forma 1- poner la palabra export antes de toda variable o funcion que vamos a querer exportar
// export const nombre = "Damian"

// export const obtenerPosts = () => ["post1", "post2", "post3"]

// forma 2- exportamos los datos y funciones al final
const nombre = "Damian"

const obtenerPosts = () => ["post1", "post2", "post3"]

export {nombre, obtenerPosts}