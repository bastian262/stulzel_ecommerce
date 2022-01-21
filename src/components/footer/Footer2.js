import React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { Link } from 'react-router-dom';
const Footer2 = () => {
    const registrarPixel = () => {
        const options = {
            autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
            debug: false, // enable logs
        };
        const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
        ReactPixel.init("495580404127215",advancedMatching,options);
        ReactPixel.track("FindLocation");
    }
    return (  
        <>
            <footer>
                <div className="row">
                    <div class="col-3">
                        <span>Donde estamos</span>
                        <strong>Alcántara 385, Las Condes,</strong>
                        <span>Estación Alcántara, Línea 1. Santiago, Chile.</span>
                    </div>
                    <div class="col-3">
                        <span>MAPA</span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.1731685614373!2d-70.59105498495289!3d-33.41872938078303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf4b2a444e17%3A0x6e7ecc29a5717263!2sStulzel%20-%20Todo%20Para%20Tu%20Barber%C3%ADa!5e0!3m2!1ses!2scl!4v1628198007928!5m2!1ses!2scl" class="iframeGoogle" allowfullscreen="" loading="lazy" title="map" onClick={registrarPixel}></iframe>
                    </div>
                    <div class="col-3">
                        <span>LINKS DE AYUDA</span>
                        <Link to="/micuenta">Mi Cuenta</Link>
                        <Link to="/quienessomos">Quienes Somos</Link>
                        <Link to="/contacto">Contáctanos</Link>
                        <a href="/politicas-privacidad">Políticas de privacidad</a>
                        <a href="/politicas-envio">Políticas de envío</a>
                        <a href="/politicas-garantia">Garantía y devolución</a>
                    </div>
                    <div class="footerBajo">
                        <div>
                            <strong>© Stulzel 2021 – Todos los derechos</strong>
                            <span>Hecho en  🇨🇱 por Bastian Orellana</span>
                        </div>
                        <img src="https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/05/credit-cards.png" alt="tarjetas" />
                    </div>
                </div>
            </footer>      
            
        </>
    );
}
 
export default Footer2;