import React,{useState, useEffect} from 'react';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import { getOrderByCustomer } from '../../api/orders';
import { getCustomer } from '../../api/customer';
import { useHistory } from 'react-router';
import { useCart } from '../../hooks/useCart';
import BannerPrincipal from '../../components/miCuenta/bannerPrincipal';
import CategoryIcon from '@material-ui/icons/Category';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GetAppIcon from '@material-ui/icons/GetApp';
// import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Escritorio from '../../components/miCuenta/escritorio';
import MisPedidos from '../../components/miCuenta/misPedidos';
import Descargas from '../../components/miCuenta/descargas';
import Direcciones from '../../components/miCuenta/direcciones';
import DatosPersonales from '../../components/miCuenta/datosPersonales';
const DetalleMiCuenta = ({usuario}) => {
    const [pedidos, setPedidos] = useState([]);
    const [customer, setCustomer] = useState({});
    const [state, setState] = useState(1);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    var localS = JSON.parse(localStorage.getItem("carrito"));
    useEffect(() => {
        getResult();
        getResultUser();
    }, []);
    const getResult = async () => {
        setLoading(true);
        const resultado = await getOrderByCustomer(usuario.id);
        setPedidos(resultado);
        setLoading(false);
    }
    const getResultUser = async () => {
        const resultado = await getCustomer(usuario.id);
        setCustomer(resultado);
    }
    const cerrarSesion = () => {
        localStorage.setItem("usuario", null);
        history.push("/");
    }
    
    const [,limpiarCarrito, eliminarProducto, productes,total,] = useCart(localS);
    return (
        <>
            <div className="fondo">
                <NavBar
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div className="contenedor">
                    <div className="raw">
                        <BannerPrincipal /> 
                    </div>
                    <div className="raw">
                        <div className="colP">
                            <button className="campoFlex" onClick={() => setState(1)}>
                                <span>Escritorio</span>
                                <CategoryIcon className="iconaso" />
                            </button>
                            <button className="campoFlex" onClick={() => setState(2)}>
                                <span>Pedidos</span>
                                <AssignmentIcon className="iconaso" />
                            </button>
                            <button className="campoFlex" onClick={() => setState(3)}>
                                <span>Descargas</span>
                                <GetAppIcon className="iconaso" />
                            </button>
                            <button className="campoFlex" onClick={() => setState(4)}>
                                <span>Direcciones</span>
                                <HomeOutlinedIcon className="iconaso" />
                            </button>
                            <button className="campoFlex" onClick={() => setState(5)}>
                                <span>Detalles de la cuenta</span>
                                <PersonPinIcon className="iconaso" />
                            </button>
                            <button className="campoFlex">
                                <span>My wishlist</span>
                                <FavoriteBorderOutlinedIcon className="iconaso" />
                            </button>
                            <button className="campoFlex" onClick={cerrarSesion}>
                                <span>Cerrar sesión</span>
                                <InputOutlinedIcon className="iconaso" />
                            </button>
                        </div>
                        <div className="colG">
                            {state === 1 ? 
                                <Escritorio
                                    usuario={usuario}
                                />
                            :
                                null
                            }
                            {state === 2 ? 
                                <MisPedidos
                                    pedidos={pedidos}
                                />
                            :
                                null
                            }
                            {state === 3 ? 
                                <Descargas />
                            :
                                null
                            }
                            {state === 4 ? 
                                <Direcciones
                                    customer={customer}
                                />
                            :
                                null
                            }
                            {state === 5 ? 
                                <DatosPersonales />
                            :
                                null
                            }
                        </div>
                    </div>
                </div>

            </div>
            <Footer1 />
            <Footer2 />
        </>
    );
}
 
export default DetalleMiCuenta;