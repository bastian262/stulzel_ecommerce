import React, {useState, useEffect} from 'react';
import NavBar from '../../components/nav/nav'
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import { useCart } from '../../hooks/useCart';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import { useParams } from 'react-router';
import {validationVote} from '../../api/signUp'

const ValidationVotes = () => {
    const {id} = useParams();
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState("Espere mientras se válida su voto");
    useEffect(() => {
        getResult();
    }, []);

    const getResult = async () => {
        setLoading(true);
        const result = await validationVote(id);
        if(result.ok){
            setMensaje(result.msg);
        }else{
            setMensaje(result.msg);

        }
        console.log(result);
        setLoading(false);
    }
    
    return ( <>
    <div className="fondo">
        <NavBar
            onAdd={onAdd}
            limpiarCarrito = {limpiarCarrito}
            eliminarProducto = {eliminarProducto}
            productes = {productes}
            total = {total}
        />
        <div className="contenedor">
            <div className="row">
                <div className="votation">
                    <h3 style={{textAlign:'center', width:'100%'}}>{mensaje}</h3>
                </div>
            </div>
        </div>
    </div>
    <Footer1 />
    <Footer2 />
    <BtnWhatsApp />
    </> );
}
 
export default ValidationVotes;