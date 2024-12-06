import dataFotos from "./datos/fotos"
import { cargarImagen } from "./galeria/cambiarImagen";
const contenedorCategorias = document.getElementById("categorias");
const categoria = document.getElementById("galeria");
const cajaImagenesCategorias = document.querySelector(".galeria__carousel-slides")
// event for open the modal 
contenedorCategorias.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.target);
    if(e.target.closest("a")){
        const categoriaActiva = e.target.closest("a").dataset.categoria
        categoria.dataset.categoria = categoriaActiva
        const fotos = dataFotos.fotos[categoriaActiva]
        
        for (const foto of fotos) {
            const slide = 
            `<a href="#" class="galeria__carousel-slide">
				<img class="galeria__carousel-image" src="${foto.ruta}" data-id= "${foto.id}" alt="${foto.nombre}"/>
			</a>`;
            cajaImagenesCategorias.innerHTML += slide;
        }
        const {id, nombre, ruta, descripcion} = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion);

        categoria.setAttribute("class", "galeria--active"); 
        // this code hidden the lateral bar of navigator 
        document.body.style.overflow = "hidden";
        categoria.querySelector(".galeria__carousel-slide").classList.add("galeria__carousel-slide--active")
    }
    else{
        console.log("a");
    }
});

cajaImagenesCategorias.addEventListener("click", (e) => {
    console.log(e.target);
    e.preventDefault(); 
    if(e.target?.dataset?.id){
        const id = parseInt(e.target.dataset.id);
        const categoriaGaleria = categoria.dataset.categoria 
        const resultado = dataFotos.fotos[categoriaGaleria].find(llave => llave.id === id)
        console.log(resultado);
        cargarImagen(resultado.id, resultado.nombre, resultado.ruta, resultado.descripcion)
    }
})


export {contenedorCategorias, categoria, cajaImagenesCategorias}
