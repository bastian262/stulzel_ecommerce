import React from 'react';

import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import { useCart } from '../../hooks/useCart';

const PoliticasPrivacidad = () => {
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
                    </div>
                </div>
            </div>
                <Footer1 />
                <Footer2 />
                <BtnWhatsApp />
        </>

    );
}
 
export default PoliticasPrivacidad;