console.log(window);
window.alert("Hola xd")

// asi accedemos a las dimensiones del navegador

console.log(`la ventana de tu navegador mide ${window.innerWidth} de ancho`);
console.log(`la ventana de tu navegador mide ${window.innerHeight} de altura`);

let ventana; 
const abrirVentana = () => {
    ventana = window.open("", "Mi nueva ventana", 'width=500,height=500');
    ventana.document.write("<h1>Hola desde una nueva ventana</h1>")
};

const cerrarVentana = () => {
    ventana.close()
}

/**
 *  Screen Object 
 *  nos mide las dimensiones del monitor del usuario
 */

console.log(`El alto de tu pantalla es: ${window.screen.height}`);
console.log(`El ancho de tu pantalla es: ${window.screen.width}`);

console.log("Ancho de pantalla sin barra de windows:", window.screen.availWidth );
console.log("Alto de pantalla sin barra de windows:", window.screen.availHeight);
