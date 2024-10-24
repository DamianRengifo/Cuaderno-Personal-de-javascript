class Usuario{
    static usuarios = []
    static id = 0
    constructor(nombre, correo){
        Usuario.id++
        this.id = Usuario.id  
        this.nombre = nombre 
        this.correo = correo 
        usuarios.push(this)
        
    }

    static borrarUsuario(idUsuario){
        console.log(`El usuario con el id ${idUsuario} ha sido borrado de laa base de datos`);
    }
}

