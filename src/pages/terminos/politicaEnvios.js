import React from 'react';

import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import { useCart } from '../../hooks/useCart';

const PoliticaEnvios = () => {
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);

    return ( 
        <>
            <div className="fondo" id="topProducts">
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div className='negro'>
                    <div className='contenedor politicas'>
                        <h2>POLITICAS DE ENVÍO</h2>
                        <div className=''>
                            <strong>Despacho de productos.</strong> <br/>
                            <span>1. Es responsabilidad del comprador proveer una dirección en la que haya gente para recibir paquetes en el horario de entrega. <br/>
2. Stulzel enviará un mail confirmando el despacho el mismo día en que se realice éste, con información del Courier por el que ha sido enviado. <br/>
3. Los retrasos provocados por ausencia del comprador o de un tercero habilitado para recibir la compra al momento de la entrega; por dirección incorrecta o incompleta; por negativa del usuario a aceptar el envío y el cambio de domicilio, serán de responsabilidad del comprador.<br/>
4. Con respecto a despachos, solo se despachan pedidos pagados solo con la plataforma de pago presente en el sitio web,  no se acepta efectivo, para despacho en Santiago será de un plazo de 48 a 72 hrs dependiendo si el envío se realiza con móviles propios o despacho externo; en regiones estaremos sujetos al envió de a los plazos de las empresas de despacho externo. No es posible agendar un horario específico de entrega.<br/>
5. Devoluciones en Regiones<br/>
Si usted es de regiones, deberá enviar el producto por envío pagado a través de la empresa de Despacho que le indique el área de Post venta de Stulzel, si el producto se devuelve y no cumple con las políticas de devolución, no se podrá hacer uso de la garantía, será devuelto por pagar a su comuna.

                            </span>
                        </div>
                        <br/>
                    </div>
                </div>
                <Footer1 />
                <Footer2 />
                <BtnWhatsApp />
            </div>
        </>

    );
}
 
export default PoliticaEnvios;