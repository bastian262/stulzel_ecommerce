import React from 'react';
import NavBar from '../../components/nav/nav';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import { useCart } from '../../hooks/useCart';
const Curso = () => {
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);

    return ( 
        <>
            <div class="fondo">
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div class="contenedor-fluido fondoImage">
                    <div class="row">
                        <span class="title">STULZEL EDUCACIÓN</span>
                        <span class="subtitle">CURSO DE BARBERÍA NIVEL BÁSICO</span>
                        <span class="parraf">Más de 1400 alumnos egresados desde nuestras aulas.</span>
                        <span class="parraf">Curso certificado por el Estado de Chile a través de SENCE</span>
                        <div class="buttons">
                            <button className="btn1">Solicita Más Info</button>
                            <button className="btn2">Ver Video</button>
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="raw">
                        <h3>INFORMACIÓN IMPORTANTE SOBRE NUESTROS CURSOS</h3>
                        <span>Nuestra área de capacitación se detuvo en marzo de 2020 por efecto de la Pandemia que azota al mundo entero, actualmente estamos trabajando en nuevos contenidos y estructura del curso, por lo tanto queremos que sepas que volveremos a activar los cursos en marzo del presente 2021.</span>
                        <span>Queremos agradecerte el interes en nuestro curso, pero rogamos tomes contacto los primeros días de marzo para saber una información actualizada, ahora mismo trabajamos fuertemente en una reestructuración fisica de la sala de clases, estás modificaciones buscan tu protección para evitar contagios, los protocolos que se están desarrollando van en directa preocupación por ustedes nuestros estudiantes y por nuestro equipo de docentes.</span>
                        <span>Muchas gracias y nos vemos muy pronto, Éxito!</span>
                        <button>Ver Productos</button>
                    </div>
                </div>
            </div>
            <Footer1 />
            <Footer2 />
        </>
    );
}
 
export default Curso;