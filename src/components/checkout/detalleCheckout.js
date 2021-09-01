import React,{useState, useEffect} from 'react';
import { useFormat } from '../../hooks/useFormat';
import {useCart} from '../../hooks/useCart';
import {useForm} from '../../hooks/useForm';
import { getCupon } from '../../api/cupon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
const DetalleCheckout = ({tarifa, values2}) => {
    const productos = JSON.parse(localStorage.getItem("carrito"));
    const [,,,,total, ] = useCart(productos);
    const [format] = useFormat()
    const [value, setValue] = useState("retiro");
    const [value2, setValue2] = useState("webpay");
    const [tarifaFinal, setTarifaFinal] = useState(0);
    const [descuentoCupon, setDescuentoCupon] = useState(0);
    const [values, onChange, setvalues] = useForm({
        cupon:''
    });
    const {cupon} = values;
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

    const aplicarDescuento = async () => {
        const resultado = await getCupon(cupon);
        console.log(resultado);
        if(resultado[0].id > 0){
            const descuento = Math.trunc( total * (resultado[0].amount / 100));
            setDescuentoCupon(descuento);
        }
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
                                                <button className="whatsapp">Enviar WhatsApp</button>
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
                        <img src="https://stulzel.com/wp-content/plugins/transbank-webpay-plus-rest/libwebpay/images/webpay.png" />
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
                    <button>Finalizar compra</button>
                </div>
                <div className="botonFinalizarCompra">
                    <img src="	https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/07/trust-symbols_b-1024x108.jpg" width="100%" />
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
    </> );
}
 
export default DetalleCheckout;