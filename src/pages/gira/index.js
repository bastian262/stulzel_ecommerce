import React from 'react';
import { Helmet } from 'react-helmet';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { useCart } from '../../hooks/useCart';
import NavBar from '../../components/nav/nav';
import fotoGira1 from '../../assets/img/gira/fotogira1.png'
import arrow from '../../assets/img/gira/arrow.png'
import salogo from '../../assets/img/gira/sa_logo.png'
import fran from '../../assets/img/gira/fran.png'
import './gira.css'
const Gira = () => {
    let localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null ? [] : localS;
    const [onAdd, limpiarCarrito, eliminarProducto, productes, total,] = useCart(varFInal);
    return (
        <>
            <Helmet>
                <title>Gira Stulzel</title>
                <meta name="Gira" content="Gira" />
            </Helmet>
            <div className='fondo'>
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito={limpiarCarrito}
                    eliminarProducto={eliminarProducto}
                    productes={productes}
                    total={total}
                />
                <div className='gira'>
                    <div className='headerGira'>
                        <div className='nav_gira'>
                            <div className='flex-end'>
                                <span>insta</span>
                                <span>face</span>
                            </div>
                        </div>
                        <div className='title'>
                            <img src="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" />
                            <div>
                                <span className='extrabold'>SEMINARIO EDUCATIVO 2022</span>
                                <span className='bold'>GIRA NACIONAL <br /> STULZEL</span>
                            </div>
                        </div>
                        <div className='subtitle'>
                            <span>Santiago</span>
                            <span>Vi??a del Mar</span>
                            <span>La Serena</span>
                            <span>Concepci??n</span>
                            <span>Pto. Montt</span>
                            <span>Temuco</span>
                            <span>Antofagasta</span>
                        </div>
                    </div>
                    <div className='container-flex'>
                        <h3>??IMPERDIBLE!</h3>
                        <span className='comeback'>Vuelve la Gira Stulzel a 7 ciudades de Chile </span>
                        <span className='durant'>Durante los pr??ximos 6 meses Stulzel estar?? recorriendo las ciudades m??s importantes de Chile para llevar a todos los estilistas aficionados o profesionales del rubro de la barber??a, peluquer??a, belleza y afines, una de las escuelas educativas y formativas m??s importante de nuestro pa??s. 7 ciudades recibir??n a los exponentes m??s destacados de Stulzel para impartir y compartir toda la experiencia nacional e internacional en el uso de nuevas y cl??sicas t??cnicas de tratamientos capilares, colorimetr??a, barba y tambi??n recibiran todas las herramientas necesarias para tu negocio. </span>
                    </div>
                    <div className='fondoBlack'>
                        <div className='row-flex'>
                            <div className='col-2'>
                                <img src={fotoGira1} />
                            </div>
                            <div className='col-2 flex-column'>
                                <h2>Sorpr??ndete<br />con el programa</h2>
                                <span>Hemos dise??ado un programa educativo, colaborativo y expositivo en cada una de las ciudades en la que Stulzel estar?? presente, te sorprender??s con cada una de las actividades que hemos preparado junto a un tremendo equipo de profesionales para llevar a todo Chile este ambicioso proyecto y as?? compartir nuestro trabajo para que muchas personas puedan seguir creciendo y profesionaliz??ndose en el extenso y creativo mundo de la belleza.</span>
                                <strong>Descarga el cronograma, conoce los precios, los m??todos de pago y los requisitos para reservar tu cupo.</strong>
                                <div><button>Descargar <img src={arrow} /> </button></div>
                            </div>
                        </div>
                    </div>
                    <div className='fondoWhite'>
                        <div className='row-flex'>
                            <div className='col-2 flex-column'>
                                <div className='logo'>
                                    <img src={salogo} className="logo" />
                                </div>
                                <h2>Seminario certificado por Stulzel Academy</h2>
                                <span>Este seminario ser?? impartido con los m??s altos estandares de calidad, elaborado y desarrollado por <strong>Stulzel Academy</strong>, quien te har?? entrega de una certificaci??n y diploma por tu participaci??n, junto a esto tambi??n podr??s acceder a un desarrollo profesional aun m??s profundo y extenso con la academia m??s importante a nivel nacional.</span>
                            </div>
                            <div className='col-2 flex-column'>
                                <img src={fotoGira1} />
                            </div>
                        </div>
                    </div>
                    <div className='fondoBlack'>
                        <div className='row-flex'>
                            <h2 className='newtittle'>Conoce a nuestros expositores</h2>
                        </div>
                        <div className='row-flex wrap'>
                            <div className='col-2'>
                                <div className='card'>
                                    <div className='col-3'><img src={fran} /></div>
                                    <div className='col-7'>
                                        <span className='name'>FRAN ARANDA</span>
                                        <span className='address'>Brain On Academy / Espa??a</span>
                                        <span className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
                                    </div>

                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='card'>
                                    <div className='col-3'><img src={fran} /></div>
                                    <div className='col-7'>
                                        <span className='name'>FRAN ARANDA</span>
                                        <span className='address'>Brain On Academy / Espa??a</span>
                                        <span className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='row-flex wrap'>
                            <div className='col-2'>
                                <div className='card'>
                                    <div className='col-3'><img src={fran} /></div>
                                    <div className='col-7'>
                                        <span className='name'>FRAN ARANDA</span>
                                        <span className='address'>Brain On Academy / Espa??a</span>
                                        <span className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
                                    </div>

                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='card'>
                                    <div className='col-3'><img src={fran} /></div>
                                    <div className='col-7'>
                                        <span className='name'>FRAN ARANDA</span>
                                        <span className='address'>Brain On Academy / Espa??a</span>
                                        <span className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='row-flex wrap'>
                            <div className='col-2'>
                                <div className='card'>
                                    <div className='col-3'><img src={fran} /></div>
                                    <div className='col-7'>
                                        <span className='name'>FRAN ARANDA</span>
                                        <span className='address'>Brain On Academy / Espa??a</span>
                                        <span className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
                                    </div>

                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='card'>
                                    <div className='col-3'><img src={fran} /></div>
                                    <div className='col-7'>
                                        <span className='name'>FRAN ARANDA</span>
                                        <span className='address'>Brain On Academy / Espa??a</span>
                                        <span className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gira;