import {categoria} from "../eventoCategorias";
import {cajaImagenesCategorias} from "../eventoCategorias"

const cerrarGaleria = () => {
    categoria.setAttribute("class", "galeria");
    document.body.style.overflow = "visible"; 
    cajaImagenesCategorias.innerHTML = ""
}

export default cerrarGaleria