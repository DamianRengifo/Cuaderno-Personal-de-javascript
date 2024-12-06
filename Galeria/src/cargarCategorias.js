import dataCategorias from "./datos/categorias";
const {categorias} = dataCategorias; 
const contenedorCategorias = document.getElementById("categorias")
console.log(categorias);

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement("a");
    nuevaCategoria.classList.add("categoria");
    nuevaCategoria.href = "#"
    const plantilla = `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
	<div class="categoria__datos">
		<p class="categoria__nombre">${categoria.nombre}</p>
		<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
	</div>
    `
    nuevaCategoria.innerHTML = plantilla 
    nuevaCategoria.dataset.categoria = categoria.id
    contenedorCategorias.append(nuevaCategoria)
})