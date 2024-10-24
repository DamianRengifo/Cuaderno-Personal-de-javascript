const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["post1", "post2", "post3"];
            const error = (posts.length > 0) ? false : true;

            if (error) {
                reject("Hubo un error al obtener los posts");
            } else {
                resolve(posts);
            }
        }, 4000);
    })
}
console.log("Iniciando la operacion");
console.log(fetchPosts());
fetchPosts()
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));

console.log("Terminando la operacion");
