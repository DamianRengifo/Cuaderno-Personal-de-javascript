
const saludo = () => {
    console.log("Hola mundo xd");
};
// let id;
// const iniciar = () => {
//     console.log("Iniciando timer");
//     id = setTimeout(saludo, 5000)
// };

const parar = () => {
    console.log("Parando timer");
    clearTimeout(id)
}
let cuenta = 0;
let id;
const iniciarIntervalo = () => {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++
    }, 2000)
}
const pararIntervalo = () => {
    console.log("Parando intervalo");
    clearInterval(id);
}