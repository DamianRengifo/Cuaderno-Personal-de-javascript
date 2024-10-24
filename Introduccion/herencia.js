class Usuario{

    constructor(usuario, password){
        this.usuario = usuario
        this.password = password
    }

    obtenerPosts(){
        const posts = ["post1", "post2"]
        return posts
    }
}

class Moderador extends Usuario{
    constructor(usuario, password, permisos){
        super(usuario, password)
        this.permisos = permisos
    }

    borrarPosts(id){
        if(this.permisos.includes("borrar")){
            console.log(`El post con el id ${id} ha sido borrado`);
        } else{
            console.log("No tienes permiso para borrar el post con id" + id);
        }
    }
}

const moderador1 = new Moderador("Bonni", "1124932", "borrar")
moderador1.borrarPosts(5)