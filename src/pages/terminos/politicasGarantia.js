import React from 'react';

import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import { useCart } from '../../hooks/useCart';

const PoliticasGarantia = () => {
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
                        <h2>POLITICAS DE GARANTÍA Y DEVOLUCIÓN</h2>
                        <div className=''>
                            <span>
                            Todos los clientes que hayan comprado productos en Stulzel.com tienen derecho a la garantía legal que establece SERNAC, nuestras políticas se ajustan a dicha garantía:
                            </span>
                            <br/>
                            <strong>
                                Políticas de Cambios y Devoluciones:
                            </strong><br/>
                            <span>
                            En caso que el producto que hayas comprado presente alguna falla, tendrás derecho a la garantía legal, que establece que tienes hasta 3 meses desde que el producto llego a tus manos para escoger una de las siguientes 3 alternativas:<br/>
• Cambio del producto. <br/>
• Devolución del dinero. <br/>
• Reparación gratuita del producto. <br/>
Para acceder a esta garantía el producto que devuelvas debe estar en su empaque original, con todas sus cosas (piezas, manuales, etiquetas), sin uso, impecable (limpio, sin manchas, rayas ni pelos).
Cualquiera sea tu opción debes contar con la boleta de compra. Recuerda que la boleta te la enviamos siempre con tu pedido y puedes solicitarla directamente a tu correo electrónico al momento de realizar la compra. Recuerda que: (i) El cambio o devolución de un producto aplica para fallas atribuibles a la fabricación del producto y no a la mala manipulación. (ii) Si para un producto se recomienda su armado o instalación por un servicio autorizado por el fabricante, el daño o deterioro no debe ser atribuible a un armado o instalación deficiente. (iii) No se hace efectiva la devolución o cambio si el producto tiene fecha de vencimiento vencida al momento de solicitar la devolución.
Para solicitar tu garantía legal deberás enviarnos un correo a servicioalcliente@stulzel.com  para contarnos cuál fue el problema y coordinar el procedimiento a seguir.
                            </span><br/>
                            <strong>
                                Cambio de producto
                            </strong><br/>
                            <span>Stulzel  realizará el cambio del producto en un plazo de 3 a 5 días hábiles desde la recepción del mismo, si fuese presencial podría ser hecho en el mismo momento o bien, posteriormente se coordinara el envío a cargo de la empresa. Todo dependerá del Stock disponible al momento de solicitar el cambio.
Para acceder a esta garantía el producto que devuelvas debe estar en su empaque original, con todas sus cosas (piezas, manuales, etiquetas), sin uso, impecable (limpio, sin manchas, rayas ni pelos).
                            </span><br/>
                            <strong>
                            Devolución del dinero
                            </strong><br/>
                            <span>Los reembolsos de dinero se hacen según el método de pago que elegiste. Si pagaste con transferencia electrónica o tarjeta de débito, la devolución se hará con transferencia electrónica. <br/>
Si pagaste con tarjeta de crédito, te solicitaremos los datos de tu tarjeta para solicitar la anulación del cargo a Transbank. Esto puede tomar hasta 7 días hábiles. <br/>
No realizamos la devolución del dinero de los gastos de envío del producto ya que es un servicio entregado en su totalidad y no es parte de los productos adquiridos. <br/>
</span>
                        </div>
                    </div>
                </div>
                <Footer1 />
                <Footer2 />
                <BtnWhatsApp />
            </div>
        </>

    );
}
 
export default PoliticasGarantia;