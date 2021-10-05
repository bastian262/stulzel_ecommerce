import React,{useState} from 'react';
import stands from '../../assets/img/stand.jpeg'
import stands4 from '../../assets/img/stand2.jpeg'
import stands2 from '../../assets/img/stand4.png'
import stands3 from '../../assets/img/stand3.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Stands = () => {
    const [stand, setStand] = useState("Ver más");

    const expanderStands = () => {
        let doc = document.getElementById("stands");
        if(doc.style.maxHeight == "0px"){
            setStand("Ocultar");
            doc.style.maxHeight = "7500px";
        }else{
            setStand("Ver más");
            doc.style.maxHeight = "0px";
        }
    }
    return ( 
        <>
            <div class="bannerR stand ">
                <div class="containerSalon">
                    <span>¿Quieres tu Stand?</span>
                    <button onClick={() => expanderStands()}>{stand}</button>
                </div>
            </div>
            <div class="contenedorCollapse" id="stands" style={{maxHeight: "0px"}}>
                <div class="contenedor">
                    <div class="stands">
                        <div class="headerStand">
                            <h2>En SALÓN LOOK 2021 tienes que estar!</h2>
                            <p>Salón look más que una feria, es una excelente plataforma para generar relaciones comerciales firmes en el tiempo, y hoy más que nunca, necesitamos de la colaboración contínua entre empresas del sector de la belleza y la estética.</p>
                            <p>Tendremos la participación de más de 100 empresas y 200 marcas que generarán la oportunidad de estrechar relaciones comerciales con las empresas que expongan, logrando así ampliar la cartera de proveedores y clientes, se presentarán las principales marcas de Chile y del mundo, atrayendo a inversionistas de los 5 continentes.</p>
                            <p>Para nadie es desconocido que los últimos 2 años han sido convulsionados en nuestro país y en el mundo entero, primero el estallido social y luego la pandemia, generando el cierre de cientos de empresas en todos los rubros, siendo la estética uno de los más afectados a nivel global.</p>
                            <p>Es por lo anterior que está versión de la feria será clave para las empresas que ahí se exhiban, tendrán la oportunidad de ampliar su exposición ante el mercado nacional, no solo haciendo crecer su cartera de clientes, sino también adquiriendo nuevos socios y contactos comerciales que sin duda colaborarán en el crecimiento y desarrollo de los expositores ahí presentes.</p>                    
                            <div class="btnWhats">
                                <WhatsAppIcon className="icon" />
                                <div>
                                    <span>INSCRÍBETE LLAMANDO A ESTE WHASAPP</span>
                                    <p>
                                        +569 <strong>7232 1555</strong> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gris">
                    <div class="contenedor">
                        <h2>¿Quiénes pueden exponer y adquirir un Stand en Salón Look?</h2>
                        <span>Empresas dedicadas a la industria de la estética, Importadores, Exportadores, Distribuidores y comercializadores de productos de Peluquería, Barbería, Manicure, Maquillaje, SPA, Servicios de estéticas integrales, masajistas, Escuelas de peluquerías, Escuelas de barbería, Empresas de capacitación relacionadas al rubro, Centros de estéticas y de cosmetología, etc.</span>
                    </div>
                </div>
                <div class="blanco">
                    <div class="contenedor">
                        <div class="row">
                            <h2>¿De que tamaño puede ser mi Stand?</h2>
                            <span>Los Stand disponibles van desde los 6 metros cuadrados, habiendo también de 8, 9, 18 y 36 metros cuadrados. No obstante de ser requerido por el expositor existe la posibilidad abierta de diseñar un Stand conforme a los requerimientos técnicos que apliquen al interesado. </span>
                            <img src={stands} alt="stand" className="stands desktop" />
                            <img src={stands4} alt="stand" className="stands movil" />
                            <div>
                                <img src={stands2} alt="stand2"/>
                                <img src={stands3} alt="stand2"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gris">
                    <div class="contenedor">
                        <h2>¿Cuál es el valor de un stand?
                        </h2>
                        <span>Los valores de los stand comienzan desde las 6,5 UF el metro cuadrado, el valor final dependerá de la totalidad de espacio que utilice el expositor.</span>
                        <div class="btnverde">
                            <p>Ejemplo stand 6m2: <strong> 6,5 X $30.048,36 (UF al 20 de Sept.) = $195.312 X 6(m2) = $1.171.872 + IVA.</strong></p>
                        </div>
                    </div>
                </div>
                <div class="verde">
                    <div class="contenedor">
                        <span>
                            SI TIENES DUDAS, O NO SABES CÓMO DESARROLLAR TU STAND, LLÁMANOS A NUESTRO WHATSAPP
                            Y TE ASESORAREMOS Y AYUDAREMOS PARA QUE NO TE QUEDES AFUERA DE ESTE ÚNICO Y GRAN EVENTO.
                        </span>
                        <div>
                            <WhatsAppIcon className="icon" /> <span>+569 <strong> 7232 1555</strong></span>
                        </div>
                    </div>
                </div>
                <div class="contenedor">
                    <h2>¿Si compro un Stand con más metros cuadrados tendré mejores valores? </h2>
                    <span>Eventualmente y por motivos de la alta demanda en la venta de los Stand no existen precios diferenciados autorizados, pero dada la contingencia, y por motivos del contante apoyo al rubro podemos evaluar descuentos por la toma de espacio de mayores superficies.</span>
                </div>
                <div class="gris">
                    <div class="contenedor">
                        <h2>
                            ¿Cuándo adquiero un Stand, que me entregan para el uso del mismo?
                        </h2>
                        <span>Los Stand que se entregan son modulares, estos van con su respectiva toma de corriente y el hecho de ser modular, permite que el expositor pueda ubicar sus productos y ser desearlo colocar en el toda la publicidad que tenga disponible.</span>
                    </div>
                </div>
                <div class="contenedor">
                    <h2>¿Quiénes son los principales visitantes de esta feria?</h2>
                    <div class="row">
                        <div class="colu1">
                            <p>• Consultores de la industria de la belleza.</p>
                            <p>• Adquisición y compra de productos de salón y belleza.</p>
                            <p>• Esteticistas.</p>
                            <p>• Maquilladores.</p>
                            <p>• Fabricantes, representantes.</p>
                            <p>• Compañías farmacéuticas, laboratorios.</p>
                            <p>• Estilistas.</p>
                            <p>• Cosmetólogas. </p>
                            <p>• Importadores, exportadores, distribuidores y mayoristas.</p>
                            <p>• Empresas de transporte y logística de envío última milla.</p>
                            <p>• Servicios e-commerce.</p>
                        </div>
                        <div class="colu1">
                            <p>• Consultores de la industria de la belleza.</p>
                            <p>• Adquisición y compra de productos de salón y belleza.</p>
                            <p>• Esteticistas.</p>
                            <p>• Maquilladores.</p>
                            <p>• Fabricantes, representantes.</p>
                            <p>• Compañías farmacéuticas, laboratorios.</p>
                            <p>• Estilistas.</p>
                            <p>• Cosmetólogas. </p>
                            <p>• Importadores, exportadores, distribuidores y mayoristas.</p>
                            <p>• Empresas de transporte y logística de envío última milla.</p>
                            <p>• Servicios e-commerce.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Stands;