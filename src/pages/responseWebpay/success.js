import React,{ useEffect, useState} from 'react';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import NavBar from '../../components/nav/nav';
import ReactPixel from 'react-facebook-pixel';
import { useHistory, useParams } from 'react-router';
import { useFormat } from '../../hooks/useFormat';
import { useCart } from '../../hooks/useCart';
import { getOrderById } from '../../api/orders';
const Success = () => {
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [response, setResponse] = useState({
        status: '',
        buy_order: '',
        authorization_code: '',
        card_detail: {card_number: ''},
        amount: '',
        response_code: '',
        payment_type_code: '',
        installments_number: '',
        installments_amount: ''
    })
    console.log(response)
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    const {id} = useParams()
    const [format] = useFormat();
    const history = useHistory();
    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        console.log(id)
        const resultado = await getOrderById(id)
        console.log(resultado)
    }
    
    return ( 
        <>
            <div className="fondo" style={{background:'black'}}>
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div className='containerSuccess'>
                    <div className='rowSuccess'>
                        <div className='titleSucces'>
                            <img src="https://admin.stulzel.com/wp-content/uploads/2021/08/Recurso-5.png" alt="statusSuccess"/>
                            <div>
                                <span>Tu transacción <br /> ha sido Exitosa</span>
                            </div>
                        </div>
                        <div className='space'></div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Estado : </span>
                            <span> {response.status} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Orden de Compra : </span>
                            <span> {response.buy_order} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Código de autorización : </span>
                            <span> {response.authorization_code} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Últimos dígitos tarjeta : </span>
                            <span> XXXX XXXX XXXX {response.card_detail.card_number} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Monto : </span>
                            <span> {response.amount} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Código de respuesta : </span>
                            <span> {response.response_code} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Tipo de pago : </span>
                            <span> {response.payment_type_code} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>Número de cuotas : </span>
                            <span> {response.installments_number} </span>
                        </div>
                        <div className='item'>
                            <span style={{marginRight: '10px'}}>monto de cada cuota : </span>
                            <span> {response.installments_amount} </span>
                        </div>
                        <div className='space'></div>
                        <div className='btnDiv'>
                            <span> Gracias por su compra, el proceso ha sido completado con éxito, ahora su pédido se esta procesando! </span>
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
 
export default Success;