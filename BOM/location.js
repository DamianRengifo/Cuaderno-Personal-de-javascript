console.log(window.location.href);

// esto nos dice el nombre de la pagina
console.log(location.hostname);

// esto nos dice la ruta de nuesto archivo html
console.log(location.pathname);

// esto nos dice retorna el protocolo utilizado en la pagina web
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign("https://www.udemy.com")
}
// esta linea nos va a poder permitir ir a la pagina anterior
const regresar = () => { history.back()}
// esta linea nos va a permitir ir a la siguiente pagina que hemos visitado xd
const paginaSiguiente = () => {history.forward()}