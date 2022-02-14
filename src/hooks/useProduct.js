import { useState } from "react"
import { getProductos8, getProductosByCategoryId, getProductosById, getProductByPrice, getProductosByOrder,getProductBySearch } from '../api/productos';
import { useHistory } from "react-router";
export const useProduct = ( ) => {

    const history = useHistory();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getProducts = async (page = 1) => {
        setLoading(true);
        const result = await getProductos8(page);
        setProductos(result);
        localStorage.setItem("topSales",JSON.stringify(result));
        setLoading(false);
    }

    const getProductsById = async (id) => {
        const result = await getProductosById(id);
        return result;
    }

    const getProductByCategoryId2 = async (id, page = 1) => {
        console.log(id);
        setLoading(true);
        const result = await getProductosByCategoryId(id, page);
        console.log(result);
        console.log(1);
        if(page > 1){
            let array = [];
            let arraTemporal = array.concat(productos,result);
            console.log(arraTemporal);
            setProductos(arraTemporal);
        }else{
            setProductos(result);
        }
        setLoading(false)
    }

    const getProductByCategoryId3 = async (id, page = 1) => {
        // setLoading(true);
        const result = await getProductosByCategoryId(id, page);
        if(page > 1){
            let array = [];
            let arraTemporal = array.concat(productos,result);
            if(arraTemporal.length > productos.length){

            }else{
                setHasMore(false);
            }
            setProductos(arraTemporal);
        }else{
            if(productos.length<9){
                setHasMore(false);
            }
            setProductos(result);
        }
        // setLoading(false)
    }

    const redireccionar = (producto) => {
        localStorage.setItem("producto", JSON.stringify(producto));
        history.push(`/producto/${producto.slug}`);
    }

    const getProductsByPrice2 = async (prices, id) => {
        setLoading(true);
        const resultado = await getProductByPrice(prices, id);
        setProductos(resultado);
        setLoading(false);
    }

    const getProductsByOrden2 = async (value, id, valor = "desc") => {
        setLoading(true);
        const resultado = await getProductosByOrder(value, id, valor);
        setProductos(resultado);
        setLoading(false);
    }
    const getProductsBySearch = async (search) => {
        setLoading(true);
        const resultado = await getProductBySearch(search);
        console.log(resultado);
        setProductos(resultado);
        setLoading(false);
    }
    return [productos, getProducts, loading, getProductsById, getProductByCategoryId2,redireccionar, getProductsByPrice2,getProductsByOrden2, getProductByCategoryId3, hasMore, setHasMore, getProductsBySearch, setLoading]

}