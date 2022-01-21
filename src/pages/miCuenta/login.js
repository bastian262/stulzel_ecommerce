import React from 'react';
import { useCart } from '../../hooks/useCart';
// import { useForm } from '../../hooks/useForm';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import BannerPrincipal from '../../components/miCuenta/bannerPrincipal';
import SignUp from '../../components/miCuenta/signUp';
import SignIn from '../../components/miCuenta/signIn';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
const Login = () => {

    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [,limpiarCarrito, eliminarProducto, productes,total,] = useCart(localS);

    return ( 
    <>
        <div class="fondo">
            <NavBar
                limpiarCarrito = {limpiarCarrito}
                eliminarProducto = {eliminarProducto}
                productes = {productes}
                total = {total}
            />
            <div class="contenedor">
                <div class="raw">
                    <BannerPrincipal />
                    <div class="raw">
                        <div class="col-3">
                            <SignIn />
                        </div>
                        <div class="col-3">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BtnWhatsApp />
        <Footer1 />
        <Footer2 />
    </> );
}
 
export default Login;