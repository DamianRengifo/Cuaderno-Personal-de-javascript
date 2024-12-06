import datos from "../datos/fotos"
import { cajaImagenesCategorias } from "../eventoCategorias";
import { cargarImagen } from "./cambiarImagen";
import { categoria } from "../eventoCategorias";
console.log("sajdiwawueewu");

cajaImagenesCategorias.addEventListener("click", (e) => {
    console.log(e.target);
    e.preventDefault(); 
    if(e.target?.dataset?.id){
        const id = parseInt(e.target.dataset.id);
        const categoriaGaleria = categoria.dataset.categoria 
        const resultado = datos.fotos[categoriaGaleria].find(llave => llave.id === id)
        cargarImagen(resultado.id, resultado.nombre, resultado.ruta, resultado.descripcion)
    }
})