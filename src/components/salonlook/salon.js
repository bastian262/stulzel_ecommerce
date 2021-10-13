import React, {useState} from 'react';
import porque from '../../assets/img/porquesalon.jpeg';
import saloonlookporque from '../../assets/img/salonlookporque.jpeg';
import horario from '../../assets/img/horario.jpeg';
import logosp from '../../assets/img/banners/logos2.png'
import estacionamiento from '../../assets/img/banners/estacionamiento.png';
import evento from '../../assets/img/banners/evento.png';
import logoSalon from '../../assets/img/salonlook.png';
import logos from '../../assets/img/banners/logos.png'
import logodic from '../../assets/img/banners/dic2.png'
import espacio from '../../assets/img/espacio.png';
import { useRedirect } from '../../hooks/useRedirect';

const Salon = () => {
    const [,,, redireccionarEntrada] = useRedirect()
    const [salon, setSalon] = useState("Ver más");
    const expanderSalon = () => {
        let doc = document.getElementById("collapseSalon");
        if(doc.style.maxHeight == "0px"){
            doc.style.maxHeight = "8500px";
            setSalon("Ocultar");
        }else{
            doc.style.maxHeight = "0px";
            setSalon("Ver más");
        }
    }
    return ( 
        <>
            <div class="bannerL salonLook" id="salonlook">
                <div class="containerSalon">
                    <span>Todo sobre Salón Look</span>
                    <button onClick={() => expanderSalon()}>{salon}</button>
                </div>
            </div>
            <div class="contenedorCollapse" id="collapseSalon" style={{maxHeight: "0px"}}>
                <div class="fondoBlack">
                    <div class="col-1">
                        <div>
                            <img src={logoSalon} alt="" />
                            <span>2ª VERSIÓN DEL ENCUENTRO PROFESIONAL <br />
                                DE LA IMAGEN Y LA ESTÉTICA INTEGRAL 
                            </span>
                        </div>
                    </div>
                    <div class="col-1">
                        <div>
                            <img src={logodic} alt="" />
                            <img src={logos} alt="" />
                        </div>
                    </div>
                </div>
                <div class="background">
                    <div class="col1">
                        <span>¿Qué es <br /> Salón Look?</span>
                        <img className="porque" src={saloonlookporque} alt="porquesalon" />
                    </div>
                    <div class="col2">
                        <p>Salón Look Madrid-Santiago es el principal evento B2B del sector de la imagen y estética integral, vitrina profesional para los salones de belleza, peluquería, el mundo del spa, la barbería, el cuidado del cabello, cosmética, maquillaje, uñas, productos de peinado, accesorios, implementos, herramientas, equipos, mobiliario, vestuario, clases y exposiciones.</p>
                        <p>Este encuentro se desarrollará en su segunda versión en un formato híbrido, donde se vinculará la exhibición de stands de grandes marcas, con una parrilla de contenidos que será transmitida online a todos los profesionales de la industria.</p>
                        <p>De esta manera, las empresas y sus protagonistas volverán a encontrarse cara a cara en un encuentro único.</p>
                        <p>Salón Look Madrid-Santiago ha anunciado su regreso a la presencialidad el próximo mes de diciembre. De esta manera, el sector podrá reencontrarse durante los días 5 al 7 de ese mes en el Centro Convenciones Espacio Riesco en la ciudad de Santiago, en Chile. Así pues, los profesionales del sector de la estética, la peluquería y la cosmética se darán cita con el objetivo de reimpulsar el sector y abrir nuevas vías de colaboración y desempeño.</p>
                        <div>
                            <img src={logosp} alt="" />
                            <span>www.looksantiago.cl</span>
                        </div>
                    </div>
                </div>
                <div className="fondoBlanco">
                    <div className="div-flex">
                        <div className="col">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.7 78.54"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M73,43.74A16.08,16.08,0,1,0,56.89,27.67,16.1,16.1,0,0,0,73,43.74Zm0-26.55A10.48,10.48,0,1,1,62.5,27.67,10.49,10.49,0,0,1,73,17.19Z"/><path class="cls-1" d="M73.94,48.46C43.81,48.46,43,75.28,43,75.55a3,3,0,0,0,2.9,3h0a3,3,0,0,0,2.93-2.89c0-.87.72-21.31,25-21.31S98.79,74.28,98.81,75.12a2.94,2.94,0,0,0,5.88-.06C104.68,74.8,104.08,48.46,73.94,48.46ZM46,77.73Z"/><path class="cls-1" d="M114,32.15A16.08,16.08,0,1,0,97.9,16.08,16.1,16.1,0,0,0,114,32.15ZM114,5.6a10.48,10.48,0,1,1-10.47,10.48A10.48,10.48,0,0,1,114,5.6Z"/><path class="cls-1" d="M27.41,33.16A16.08,16.08,0,1,0,11.33,17.09,16.1,16.1,0,0,0,27.41,33.16Zm0-26.55A10.48,10.48,0,1,1,16.94,17.09,10.49,10.49,0,0,1,27.41,6.61Z"/><path class="cls-1" d="M115,36.87c-10.69,0-17.67,3.38-22.24,7.75a26.25,26.25,0,0,1,5.41,3.11c3.69-2.88,9-5,16.83-5,24.27,0,24.85,19.94,24.87,20.78a2.94,2.94,0,0,0,5.88-.06C145.69,63.21,145.09,36.87,115,36.87Z"/><path class="cls-1" d="M30.75,38.49c10.68,0,17.66,3.38,22.24,7.75a25.81,25.81,0,0,0-5.41,3.11c-3.69-2.88-9-5-16.83-5C6.47,44.37,5.89,64.3,5.88,65.15A2.94,2.94,0,1,1,0,65.09C0,64.82.61,38.49,30.75,38.49Z"/></g></g></svg>
                            </div>
                            <div className="details">
                                <div>
                                    <span className="chico">+</span>
                                    <span className="precio">15.000</span>
                                </div>
                                <span className="visitas">Visitas</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.97 86.09"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M13.85,50.54a3.2,3.2,0,0,0,.9,1.86l1.76,1.76Z"/><path class="cls-1" d="M90,17.9l-7.3-7.29a3.09,3.09,0,0,0-.39-.33l0,7.35,3.12,3.12v22.7L49.66,79.28l-4.47-4.46-4,4.05,6.29,6.29a3.19,3.19,0,0,0,4.5,0l38-38A3.22,3.22,0,0,0,91,44.87V20.15A3.2,3.2,0,0,0,90,17.9Z"/><path class="cls-1" d="M76.22,8.22,68.93.93A3.22,3.22,0,0,0,66.68,0H41.22A3.19,3.19,0,0,0,39,.93C25.85,14.09,4.45,35.36,1.62,37.71a2.84,2.84,0,0,0-.69.52,3.17,3.17,0,0,0,0,4.49L33.69,75.48a3.17,3.17,0,0,0,4.49,0l38-38a3.2,3.2,0,0,0,.93-2.25V10.47A3.2,3.2,0,0,0,76.22,8.22ZM3.61,37.33a3.07,3.07,0,0,1,1.4.55A3.24,3.24,0,0,0,3.61,37.33Zm68.06-3.55L35.84,69.61,7,40.72c1-1,2.3-2.2,3.78-3.62,3.27-3.18,7.79-7.62,13.44-13.23C32,16.08,39.94,8.18,42.62,5.49H66.09l5.58,5.58Z"/><circle class="cls-1" cx="58.99" cy="18.21" r="5.31"/></g></g></svg>
                            </div>
                            <div className="details">
                                <div>
                                    <span className="chico">+</span>
                                    <span className="precio">200</span>
                                </div>
                                <span className="visitas">Marcas</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.56 70.53"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M33.52,32.08A10.33,10.33,0,1,0,23.19,21.75,10.35,10.35,0,0,0,33.52,32.08Zm0-15.13a4.8,4.8,0,1,1-4.79,4.8A4.81,4.81,0,0,1,33.52,17Z"/><path class="cls-1" d="M15.42,55.56h0a2.78,2.78,0,0,0,2.77-2.71,14.32,14.32,0,0,1,2-6.58c2.52-4.1,6.91-6.18,13.07-6.18,14.66,0,15,11.91,15,12.4a2.77,2.77,0,0,0,4.74,1.92,2.74,2.74,0,0,0,.79-2c0-.18-.42-17.89-20.55-17.89s-20.64,18-20.64,18.2A2.77,2.77,0,0,0,15.42,55.56Z"/><path class="cls-1" d="M0,0V70.53H111.56V0ZM106,64.93H5.6V5.6H106Z"/><path class="cls-1" d="M64.06,26H91.92a2.8,2.8,0,0,0,0-5.6H64.06a2.8,2.8,0,0,0,0,5.6Z"/><path class="cls-1" d="M64.06,37.62H91.92a2.8,2.8,0,0,0,0-5.6H64.06a2.8,2.8,0,0,0,0,5.6Z"/><path class="cls-1" d="M64.06,49.28H91.92a2.8,2.8,0,0,0,0-5.6H64.06a2.8,2.8,0,0,0,0,5.6Z"/></g></g></svg>
                            </div>
                            <div className="details">
                                <div>
                                    <span className="chico">+</span>
                                    <span className="precio">100</span>
                                </div>
                                <span className="visitas">Expositores</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.59 79.82"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M0,0V79.82H81.59V0ZM77,75.21H4.56V4.61H77Z"/><polygon class="cls-1" points="14.85 18.36 25.3 28.81 28.72 25.39 17.68 14.35 26.91 14.35 26.91 9.51 10.01 9.51 10.01 9.53 10.01 9.53 10.01 25.67 14.85 25.67 14.85 18.36"/><polygon class="cls-1" points="66.12 61.86 55.21 50.95 51.79 54.37 62.58 65.16 54.06 65.16 54.06 70 70.96 70 70.96 69.98 70.96 69.98 70.96 53.84 66.12 53.84 66.12 61.86"/><polygon class="cls-1" points="11.2 69.57 27.34 69.57 27.34 64.73 19.28 64.73 29.98 54.04 26.55 50.62 16.02 61.16 16.02 52.67 11.18 52.67 11.18 69.57 11.2 69.57 11.2 69.57"/><polygon class="cls-1" points="56.06 28.74 67.06 17.74 67.06 26.44 71.89 26.44 71.89 9.55 71.88 9.55 71.88 9.55 55.73 9.55 55.73 14.38 63.58 14.38 52.64 25.32 56.06 28.74"/></g></g></svg>
                            </div>
                            <div className="details">
                                <div>
                                    <span className="chico">+</span>
                                    <span className="precio">5.000</span>
                                    <span className="chico" style={{marginLeft: "5px"}}>m2</span>
                                </div>
                                <span className="visitas">de exposición</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.59 79.82"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M0,0V79.82H81.59V0ZM77,75.21H4.56V4.61H77Z"/><path class="cls-1" d="M51.53,54.5H33.21V42.6H49.46A1.51,1.51,0,0,0,51,41V37.92a1.51,1.51,0,0,0-1.55-1.61H33.21V25.08H50.75a1.48,1.48,0,0,0,1.55-1.54V20.4a1.49,1.49,0,0,0-1.55-1.55H28.14a1.51,1.51,0,0,0-1.6,1.55V59.18a1.51,1.51,0,0,0,1.6,1.55H51.53a1.49,1.49,0,0,0,1.55-1.55V56.05A1.49,1.49,0,0,0,51.53,54.5Z"/></g></g></svg>
                            </div>
                            <div className="details">
                                <div>
                                    <span className="chico">+</span>
                                    <span className="precio">5.000</span>
                                </div>
                                <span className="visitas">Estacionamientos</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="background2">
                    <div class="col1">
                        <img src="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" width="200" />
                        <span>¿Cuál es el rol <br /> de Stulzel <br /> en Salón Look?</span>
                    </div>
                    <div class="col2">
                        <p>En este evento, que se realiza gracias a la alianza desarrollada por IFEMA MADRID junto con Espacio Riesco, Stulzel se transforma en protagonista principal, porque es el encargado de presentar múltiples novedades, tendencias y generar los vínculos y canales colaborativos entre todos los exponentes y expositores nacionales e internacionales del rubro de la belleza, peluquería y barbería. El desarrollo de esta modalidad híbrida ha sido pensada para potenciar un reencuentro entre profesionales de diferentes partes del mundo y confirma el firme compromiso de Stulzel con el sector de la belleza en Chile.</p>
                        <p>En este formato mixto, Stulzel vinculará a la exhibición de stands de grandes marcas, una parrilla de contenidos con invitados internacionales que será transmitida online a todos los profesionales de la industria. De esta manera, las empresas y sus profesionales volverán a generar nuevos vínculos comerciales y encontrarse cara a cara con los principales referentes del sector.</p>
                        <p>La cita cuenta con un gran programa de actividades que busca dar cabida a todos los profesionales del sector y Stulzel te mostrará nuevos lanzamiento de productos, presentará todas las novedades de la industria y así conectará a todos los visitantes de esta feria con todo lo que está pasando en Chile y el mundo.</p>
                    </div>
                </div>
                <div class="background3">
                    <div class="col1">
                        <span>¿Por qué <br /> visitar Salón Look?</span>
                        <img src={porque} alt="porque" />
                    </div>
                    <div class="col2">
                        <p>Podrás obtener toda la información de la oferta comercial especializada en el mercado chileno e internacional concentrado en 3 días de trabajo.</p>
                        <p>Iniciarás, continuarás o cerrarás procesos de compra y pedidos en los diferentes canales de distribución presentes en Salón Look.</p>
                        <p>Networking: podrás agendar reuniones con actuales y potenciales proveedores a través del Punto de Encuentro Profesional.</p>
                        <p>Visitas y fortalecimiento de relaciones comerciales con actuales proveedores.</p>
                        <p>Descubrirás las novedades, tendencias y servicios de posibles nuevos proveedores y distribuidores.</p>
                        <p>Tendrás la posibilidad de analizar toda de la oferta especializada del sector.</p>
                        <p>Buscar y conocer tecnologías y servicios innovadores para su salón.</p>
                        <p>Proporcionar la oportunidad de asistir a actividades, jornadas, talleres, congresos y desfiles como fuente de información, novedades, evolución del sector y formación.</p>
                        <p>Salón Look es un instrumento clave para tu empresa a la hora de proyectar una imagen de poder de compra y posicionamiento en la industria de la belleza profesional.</p>
                        <p>Obtener información y evaluar las posibilidades de una futura participación como expositor.</p>
                    </div>
                </div>
                <div className="amarello">
                    <button onClick={() => redireccionarEntrada()}>Obtén aquí tu entrada</button>
                </div>
                <div className="lugar">
                    <div className="titulo">
                        <h4>Lugar de evento</h4>
                        <img src={espacio} /> 
                    </div>
                    <div className="contenedor">
                        <div className="row">
                            <div className="col3">
                                <img src={evento} />
                                <span>DIRECCIÓN</span>
                                <span>Avda. El Salto 5000</span>
                                <span>Huechuraba Santiago Chile</span>
                            </div>
                            <div className="col3">
                                <img src={horario} className="horario"/>
                                <span>HORARIO</span>
                                <span>De 11:00 a 20:00 hrs</span>
                            </div>
                            <div className="col3">
                                <img src={estacionamiento} />
                                <span>ESTACIONAMIENTO</span>
                                <span>Más de 5000</span>
                                <span>estacionamientos gratis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Salon;