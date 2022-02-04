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
                     <span>Las compras realizadas en Stulzel.com, no se podrá ejercer derecho de retracto, en conformidad Art. 3° bis, letra b, ley N°19496. Es decir no se podrá realizar cambios por problemas de compatibilidad o por el no gusto del cliente.
Stulzel.com NO cuenta con garantía voluntaria de satisfacción.</span><br/>   
<span>
    
Solo se aceptarán cambios y/o devoluciones en caso de que existan errores en la descripción del producto adquirido. Ante esta situación debe tener en consideración lo siguiente:
</span><br/>
<span>
1. El cliente recibirá una llamada del servicio de post venta de Stulzel posterior a a la recepción del producto, donde se confirmará la recepción y revisión correcta del producto. Es ahí el momento donde el cliente debe indicar que recibió el producto con cualquier falla o disconformidad. Después de este plazo, no se recibirán solicitudes.    
</span><br/>
<span>
2. El producto no debe haber sido usado.   
</span><br/>
<span>
    3. Debe mantener el empaque original, manteniendo sus plásticos, manuales y accesorios.
</span><br/>

<strong>
    
OTRAS CONSIDERACIONES
</strong><br/>
<span>
    
1. Stulzel no se hará cargo de los costos de los envíos de cambios que no sigan  las consideraciones mencionadas anteriormente.
</span><br/>
<span>
2. Stulzel no recibirá productos para garantía, que vengan abiertos y/o alterados por terceros.
    
</span><br/>
<span>
3. Nos reservamos el derecho a rechazar un producto en garantía si este no cumple con lo anteriormente señalado.
    
</span><br/>

<strong>
    
DEVOLUCIÓN DE DINERO
</strong> <br />
<span>
Los reembolsos de dinero, si precedieren, se hacen según el método de pago que elegiste. Si pagaste con transferencia electrónica o tarjeta de débito, la devolución se hará con transferencia electrónica.
    
</span><br/>
<span>
    
Si pagaste con tarjeta de crédito, te solicitaremos los datos de tu tarjeta para solicitar la anulación del cargo a Transbank. Esto puede tomar hasta 7 días hábiles.
</span><br/>
<span>
No realizamos la devolución del dinero de los gastos de envío del producto ya que es un servicio entregado en su totalidad y no es parte de los productos adquiridos
    
</span><br/>


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