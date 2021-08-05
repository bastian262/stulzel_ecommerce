import React from 'react';
import MapIcon from '@material-ui/icons/Map';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import PublicIcon from '@material-ui/icons/Public';
import HttpsIcon from '@material-ui/icons/Https';
const Footer1 = () => {
    return ( 
        <>
        <div class="fondo2">
           <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <div class="mitad1"><MapIcon /></div>
                        <div class="mitad2">
                            <strong>Envío Gratis</strong> <br />
                            <span>En la Región Metropolitana por compras sobre $50.000</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mitad1"><AutorenewIcon /></div>
                        <div class="mitad2">
                            <strong>Despacho a todo Chile</strong><br />
                            <span>Despachamos dentro de las próximas 24 hrs de confirmada tu compra</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mitad1"><PublicIcon /></div>
                        <div class="mitad2">
                            <strong>Servicio al Cliente</strong> <br />
                            <span>¡Quedamos conectados hasta que recibas tu producto y mas allá!</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="mitad1"><HttpsIcon /></div>
                        <div class="mitad2">
                            <strong>100% Compra Segura</strong><br />
                            <span>El proceso de tu compra y tu información</span>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        </> 
    );
}
 
export default Footer1;