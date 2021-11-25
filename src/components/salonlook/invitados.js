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
                                <img src={foto2} />
                            </div>
                            <div class="col-3">
                                <h2>Kimberly Ibbotson</h2>
                                <h3>@kimberlytayhair</h3>
                                <span>Barbera Estadounidense, estilista y experta en Color, hoy está trabajando en las nuevas tendencias del color para todos los estilos. Es la colorista de los famosos en los E.E.U.U. y encargada de la exclusividad de los colores de Sharp Fade. Viene a Chile a compartir estas técnicas avanzadas con los barberos del país.</span>
                                {/* <button>Ver Más</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="color2">
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
                </div> */}
                <div className="color2">
                    <div class="contenedor">
                        <div class="row">
                            <div class="col2">
                                <img src={foto5} className="index" />
                                <img src={foto6} className="absolute" />
                            </div>
                            <div class="col-3">
                                <img src={academia} /> 
                                {/* <h3></h3> */}
                                <span>Fran Aranda e Ismael de Moras, destacados educadores españoles (Málaga), nos traerán a Chile toda la experiencia, creatividad, profesionalismo del mundo de la Barbería y estilismo que están entregando en los países del mundo donde están siendo invitados. Sus principales fortalezas y piedra angular de la educación que entregan es la base educativa que recibieron de las más prestigiosas escuelas del mundo como TONY&GUY y VIDAL SASSON, lugares que por cierto son cuna de los exponentes más influyentes del mundo entero.  </span>
                                {/* <button>Ver Más</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default Invitados;