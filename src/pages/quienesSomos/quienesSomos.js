import React from 'react';
import NavBar from '../../components/nav/nav';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import { useCart } from '../../hooks/useCart';
const QuienesSomos = () => {

    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(localS);

    return ( <>

         <div class="fondo">
            <NavBar
                onAdd={onAdd}
                limpiarCarrito = {limpiarCarrito}
                eliminarProducto = {eliminarProducto}
                productes = {productes}
                total = {total}
            />
            <div class="contenedorFluido">
                <div className="contenedor">
                    <h2>SOMOS STULZEL</h2>
                    <div class="row">
                        <div class="col-1">
                            <div class="span">
                                <span>¡Nuestra mayor meta siempre, es mejorar y crecer!</span>
                            </div>
                            <div class="imagen">
                                <img src="https://admin.stulzel.com/wp-content/uploads/2020/09/edison-torres-ceo-stulzel.jpg" />
                            </div>
                        </div>
                        <div class="col-1 d-flex">
                            <div className="detallesQuienes">
                                <span>Entre nuestros principales intereses, se encuentra el ser un aporte constante al mundo de la Barbería y el Estilismo, buscando contribuir en el crecimiento de los profesionales.</span>
                                <span>¡Y por cierto! Además de todo lo anterior, también comercializamos productos y servicios asociados a esta actividad.</span>
                                <span>Bienvenidos a Stulzel.</span>
                            </div>
                            <div className="datos">
                                <span> Edison Torres Silva </span>
                                <span> CEO STULZEL CORP. </span>
                                <a> Instagram: @ceotorres </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor">
                <div class="row">
                    <div class="col-1">
                        <div class="imagen">
                            <img className="imagenStulzel" src="https://admin.stulzel.com/wp-content/uploads/2020/10/Logo-SF-dorado.png" />
                        </div>
                    </div>
                    <div class="col-1 d-flex">
                        <div className="detallesQuienes">
                            <span className="unpoco">Un poco de nosotros</span>
                            <h2>¿QUE HACEMOS?</h2>
                            <span>Somos una empresa que importa y comercializa productos de los 5 continentes, buscamos cubrir los requerimientos del rubro de Barbería y Peluquería.</span>
                            <span>Hacemos giras a lo largo de todo el país compartiendo educación con los referentes más importantes de la actividad, tanto nacionales como internacionales, hacemos cursos de barberías, seminarios y WorkShop por todo Chile.</span>
                            <span>Actualmente estamos desarrollando marcas propias, la primera marca que hemos creado es Buffalo, es una marca que comercializa productos capilares y para la barba, tiene un explosivo éxito y está actualmente siendo comercializada en todo Chile</span>
                            <span>¡Eso hacemos y mucho más!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contenedorFluido">
                <div className="contenedor2">
                    <div class="row">
                        <div class="col-1">
                            <h3>Síguenos en instagram</h3>
                            <div class="span2">
                                <span>Síguenos y podrás enterarte de ofertas, descuentos, eventos y actividades que desarrollamos continuamente, así no te perderás ninguna de las novedades que tenemos cada semana.</span>
                            </div>
                            <div class="span2">
                                <span>¡Seguimos conectados!.</span>
                            </div>
                            <div className="botonSiguenos">
                                <button>Siguenos AQUÍ</button>
                            </div>
                        </div>
                        <div class="col-1 d-flex">
                            <img src="https://admin.stulzel.com/wp-content/uploads/2021/01/stulzelcl-instagram.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor">
                <div class="row d-flex">
                    <div class="col-1 d-flex">
                        <div className="detallesQuienes">
                            <span className="unpoco">Desde aquí ocurre todo, nuestras oficinas, nuestra casa</span>
                            <h2>OFICINAS STULZEL ALCANTARA 385, LAS CONDES, SANTIAGO</h2>
                            <span>Nuestras oficinas centrales están en la ciudad de Santiago de Chile, en Alcántara 385, Las Condes, metro estación Alcántara, a poco más de dos cuadras de Av. Apoquindo.</span>
                            <span>Contamos en ellas con ShowRoom de productos, sala de clases, sala de streaming, oficinas administrativas y mucho más, desde aquí operamos todos nuestros proyectos, es un lugar acogedor y cómodo para recibir a quienes por diversos motivos nos visitan, lo mejor de todo, es que tenemos todo en un solo lugar!</span>
                            <span>¡Aquí eres siempre bienvenido!</span>
                            {/* <span>¡Eso hacemos y mucho más!</span> */}
                        </div>
                    </div>
                    <div class="col-1 padding">
                        <div class="imagen">
                            <img src="https://admin.stulzel.com/wp-content/uploads/2021/01/casa-stulzel-oficina.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor">
                <div className="row">
                    <span className="unpoco">
                        Conectando a Chile con la mejor educación de Barbería del mundo
                    </span>
                    <div className="titulaso">
                        <h3>EDUCACIÓN INTERNACIONAL</h3>
                    </div>
                    <span className="spen">Desde el principio quisimos acercar a Chile con los mejores educadores del mundo, lograr contribuir con un UP GRADE en la educación de los profesionales de nuestro país, estos grandes exponentes siguen hasta hoy en continua conexión con nosotros, y por supuesto con grandes deseos de siempre volver, y lo harán sin dudas.</span>
                    <span className="spen">Entre muchos que hemos podido invitar a Chile, siempre hemos destacado a quienes han dejado una huella imborrable entre nosotros, uno de ellos es SEU Elias de Brasil, y mencionamos con mucha estima a nuestros amigos Fran Aranda e Ismael de Mora de España, ellos han sido sin duda personas que no solo son excelentes profesionales, sino que dejaron un legado sin precedentes y permitieron construir un lazo que tendrá como resultado una relación de largo plazo con Chile.</span>
                </div>
                <div className="raw-flex">
                    <div className="col">  
                        <img src="https://admin.stulzel.com/wp-content/uploads/2019/07/seueliascop-600x671.jpg" />
                        <div>
                            <span>Seu Elías</span>
                            <span>BRASIL 🇧🇷</span>
                            <a>Instagram: @seuelias</a>
                        </div>
                    </div>
                    <div className="col">  
                        <img src="https://admin.stulzel.com/wp-content/uploads/2021/01/fran-aranda-300x300.jpg" />
                        <div>
                            <span>Fran Aranda</span>
                            <span>ESPAÑA 🇪🇸</span>
                            <a>Instagram: @franaranda_</a>
                        </div>
                    </div>
                    <div className="col">  
                        <img src="https://admin.stulzel.com/wp-content/uploads/2021/01/ismael-de-mora-241x300.jpg" />
                        <div>
                            <span>Ismael De Mora</span>
                            <span>ESPAÑA 🇪🇸</span>
                            <a>Instagram: @ismaeldemora_</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer1 />
        <Footer2 />
    </> );
}
 
export default QuienesSomos;