import React, {useState} from 'react';
import foto1 from '../../assets/img/banners/foto1.png'
import foto2 from '../../assets/img/banners/foto2.png'
import foto3 from '../../assets/img/banners/foto3.png'
import foto4 from '../../assets/img/banners/foto4.png'
import foto5 from '../../assets/img/banners/foto5.png'
import foto6 from '../../assets/img/banners/foto6.png'
import academia from '../../assets/img/banners/academia.png'

const Invitados = () => {
    const [invitados, setInvitados] = useState("Ver más");
    const expanderInvitados = () => {
        let doc = document.getElementById("collapseI");
        if(doc.style.maxHeight == "0px"){
            setInvitados("Ocultar");
            doc.style.maxHeight = "4500px";
        }else{
            setInvitados("Ver más");
            doc.style.maxHeight = "0px";
        }
    }
    return ( <>
        <div class="bannerR invitador">
            <div class="containerSalon">
                <span>Invitados internacionales <br /> de Stulzel a Salón Look</span>
                <button onClick={() => expanderInvitados()}>{invitados}</button>
            </div>
        </div>
        <div className="invitados">
            <div class="contenedorCollapse" id="collapseI" style={{maxHeight: "0px"}}>
                <div className="color">
                    <div class="contenedor">
                        <div class="row">
                            <div class="col2">
                                <img src={foto1} />
                            </div>
                            <div class="col-3">
                                <h2>Sharp Fade</h2>
                                <h3>@sharpfade</h3>
                                <span>Byrd Mena, joven emprendedor y fundador de algunas marcas exitosas en nuestra industria, incluida la mundialmente conocida SHARPFADE que hoy cuenta con más de 740 mil seguidores. Byrd es consultor creativo global para WAHL professional y hoy es uno de los referentes más importantes del mundo de la barbería, en los últimos 3 años ha recorrido más de 25 países educando, colaborando, organizando, siendo jurado, asesor y conociendo y escuchando las historias de cada una de las barberías locales para establecer contactos y compartirlas con el mundo. Byrd ha trabajado con muchos de los líderes mundiales de la industria obteniendo más de 3.5 Millones de hashtags #Sharpfade  </span>
                                <button>Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color2">
                    <div class="contenedor">
                        <div class="row">
                            <div class="col2">
                                <img src={foto2} />
                            </div>
                            <div class="col-3">
                                <h2>Kimberly Ibbotson</h2>
                                <h3>@kimberlytayhair</h3>
                                <span>Barbera Estadounidense, estilista y experta en Color, hoy está trabajando en las nuevas tendencias del color para todos los estilos. Es la colorista de los famosos en los E.E.U.U. y encargada de la exclusividad de los colores de Sharp Fade. Viene a Chile a compartir estas técnicas avanzadas con los barberos del país.</span>
                                <button>Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color">
                    <div class="contenedor">
                        <div class="row">
                            <div class="col2">
                                <img src={foto3} />
                            </div>
                            <div class="col-3">
                                <h2>Jonathan Rodriguez</h2>
                                <h3>@redonewaxofficial <br />@jrodriguez_don </h3>
                                {/* <h3></h3> */}
                                <span>Jonathan Rodríguez es barbero, empresario, dueño de la marca RED ONE USA, hoy es un actor clave en la Barbería Americana y Latina, un tremendo referente que hoy anda en búsqueda de nuevos nombres en Latinoamérica para su Team de Barberos.</span>
                                <button>Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color2">
                    <div class="contenedor">
                        <div class="row">
                            <div class="col2">
                                <img src={foto4} />
                            </div>
                            <div class="col-3">
                                <h2>Zach Ramsey</h2>
                                <h3>@z_ramsey</h3>
                                <span>Zach Ramzey, conocido como @z_ramzey, Estadounidense, empresario, barbero profesional, educador, hoy es el barbero personal de SharpFade y de muchas estrellas de Estados Unidos, barbero de los famosos y dueño de un talento sin igual, sus cortes son de otro planeta, pero la visión que tiene de la moda y la estética es aún más impactante.</span>
                                <button>Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color">
                    <div class="contenedor">
                        <div class="row">
                            <div class="col2">
                                <img src={foto5} className="index" />
                                <img src={foto6} className="absolute" />
                            </div>
                            <div class="col-3">
                                <img src={academia} /> 
                                {/* <h3></h3> */}
                                <span>Fran Aranda e Ismael de Moras, destacados educadores españoles (Málaga), nos traeran a Chile toda la experiencia, creatividad, profesionalismo del mundo de la Barbería y estilismo que están entregando en los países del mundo donde están siendo invitados. Sus principales fortalezas y piedra angular de la educación que entregan es la base educativa que recibieron de las más prestigiosas escuelas del mundo como TONY&GUY y VIDAL SASSON, lugares que por cierto son cuna de los exponentes más influyentes del mundo entero.  </span>
                                <button>Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default Invitados;