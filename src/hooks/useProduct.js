import { useState } from "react"
import { getProductos8, getProductosByCategoryId, getProductosById } from '../api/productos';
import { useHistory } from "react-router";
export const useProduct = ( ) => {

    const history = useHistory();

    const [productos, setProductos] = useState([]);
    // const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        const productos = JSON.parse(localStorage.getItem("topSales"));
        if(productos === null || productos === "Failed to fetch"){
            const result = await getProductos8();
            console.log(result);
            localStorage.setItem("topSales",JSON.stringify(result));
            setProductos(result);
        }else{
            setProductos(productos);
        }
        setLoading(false);
    }

    const getProductsById = async (id) => {
        const result = await getProductosById(id);
        return result;
    }

    const getProductByCategoryId2 = async (id) => {
        setLoading(true);
        const result = await getProductosByCategoryId(id);
        setProductos(result);
        setLoading(false)
    }

    const redireccionar = (producto) => {
        localStorage.setItem("producto", JSON.stringify(producto));
        history.push(`/producto/${producto.id}`);
    }
    

    return [productos, getProducts, loading, getProductsById, getProductByCategoryId2,redireccionar]

}