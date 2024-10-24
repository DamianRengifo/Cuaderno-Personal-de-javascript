// named Imports
// import { nombre as nombreImportado, obtenerPosts as posts} from "./namedExports";
// console.log("Mi nombre es " + nombreImportado);
// console.log(posts());

// namespace imports
// import * as datos from "./namedExports";
// console.log("Mi nombre es " + datos.nombre);
// console.log(datos.obtenerPosts());

// default imports 

import obtener from "./defaultExports";
console.log(obtener());

// empty imports, llama todo el codigo pero sin hacer ningun objeto

import "./emptyExpots";
import { correo } from "./emptyExpots";

console.log(correo);