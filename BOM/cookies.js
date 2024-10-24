const crearCookie = () =>{
    console.log("Hola xd");
    document.cookie = 'nombre=damian; expires=29 Mar 2024 00:00 UTC';
}

const iniciarSesion = () => {
    const expiresDate = new Date("March 29, 2024 00:00:00 UTC").toUTCString();
    const usuario = prompt("Por favor digite su nombre de usuario");
    document.cookie = `nombre=${usuario}; expires=${expiresDate}`;
    alert("sesion iniciada");
}

console.log(document.cookie);

let usuario;

const cookies = document.cookie.split(';')

console.log(cookies);

cookies.forEach((cookie) => {
    const propiedad = cookie.split("=")[0];
    if (propiedad === "nombre"){
        console.log(propiedad);
    }
})