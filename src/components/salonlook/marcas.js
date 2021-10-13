import React, { useState } from 'react';

import logoStulzel from '../../assets/img/banners/stulzelbanner.png';
import recurso1 from '../../assets/img/recurso1.png';
import recurso2 from '../../assets/img/recurso2.png';
import recurso3 from '../../assets/img/recurso3.png';
import recurso4 from '../../assets/img/recurso4.png';
import recurso5 from '../../assets/img/recurso5.png';
import recurso6 from '../../assets/img/recurso6.png';

import { useRedirect } from '../../hooks/useRedirect';

const Marcas = () => {
    const [,,,redireccionarEntrada] = useRedirect();
    const [marca, setMarca] = useState("Conoce más");

    const expanderMarca = () => {
        let doc = document.getElementById("marcas");
        if(doc.style.maxHeight == "0px"){
            setMarca("Ocultar");
            doc.style.maxHeight = "7500px";
        }else{
            setMarca("Conoce más");
            doc.style.maxHeight = "0px";
        }
    }
    return ( 
        <>
            <div class="bannerS yellow ">
                <div class="containerSalon">
                    <h4>Marcas presentes <br /> en Salón Look</h4>
                    <span>Conoce todas las marcas que representa Stulzel y que apoyarán la participación de nuestra compañía en esta 2ª versión de Salon Look Madrid-Santiago.</span>
                    <button onClick={() => expanderMarca()}>{marca}</button>
                </div>
                    <img src={logoStulzel} width="200"/>
            </div>
            <div class="contenedorCollapse" id="marcas" style={{maxHeight: "0px"}}>
                <div class="contenedor">
                    <div class="division">
                        <div class="imagen">
                            <img src={recurso1} alt="" />
                        </div>
                        <div class="texto">
                            <span>  RED ONE USA es el producto más vendido en las barberías de todo Chile, con una amplia variedad para cada estilo y persona. Todos sus productos no son testeados en animales, son biodegradables y en base a agua. Dentro de sus líneas Wax, Shaving, After shave, Spray y Gel  encontrarás fragancias exclusivas con aromas y texturas únicas para el look que necesitas. Los productos RED ONE USA son fabricados y diseñados por barberos para barberos. </span>
                            <img src={recurso6} alt="" />
                        </div>
                    </div>
                    <div class="division border">
                        <div class="imagen">
                            <img src={recurso2} alt="" />
                        </div>
                        <div class="texto">
                            <span>  Filos Dorco Prime y High Quality son los filos más usados en el mundo de la berbería, tanto por su calidad de estándares superiores, garantía y prestigio, como por su diseño en hojas de platinum, su tecnología de precisión y sus múltiples formatos para que nunca falten en tu barbería. </span>
                            <img src={recurso5} alt="" />
                        </div>
                    </div>
                    <div class="division">
                        <div class="imagen">
                            <img src={recurso3} alt="" />
                        </div>
                        <div class="texto">
                            <span>  BUFFALO, el verdadero y original Wax americano ya está en Chile. Estos nuevos productos hechos con una fórmula di
                                señada para brindar toda la frescura y aroma a tu peinado, son producidos en base a agua y no están testeados en animales, pronto además se sumarán otras líneas de producto como After Shave y Shaving Gel con la mejor calidad pero a precios que no podrás creer. BUFFALO, el verdadero americano llegó para quedarse. </span>
                            <img src={recurso4} alt="" className="buffalo" />
                        </div>
                    </div>
                </div>
                <div className="bannerMarca">
                    <h2>¿Quieres conocer las nuevas marcas que lanzaremos en Salón Look?</h2>
                    <span>Te sorprenderás cuando conozcas cuáles serán, porque con ellas conocerás toda la vanguardia en color, texturas y fragancias diseñadas especialmente para mujeres y hombres.</span>
                    <strong>¡No puedes dejar de asistir!</strong>
                </div>
                <div className="amarello">
                    <button onClick={() => redireccionarEntrada()}>Obtén aquí tu entrada</button>
                </div>
            </div>
        </>
    );
}
 
export default Marcas;