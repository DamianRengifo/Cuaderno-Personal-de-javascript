'use strict';

// forma 1
// export default () => {
//     return {
//         nombre: "Damian Felipe",
//         correo: "damianfelipe.rengiforincon@gmail.com"
//     }
// }

// forma 2

const obtenerUsuario = () => {
    return {
        nombre: "Damian Felipe",
        correo: "damianfelipe.rengiforincon@gmail.com"
    }
};

console.log("Soy codigo que se ejecuta desde emptyExport");
const correo = "damianfelipe.rengiforincon@gmail.com";

// named Imports
// import { nombre as nombreImportado, obtenerPosts as posts} from "./namedExports";
// console.log("Mi nombre es " + nombreImportado);
// console.log(posts());

console.log(obtenerUsuario());

console.log(correo);
