import React, {useState} from 'react';
import { useHistory } from 'react-router';
import DetalleCheckout from '../../components/checkout/detalleCheckout';
import FormCheckout from '../../components/checkout/formCheckout';
import { useForm } from '../../hooks/useForm';
const Checkout = () => {
    const history = useHistory();
    const redi = () => {
        history.push("/");
    }
    const [tarifa, setTarifa] = useState(0);
    const [values, onChange,setvalues] = useForm({
        firstName:'',
        lastName:'',
        rut:'',
        direccion:'',
        numero:'',
        comuna:'',
        ciudad:'',
        region:'',
        codigopostal:'',
        telefono:'',
        telefono2:'',
        correo:'',
        boletaFactura:'',
        same:'',
        nombreB:'',
        apellidoB:'',
        rutB:'',
        direccionB:'',
        telefonoB:'',
        correoB:'',
        giroB:'',
        nombreS:'',
        apellidoS:'',
        companyS:'',
        direccionS:'',
        localidadS:'',
        regionS:'',
        codigopostalS:'',
        detalle:''
    });
    return ( 
        <>
            <div className="fondo">
                <div class="header4">
                    <div className="contenedor">
                        <div className="flex-b">
                            <img src="https://stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt=""/>
                            <div class="volver">
                                <button onClick={() => redi()}>Volver a la tienda</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contenedor">
                    <div class="tituloCheck">
                        <h2>Checkout</h2>
                    </div>
                    <div class="raw-flex2">
                        <div class="col3">
                            <div class="redondo">
                                1
                            </div>
                            <span>
                                Añadir productos
                            </span>
                        </div>
                        <div class="col3">
                            <div class="redondo">
                                2
                            </div>
                            <span>
                                Envío y compra
                            </span>
                        </div>
                        <div class="col3">
                            <div class="redondo">
                                3
                            </div>
                            <span>
                                Confirmación de compra
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contenedor">
                    <div className="raw">
                        <div className="col-m">
                            <FormCheckout
                                onChange={onChange}
                                values={values}
                                setvalues={setvalues}
                                setTarifa={setTarifa}
                            />
                        </div>
                        <div className="col-s">
                            <DetalleCheckout
                                tarifa={tarifa}
                                values2={values}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </> 
    );
}
 
export default Checkout;