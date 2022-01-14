import React from 'react';

import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import { useCart } from '../../hooks/useCart';

const TerminosyCondiciones = () => {
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
                        <h2>POLITICAS DE PRIVACIDAD</h2>
                        <div className=''>
                            <strong>1.	Generalidades.</strong> <br/>
                            <span>La experiencia al comprar en stulzel.com, en adelante “este sitio web” es cómoda, fácil y segura. En Stulzel trabajamos con altos estándares de seguridad y toda información que los usuarios registran en el Sitio se mantiene de forma estrictamente confidencial.
                            Sus datos personales le corresponden solo a usted y este sitio web es responsable de no revelar ninguna clase de información que le pertenezca (como email, números de IP, etc), salvo su expresa autorización o fuerzas de naturaleza mayor de tipo legal que lo involucren
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>2.	Medidas de Seguridad.</strong> <br/>
                            <span>Para cumplir los objetivos de seguridad, Stulzel cuenta con la tecnología de SSL (Secure Sockets Layer) que asegura, tanto la autenticidad del Sitio, como el cifrado de toda la información que nos entrega el usuario. Es decir, cuando un usuario se registra y entrega información de carácter personal, el navegador por el cual ejecuta el acto se conecta al Sitio a través de un protocolo SSL que acredita que el usuario se encuentra efectivamente en el Sitio y en los servidores correspondientes. Este acto se aprecia con la aparición del código HTTPS en la barra de direcciones del navegador. Esta tecnología permite que información como nombre, dirección, y datos de tarjetas bancarias, sean codificadas antes para que no pueda ser leída cuando viaja a través de internet. Todos los certificados SSL se crean para un servidor particular, en un dominio especifico y para una entidad comercial comprobada.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>3.	Obtención de su información.</strong> <br/>
                            <span>Todos sus datos personales consignados en este sitio son suministrados por usted mismo, haciendo uso entero de su libertad. La información aquí almacenada solo comprende datos básicos ingresados mediante formulados de contacto, de pedidos, comentarios u otros similares. Al registrarse en el Sitio se le solicitaría al usuario solamente aquella información necesaria para el pago del producto y su posterior envío. En ningún caso, esta información será comunicada o trasmitida a terceros ajenos a Stulzel
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>4.	Declaración de Privacidad.</strong> <br/>
                            <span>Stulzel no comunica ni cede a terceros, bajo ninguna circunstancia, los datos de carácter personal registrados por los usuarios del Sitio. Sin prejuicio de lo anterior, esta información podrá ser trabajada por Stulzel y sus asociados, únicamente para fines estadísticos y/o para obtener una mejor comprensión de los perfiles de los usuarios y así, mejorar los productos ofrecidos en el Sitio y para cumplir adecuadamente con el despacho y la entrega de los productos en el lugar registrado por los usuarios.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>5.	Uso de la información.</strong> <br/>
                            <span>Al proporcionarnos sus datos personales, estando de acuerdo con la Política de Privacidad aquí consignada, nos autoriza para el siguiente uso de su información: a) para el fin mismo por lo cual se ha suministrado; b) para considerarlo dentro de nuestras estadísticas de tráfico; c) para orientar mejor los servicios aquí ofrecidos y valorarlos a su criterio, y d) para enviar de comunicaciones promocionales o publicitarias enviadas por correo electrónico, sin prejuicio de lo anterior, en cualquier tiempo, el usuario podrá solicitar la suspensión de las mismas, haciendo “clic” en el link dispuesto para ello.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>6.	Uso de los cookies.</strong> <br/>
                            <span>El uso de cookies y su dirección IP, tomados por este sitio, se realiza solo con la finalidad de mantenerles un sitio de acuerdo con sus preferencias locales (tales como navegador web usado, sistema operativo, ISP, etc.). Las “cookies” permiten entregar un contenido ajustado a los intereses y necesidades de nuestros usuarios/visitantes.
 <br/>El sitio web se reserva el derecho de modificar, rectificar, alterar, agregar o eliminar cualquier punto del presente escrito en cualquier momento y sin previo aviso, siendo su responsabilidad el mantenerse informado del mismo para una adecuada administración de su información.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>7.	Otros sitios web.</strong> <br/>
                            <span>A partir de la navegación en el Sitio, el usuario pudiese redireccionarse a otros sitios. Stulzel no es responsable de las políticas de privacidad y seguridad de dichos sitios.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>8.	Propiedad de la información.</strong> <br/>
                            <span>Todos los contenidos incluidos en este sitio, como textos, material gráfico, logotipos, iconos de botones, códigos de fuente, imágenes, audio clips, descargas digitales, y compilaciones de datos, son de propiedad de IMPORTADORA & EXPORTADORA TOFU SPA (Stulzel)  o de sus proveedores de contenidos, y están protegidos por las leyes chilenas e internacionales sobre propiedad intelectual. Los materiales gráficos, logotipos, encabezados de página, frases publicitarias, iconos de botones, textos escritos y nombres de servicios incluidos en este sitio son marcas comerciales, creaciones o imágenes comerciales de cada uno de nuestros proveedores o de Stulzel según corresponda.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>9.	Datos personales.</strong> <br/>
                            <span>El usuario registrado podrá ejercer sus derechos de información, modificación, eliminación y/o cancelación de sus datos personales cuando lo estime pertinente, según lo establecido en la ley Nº 19.628 sobre protección de la vida privada.
                            </span>
                        </div>
                        <br/>   
                        <div className=''>
                            <strong>10.	Precios informados en este Sitio.</strong> <br/>
                            <span>Mientras aparezcan en este sitio, los precios informados estarán a tu disposición, aunque no sean los mismos que ofrezcan en otros canales de venta en Stulzel como tiendas físicas, catálogos, redes sociales u otros medios de comunicación. <br/> Cualquier cambio en las informaciones publicadas en este sitio, incluyendo las referidas a mercaderías, servicios, precios, existencias y condiciones, promociones y ofertas, se podrá realizar en cualquier momento y sin previo aviso.
                            </span>
                        </div>
                        <br/>
                        <div className=''>
                            <strong>11.	Promociones.</strong> <br/>
                            <span>Las promociones que se ofrezcan en este sitio no serán necesariamente las mismas que ofrezcan otros canales de venta de Stulzel.<br/>Cualquier promoción podrá ser modificada o dada por terminada en cualquier momento y sin previo aviso. No obstante a lo anterior, si una promoción se agota o se termina el tiempo válido por promoción, el valor comercial podrá modificarse al normal o sin descuento.
                            </span>
                        </div>
                        <br/>
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
 
export default TerminosyCondiciones;