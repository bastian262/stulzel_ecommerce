import React,{useState, useEffect} from 'react';
import { useFormat } from '../../hooks/useFormat';
import {useCart} from '../../hooks/useCart';
import {useForm} from '../../hooks/useForm';
import { getCupon } from '../../api/cupon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { postOrder } from '../../api/orders';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ReactPixel from 'react-facebook-pixel';
import {postEvento} from '../../api/apiConversion';
import { Button } from 'antd';
import { useRedirect } from '../../hooks/useRedirect';
// import {hashString} from 'react-hash-string'
import Sha256 from 'sha256';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DetalleCheckout = ({tarifa, values2}) => {
    const productos = JSON.parse(localStorage.getItem("carrito"));
    const [,,,,total, ] = useCart(productos);
    const [format] = useFormat()
    const [ redirectWhatsApp,,, ] = useRedirect();
    const [value, setValue] = useState("retiro");
    const [open, setopen] = useState(false);
    const [mensaje, setmensaje] = useState("");
    const value2 = "webpay";
    const [tarifaFinal, setTarifaFinal] = useState(0);
    const [descuentoCupon, setDescuentoCupon] = useState(0);
    const [cuponObtenido, setCuponObtenido] = useState({});
    const [loading, setloading] = useState(false);
    const [values, onChange,] = useForm({
        cupon:''
    });
    const {cupon} = values;
    const {firstName, lastName, rut, direccion, ciudad, region, codigopostal, telefono, telefono2, correo,direccionB,nombreS,apellidoS,direccionS,localidadS,codigopostalS,regionS} = values2;

    useEffect(() => {
        if(value == "express"){
            setTarifaFinal(tarifa);   
        }
    }, [tarifa]);
    const handleChange = (event) => {
        setValue(event.target.value);
        if(event.target.value == "retiro" || event.target.value == "gratis")
        {
            setTarifaFinal(0);
        }
        if(event.target.value == "express")
        {
            setTarifaFinal(tarifa);
        }
    };
    const handleChange2 = (event) => {
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setopen(false);
    };
    const aplicarDescuento = async () => {
        const resultado = await getCupon(cupon);
        console.log(resultado);
        if(resultado[0].id > 0){
            const descuento = Math.trunc( total * (resultado[0].amount / 100));
            setDescuentoCupon(descuento);
            setCuponObtenido(resultado[0]);
        }
    }
    const submitOrden = async () => {   
        setloading(true);
        var array = [];
        var method = "";
        var method_id = "";
        if(firstName.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese un Nombre por favor");
        }else if(lastName.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese un Apellido por favor");
        }else if(rut.trim().length < 8){
            setopen(true);
            setmensaje("Ingrese un Rut por favor");
        }else if(direccion.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese una Dirección por favor");
        }else if(ciudad.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese un Ciudad por favor");
        }else if(parseInt(region) < 0){
            setopen(true);
            setmensaje("Ingrese una región por favor");
        }else if(telefono.trim().length < 8){
            setopen(true);
            setmensaje("Ingrese un teléfono por favor");
        }else if(telefono2.trim().length < 8){
            setopen(true);
            setmensaje("Ingrese un segundo teléfono por favor");
        }else if(correo.trim().length < 5){
            setopen(true);
            setmensaje("Ingrese un correo por favor");
        }else if(nombreS.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese un nombre para el envío por favor");
        }else if(apellidoS.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese un apellido para el envío por favor");
        }
        else if(direccionS.trim().length < 2){
            setopen(true);
            setmensaje("Ingrese un dirección para el envío por favor");
        }else if(parseInt(regionS) < 1){
            setopen(true);
            setmensaje("Ingrese una región para el envío por favor");
        }
        else
        {
            if(value === "retiro"){
                method = "Retiro en tienda";
                method_id = "local_pickup";
            }else if(value === "gratis"){
                method = "Envío gratis";
                method_id = "free_shipping";
            }else{
                method = "Envío Express";
                method_id = "starken";
            }
            productos.forEach(element => {
                
                const arregloTemporal = {
                    product_id: element.id,
                    quantity: element.cantidad
                }
    
                array.push(arregloTemporal);
    
            }); 
            var data;
            
            if(descuentoCupon > 0){
                data = {
                    payment_method: "webpay",
                    payment_method_title: "Webpay Plus",
                    set_paid: false,
                    status:"pending",
                    billing: {
                      first_name: firstName,
                      last_name: lastName,
                      address_1: direccion,
                      address_2: direccion,
                      city: ciudad,
                      state: region,
                      postcode: codigopostal,
                      country: "CL",
                      email: correo,
                      phone: telefono
                    },
                    shipping: {
                      first_name: nombreS,
                      last_name: apellidoS,
                      address_1: direccionS,
                      address_2: direccionS,
                      city: localidadS,
                      state: region,
                      postcode: codigopostalS,
                      country: "CL"
                    },
                    line_items: array,
                    shipping_lines: [
                      {
                        method_id: method_id,
                        method_title: method,
                        total: tarifaFinal.toString()
                      }
                    ],
                    coupon_lines:[
                        {
                            code:cuponObtenido.code
                        }
                    ]
                }
    
            }else{
                data = {
                    payment_method: "webpay",
                    payment_method_title: "Webpay Plus",
                    set_paid: false,
                    status:"pending",
                    billing: {
                      first_name: firstName,
                      last_name: lastName,
                      address_1: direccion,
                      address_2: direccion,
                      city: ciudad,
                      state: region,
                      postcode: codigopostal,
                      country: "CL",
                      email: correo,
                      phone: telefono
                    },
                    shipping: {
                      first_name: nombreS,
                      last_name: apellidoS,
                      address_1: direccionS,
                      address_2: direccionS,
                      city: localidadS,
                      state: region,
                      postcode: codigopostalS,
                      country: "CL"
                    },
                    line_items: array,
                    shipping_lines: [
                      {
                        method_id: method_id,
                        method_title: method,
                        total: tarifaFinal.toString()
                      }
                    ]
                }
            }
            const resultado = await postOrder(data);
            if(resultado.id > 0){
                const dateTime = Date.now();
                const timestamp = Math.floor(dateTime / 1000);
                const date = 
                [{
                    "event_name": "InitiateCheckout",
                    "event_time": timestamp,
                    "action_source": "website",
                    "event_source_url":"https://www.stulzel.com/checkout",
                    "user_data": {
                        "em": [
                            Sha256(correo)
                        ],
                        "ph": [
                            Sha256(telefono)
                        ]
                    },
                    "custom_data": {
                        "currency": "CLP",
                        "value": total + tarifaFinal - descuentoCupon
                    }
                }]
                await postEvento(date);
                const options = {
                    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
                    debug: false, // enable logs
                };
                const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
                ReactPixel.init("495580404127215",advancedMatching,options);
                ReactPixel.track("InitiateCheckout");
                localStorage.setItem("carrito", JSON.stringify([]));
                // var url = "http://localhost:27017/";
                var url = "https://webpay-react.herokuapp.com/"
                const amount = total + tarifaFinal - descuentoCupon;
                window.location.href =`${url}api/createTransaction?buyOrder=${resultado.id}&sessionId=${resultado.id}&amount=${amount}`
            }
        }
        setloading(false);
    }

    return ( <>
        <h2>Tu pedido</h2>
        
        {productos.length > 0 ?
            <>      
                <div className="detalles" style={{fontWeight:"500"}}>
                    {productos.map((element) => {
                        return (
                            <div class="details">
                                <div className="flex-start"> 
                                    <div class="imagen">
                                        <img src={element.url} alt="imagenCarrito" width="50" />
                                    </div>
                                    <div class="nombre">
                                        <span class="nombre2">
                                            {element.nombre} <strong>x {element.cantidad}</strong> 
                                        </span> 
                                    </div>
                                </div>
                                <div className="precio">
                                   ${format(element.precio)}
                                </div>
                                
                            </div>
                        )
                    })
                    }
                </div>
                <div className="cuadro" style={{fontWeight:"500"}}>
                    <div class="subtotal2">
                        <div>
                            <span>Subtotal: </span>
                            <span>  
                                ${format(total)}
                            </span>
                        </div>
                        {descuentoCupon > 0 ? 
                            <div>
                                <span>Descuento: </span>
                                <span>      
                                    ${format(descuentoCupon)}
                                </span>
                            </div>
                            :
                            null
                        }
                    </div>
                    <div class="envios">
                        <span className="spanete">Envío (Escoge tu opción de envío)</span>
                        <div class="campo">
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="retiro" control={<Radio color="primary" />} label="Retiro En tienda" />
                                    {values2.region == 1 && total > 50000?
                                        <>
                                            <div className="flex-b">
                                                <FormControlLabel value="express" control={<Radio color="primary" />} label="Envío Express (24 a 48 horas hábiles)" /> <span>${format(tarifa)}</span>
                                            </div>
                                            <div className="flex-b">
                                                <FormControlLabel value="gratis" control={<Radio color="primary" />} label="Envío gratis (Entre 4 y 7 días hábiles)" />
                                            </div>
                                        </>
                                        :
                                            tarifa == 0 ? 
                                            <>
                                                <span>Lo sentimos, no tenemos un metodo de envío para tu direccion. Por favor, haz click en el siguiente botón para que te comuniques con nuestro equipo de ventas, asi te podremos ayudar a resolver el envío a tu zona.</span>
                                                <button className="whatsapp" onClick={() => redirectWhatsApp("56972321555")}>Enviar WhatsApp</button>
                                            </>
                                            :
                                            <div className="flex-b">
                                                <FormControlLabel value="express" control={<Radio color="primary" />} label="Envío Express (24 a 48 horas hábiles)" /> <span>${format(tarifa)}</span>
                                            </div>
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div class="subtotal">
                        <strong>Total: </strong>
                        <strong>  
                            ${format(total + tarifaFinal - descuentoCupon)}
                        </strong>
                    </div>
                </div>
                <div className="cuadro2" style={{fontWeight:"500"}} >
                    <div className="campo">
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value2} onChange={handleChange2}>
                                <FormControlLabel value="webpay" control={<Radio color="primary" />} label="Transbank Webpay Plus" />
                            </RadioGroup>
                        </FormControl>
                        <img src="https://admin.stulzel.com/wp-content/plugins/transbank-webpay-plus-rest/libwebpay/images/webpay.png" />
                    </div>
                    <span>Permite el pago de productos y/o servicios, con tarjetas de crédito, débito y prepago a través de Webpay Plus</span>
                </div>
                <div className="cuponera" style={{fontWeight:"500"}}>
                    <span>Si tienes un código de cupón, APLÍCALO.</span>
                    <div className="inputCupon">
                        <input 
                            type="text" 
                            placeholder="Código de cupón" 
                            value={cupon}
                            name="cupon"
                            id="cupon"
                            onChange={onChange}
                        />
                    </div>
                    <div className="botonCupon">
                        <button onClick={() => aplicarDescuento()}>Aplicar cupón</button>
                    </div>
                </div>
                <div className="botonFinalizarCompra">
                    <Button type="primary" loading={loading} onClick={() => submitOrden()}>
                        Finalizar compra
                    </Button>
                </div>
                <div className="botonFinalizarCompra">
                    <img src="https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/07/trust-symbols_b-1024x108.jpg" width="100%" />
                </div>
                <div className="botonFinalizarCompra">
                    <h3>Experiencia de compra</h3>
                    <div className="exp">
                        <img src="https://themedemo.commercegurus.com/shoptimizer/wp-content/uploads/sites/52/2018/05/reviews02-150x150.jpg"  width="60"/>
                        <span>Busque con facilidad los productos, pagué con facilidad y recibí mis productos sin problemas. Excelente de experiencia de compra.</span>
                    </div>
                </div>
            </>
        : null
        
        }
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={"error"}>
                {mensaje}
            </Alert>
        </Snackbar>
    </> );
}
 
export default DetalleCheckout;