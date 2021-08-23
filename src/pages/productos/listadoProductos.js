import React, {useEffect} from 'react';
import NavBar from '../../components/nav/nav';
import { useCart } from '../../hooks/useCart';
import { useParams } from 'react-router';
import { useFormat } from '../../hooks/useFormat';
import { useProduct } from '../../hooks/useProduct';
import { useCategory } from '../../hooks/useCategory';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
const ListadoProducto = () => {
    var categorias = JSON.parse(localStorage.getItem("categorias"));
    var categoria = JSON.parse(localStorage.getItem("categoria"));
    var topSales = JSON.parse(localStorage.getItem("topSales"));
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [, getProducts,,,,redireccionar] = useProduct();
    const [,,redireccionar2] = useCategory();
    // const [state, setState] = useState();
    const {id} = useParams();
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(localS);
    const [format] = useFormat();
    useEffect(() => {
        getProducts();
    }, []);
    const urlImagen = categoria.image.src;
    return ( 
        <>
            <div className="fondo">
                <NavBar
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />

                <div class="contenedor">
                    <div class="col-2">
                        <strong>Ver por categorías</strong>
                            {categorias.map((element) => {
                                return (
                                    <>
                                        <div class="categoria" onClick={() => redireccionar2(element)}>
                                            <span>{element.name}</span>
                                            <span>({element.count})</span>
                                        </div>
                                    </>
                                )
                            })}
                        <div class="filtroPrecio">

                        </div>
                        <div class="masVendido">
                            {topSales.map((element) => {
                                return (
                                    <>
                                        <div class="item">
                                            <div>
                                                <span>{element.name}</span>
                                                <span>{element.average_rating}</span>
                                                <span>{element.regular_price} - {element.sale_price}</span>
                                            </div>
                                            <div>
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div class="col-4">
                        <h2>{categoria.name}</h2>
                        <img src={urlImagen} />
                        <div class="filtros">

                        </div>
                        <div class="listadoProductos">
                            
                        </div>
                    </div>
                </div>

            </div>
            <Footer1 />
            <Footer2 />
        </> 
    );
}
 
export default ListadoProducto;