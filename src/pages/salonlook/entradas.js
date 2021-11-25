import React from 'react';
import LazyLoad from 'react-lazyload';
import NavBar from '../../components/nav/nav';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import { useCart } from '../../hooks/useCart';
import FormAssistantComponent from '../formAsistans/formAsistans';
import look from '../../assets/img/look.png'

const Entradas = () => {
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    
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
                <div className="contenedor">
                    <div className="fondoModal">
                        <div className="imgSalon">
                            <img src={look} alt="look" /> 
                        </div>
                        <div className="div">
                            <div className="subFondo">
                                <h2>PARA OBTENER TU ENTRADA A SALÓN LOOK 2021 SOLO DEBES COMPLETAR LOS SIGUIENTES DATOS</h2>               
                                <FormAssistantComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1/>
            <Footer2/>
        </> 
    );
}
 
export default Entradas;