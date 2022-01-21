import React, {useEffect} from 'react';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { useCart } from '../../hooks/useCart';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ReactPixel from 'react-facebook-pixel';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Contacto = () => {
    const classes = useStyles();
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total,] = useCart(localS);
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
        debug: false, // enable logs
    };
    const advancedMatching = { em: 'bastianorellanaf@gmail.com' };

    const redireccionar = (numero) => {
        ReactPixel.init("813393342669464",advancedMatching,options);
        ReactPixel.trackSingle("813393342669464", "Contact");
         const url = `https://wa.me/${numero}`; 
         window.location.href = url;
    }
    useEffect(() => {
        window.location.href = "#principal"
    }, []);
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
                <div class="mapa" id="principal">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.1731685614373!2d-70.59105498484561!3d-33.41872938078303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf4b2a444e17%3A0x6e7ecc29a5717263!2sStulzel%20-%20Todo%20Para%20Tu%20Barber%C3%ADa!5e0!3m2!1ses!2scl!4v1630081322956!5m2!1ses!2scl" width="800" height="600" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contenedor">
                    <div class="raw">
                        <div class="col1">
                            <h3>Atención de Clientes</h3>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>Horario de atención de la tienda</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Los horarios de atención de nuestras oficinas son los siguientes:
                                    <br/>
                                    Lunes a viernes de 10:30 a 19:30 Horas 
                                    <br/>
                                    Sábado de 10:30 a 14:30 Horas
                                    <br/>
                                    Los horarios son continuados.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>Horario de atención de canales digitales</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Los horarios de atención de nuestros canales digitales son los siguientes:
                                    <br/>
                                    Lunes a viernes de 10:30 a 19:30 Horas 
                                    <br/>
                                    Sábado de 10:30 a 14:30 Horas
                                    <br/>
                                    Los horarios son continuados.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div class="col1">
                            <span className="needhelp">¿Necesita Ayuda?</span>
                            <p className="p">WhatsApp Ventas</p>
                            <div class="whatsapp2" onClick={() => redireccionar("56972321555")}>
                                <WhatsAppIcon class="iconoo" />
                                <span>+569 7232 1555</span>
                            </div>
                            <p className="p">Email Ventas</p>
                            <div class="whatsapp2">
                                <EmailRoundedIcon class="iconoo" />
                                <span>gerenciaventas@stulzel.com</span>
                            </div>
                            <p className="p">WhatsApp Servicio al Cliente</p>
                            <div class="whatsapp2"  onClick={() => redireccionar("56934240942")}>
                                <WhatsAppIcon class="iconoo" />
                                <span>+569 3424 0942</span>
                            </div>
                            <p className="p">Email Servicio al Cliente</p>
                            <div class="whatsapp2">
                                <EmailRoundedIcon class="iconoo" />
                                <span>servicioalcliente@stulzel.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BtnWhatsApp />
            <Footer1 />
            <Footer2 />
        </> 
    );
}
 
export default Contacto;