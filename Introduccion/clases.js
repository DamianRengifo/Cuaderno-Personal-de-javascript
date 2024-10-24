class Usuario{

    constructor(nombre, identificacion, edad){
        this.nombre = nombre
        this.identificacion = identificacion
        this.edad = edad

        console.log("Nuevo usuario registrado");
    }

    mostrarInfo() {
        return "nombre: " + this.nombre + "\nidentificacion " + this.identificacion + "\nedad" + this.edad;
    }
}

const usuario = new Usuario("Damian Felipe", "1237613132", 18)
console.log(usuario.nombre);
console.log(usuario.mostrarInfo())

const usuario2 = new Usuario("Juan david", "23187132", 18)
console.log(usuario2.mostrarInfo());
console.log(usuario2.nombre);
