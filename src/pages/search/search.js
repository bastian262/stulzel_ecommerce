import React,{useState, useEffect} from 'react';
import NavBar from '../../components/nav/nav'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import Rating from '@material-ui/lab/Rating';
import {useFormat} from '../../hooks/useFormat';
import {useCategory} from '../../hooks/useCategory';
import {useProduct} from '../../hooks/useProduct';
import { useCart } from '../../hooks/useCart';
import { useParams } from 'react-router';
import { CircularProgress } from '@material-ui/core';

const Search = () => {

    var categorias = JSON.parse(localStorage.getItem("categorias"));
    var topSales = JSON.parse(localStorage.getItem("topSales"));
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [productos,,loading,,,redireccionar,,,,,, getProductBySearch] = useProduct();
    const [,,redireccionar2,] = useCategory();
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    const [format] = useFormat();
    const {id} = useParams();
    useEffect(() => {
        getProductBySearch(id);
    }, []);
    useEffect(() => {
        getProductBySearch(id);
    }, [id]);
    return ( 
        <>
            <div className="fondo">
                <NavBar 
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div class="contenedor">
                    <div class="row">
                        <div class="col-grande">
                                    <div class="title">
                                        <h2>Resultado de busqueda para: {id}</h2>
                                    </div>
                            {loading ? 
                                <CircularProgress />
                            : 
                                <>
                                    {productos.map((element) => {
                                        const imagenUrl = element.images.length > 0 ?  element.images[0].src : "";
                                        return (
                                            <>
                                                <div class="options" onClick={() => redireccionar(element)}>
                                                    <div class="img">
                                                        <img src={imagenUrl} alt={element.name} />
                                                    </div>
                                                    <div class="text">
                                                        <strong>{element.name}</strong>
                                                        <span dangerouslySetInnerHTML={{__html : element.description }}></span>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </>
                            }
                            
                        </div>
                        <div class="col-2" id="filtros">
                            <strong>Ver por categorías</strong>
                                {categorias.map((element) => {
                                    return (
                                        <>
                                            <div class="categoria" onClick={() => redireccionar2(element)}>
                                                <span className="light">{element.name}</span>
                                                <span className="count">({element.count})</span>
                                            </div>
                                        </>
                                    )
                                })}
                            
                            <div class="masVendido">
                                <strong>Lo más vendido</strong>
                                {topSales.map((element, i) => {
                                    const imagenUrl = element.images.length > 0 ?  element.images[0].src : "";
                                    return (
                                        <>
                                            {i <= 4 ? 
                                                <div class="item" onClick={() => redireccionar(element)}>
                                                    <div className="parte1">
                                                        <span className="primero">{element.name} </span>
                                                        <span className="rating"><Rating name="disabled" value={5} disabled /></span>
                                                        <div className="precioRegular">
                                                            <span className="whats">${format(element.regular_price)}</span>
                                                            <span className="linea">-</span>
                                                            <strong>${format(element.price)}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="parte2">
                                                        <img src={imagenUrl} alt="" width="50" />
                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
            <Footer2 />
        </>
     );
}
 
export default Search;