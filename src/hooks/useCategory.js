import { useState } from "react"
import { useHistory } from "react-router";
import { getCategorias } from '../api/categorias';
export const useCategory = () => {

    const[categorias, setCategorias] = useState([]);
    const history = useHistory();
    const [ide, setIde] = useState(1);
    const listarCategorias = async () => {
        var existe = JSON.parse(localStorage.getItem("categorias"));
        if(existe == null){
            const resultado = await getCategorias();
            if(resultado == "Failed to fetch"){

            }else{
                localStorage.setItem("categorias", JSON.stringify(resultado));
                setCategorias(resultado);
            }
        }else{
            setCategorias(existe);
        }
    }   

    const redireccionar2 = (categoria) => {
        setIde(categoria.id);
        localStorage.setItem("categoria", JSON.stringify(categoria));
        history.push(`/productos/${categoria.id}`);
    }
    
    return [listarCategorias, categorias, redireccionar2,ide]
}