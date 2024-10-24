const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [];
            const error = (posts.length > 0) ? false : true;

            if (error) {
                reject("Hubo un error al obtener los posts");
            } else {
                resolve(posts);
            }
        }, 4000);
    })
}
console.log("Antes de la operacion");
const mostrarPosts = async() => {
    try{
        console.log("Ejecutando operacion");
        const posts = await fetchPosts();
        console.log(posts);
    }catch(error){
        alert(error);
    }
   
}
mostrarPosts();
console.log("Despues de la operacion");