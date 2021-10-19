import React from 'react';
import { useCart } from '../../hooks/useCart';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav'
import imagen from '../../assets/img/sbatle2.png'
import imagen2 from '../../assets/img/sbatle.png'
import imagen3 from '../../assets/img/sbatle3.png'
import salonlook from '../../assets/img/salonlook.png'
import { Button } from 'antd';
const Batalla = () => {

    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);

    return ( 
        <>
            <div className="fondo" style={{background:"rgb(235, 235, 235)"}}>
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                /> 
                <div className="headerBatle">
                    {/* <div className="imagen"> */}
                        <img src={imagen} alt="logobatlewhite" />
                        <img className="salonlook" src={salonlook} alt="logobatlewhite" />
                    {/* </div> */}
                </div>
                <div className="contenedor batle">
                    <div className="border">
                        <p className="">Comienza una nueva Batalla preparada por Stulzel para tod@s
                                        l@s barber@s de Chile, <strong> inscríbete y participa </strong> para llegar a la final
                                        en vivo en el próximo Salón Look y ganar increíbles premios!</p>
                    
                        <button>Inscribete Aquí</button>
                        <p className=""><strong>Cierre de inscripciones:</strong> Sábado 30 de noviembre de 2021 </p>
                    </div>
                    <div className="border">
                        <p className="">Cuatro categorías <strong> (Fade Master_Old School_Freestyle_New Trends). </strong>
8 finalistas por cada una de ellas que se enfrentarán en vivo en Espacio Riesco y una <strong> Gran final </strong> entre los ganadores de cada categoría.</p>
                    </div>
                    <div className="border">
                        <div>
                            <div className="premio">
                                <span>GRAN</span>
                                <span>PREMIO</span>
                            </div>
                            <div className="total">
                                <span>USD 1.000</span>
                            </div>
                        </div>
                        <p className="">Un  <strong>gran premio de 1.000 dólares </strong> para el ganador de la gran final
y premios en productos Stulzel para los ganadores de cada categoria.</p>
                    </div>
                    <div className="border">
                        <p className="">Para conocer todas las bases de esta batalla, las fechas, los pasos
que debes seguir para obtener tus votos, y toda la información necesaria
solo debes descargar el archivo adjunto</p>
                    <button className="blackbtn">Descargar bases <strong>Aquí</strong></button>

                    </div>
                </div>
                <div className="footerBatle">
                    {/* <div className="imagen"> */}
                    <div className="contenedor">
                        <div className="imagenB">
                            <img src={imagen3} alt="imagen3" className="imagen3" />
                            <img src={imagen2} alt="imagen2" className="imagen2" />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <Footer1 />
            <Footer2 />
        </>
    );
}
 
export default Batalla;