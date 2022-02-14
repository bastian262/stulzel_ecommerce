import React , { useEffect , useState} from 'react';
import '../../App.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuScreen from '../cart/cart'
import { useFormat } from '../../hooks/useFormat';
import { useCategory } from '../../hooks/useCategory';
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LazyLoad from 'react-lazyload';

const categoriass = [
    {
        "id": 73,
        "name": "Accesorios barbería",
        "slug": "accesorios-barberia",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39146,
            "date_created": "2021-08-03T20:18:39",
            "date_created_gmt": "2021-08-03T23:18:39",
            "date_modified": "2021-08-03T20:18:39",
            "date_modified_gmt": "2021-08-03T23:18:39",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/accesorios.jpg",
            "name": "accesorios",
            "alt": ""
        },
        "menu_order": 1,
        "count": 30,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/73"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 131,
        "name": "Buffalo Men's",
        "slug": "buffalo-mens",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39145,
            "date_created": "2021-08-03T20:18:36",
            "date_created_gmt": "2021-08-03T23:18:36",
            "date_modified": "2021-08-03T20:18:36",
            "date_modified_gmt": "2021-08-03T23:18:36",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/buff.jpg",
            "name": "buff",
            "alt": ""
        },
        "menu_order": 2,
        "count": 9,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/131"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 132,
        "name": "Carros ayudantes",
        "slug": "carros-ayudantes",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39144,
            "date_created": "2021-08-03T20:18:34",
            "date_created_gmt": "2021-08-03T23:18:34",
            "date_modified": "2021-08-03T20:18:34",
            "date_modified_gmt": "2021-08-03T23:18:34",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/carros.jpg",
            "name": "carros",
            "alt": ""
        },
        "menu_order": 3,
        "count": 5,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/132"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 161,
        "name": "Climazón",
        "slug": "climazon",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 40318,
            "date_created": "2022-01-24T15:28:50",
            "date_created_gmt": "2022-01-24T18:28:50",
            "date_modified": "2022-01-24T15:28:50",
            "date_modified_gmt": "2022-01-24T18:28:50",
            "src": "https://admin.stulzel.com/wp-content/uploads/2022/01/climazones.jpg",
            "name": "climazones",
            "alt": ""
        },
        "menu_order": 0,
        "count": 4,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/161"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 97,
        "name": "Filos Dorco",
        "slug": "filos-dorco",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 33659,
            "date_created": "2021-03-14T14:48:33",
            "date_created_gmt": "2021-03-14T17:48:33",
            "date_modified": "2021-03-14T14:48:44",
            "date_modified_gmt": "2021-03-14T17:48:44",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/03/categoria-filos-dorco-scaled.jpg",
            "name": "categoria-filos-dorco",
            "alt": "categoria filos dorco"
        },
        "menu_order": 5,
        "count": 3,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/97"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 72,
        "name": "Lavapelo",
        "slug": "lavapelo",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39142,
            "date_created": "2021-08-03T20:18:29",
            "date_created_gmt": "2021-08-03T23:18:29",
            "date_modified": "2021-08-03T20:18:29",
            "date_modified_gmt": "2021-08-03T23:18:29",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/lavapelos.jpg",
            "name": "lavapelos",
            "alt": ""
        },
        "menu_order": 9,
        "count": 7,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/72"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 71,
        "name": "RedOne",
        "slug": "redone",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39141,
            "date_created": "2021-08-03T20:18:27",
            "date_created_gmt": "2021-08-03T23:18:27",
            "date_modified": "2021-08-03T20:18:27",
            "date_modified_gmt": "2021-08-03T23:18:27",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/redone.jpg",
            "name": "redone",
            "alt": ""
        },
        "menu_order": 10,
        "count": 33,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/71"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 159,
        "name": "Sillón Barbería",
        "slug": "sillon-barberia",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39140,
            "date_created": "2021-08-03T20:18:19",
            "date_created_gmt": "2021-08-03T23:18:19",
            "date_modified": "2021-08-03T20:18:19",
            "date_modified_gmt": "2021-08-03T23:18:19",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/sillonesbarberia.jpg",
            "name": "sillonesbarberia",
            "alt": ""
        },
        "menu_order": 0,
        "count": 8,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/159"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    },
    {
        "id": 160,
        "name": "Sillón Peluquería",
        "slug": "sillon-peluqueria",
        "parent": 0,
        "description": "",
        "display": "default",
        "image": {
            "id": 39139,
            "date_created": "2021-08-03T20:18:12",
            "date_created_gmt": "2021-08-03T23:18:12",
            "date_modified": "2021-08-03T20:18:12",
            "date_modified_gmt": "2021-08-03T23:18:12",
            "src": "https://admin.stulzel.com/wp-content/uploads/2021/08/sillonespeluqueria.jpg",
            "name": "sillonespeluqueria",
            "alt": ""
        },
        "menu_order": 0,
        "count": 13,
        "_links": {
            "self": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories/160"
                }
            ],
            "collection": [
                {
                    "href": "https://admin.stulzel.com/wp-json/wc/v3/products/categories"
                }
            ]
        }
    }
]
const HeaderPage = ({onAdd,limpiarCarrito, eliminarProducto, productes, total}) => {
    const [format] = useFormat();
    const [ide, setIde] = useState(1);
    const history = useHistory();
    const [values, onChange,] = useForm({
        search:''
    })
    const [listarCategorias, categorias,] = useCategory();
    const {search} = values;
    useEffect(() => {   
        listarCategorias(categoriass);
    }, []);
    
    const abrirCerrarMenu = () => {
        let menu = document.getElementById("menu2");
        let menu2 = document.getElementById("fondoNegro");
        let menu3 = document.getElementById("cerrar");
        let body = document.getElementsByTagName("body");
        if(menu.style.left === "0px"){
            menu.style.left = "-260px";
            menu2.style.visibility = "hidden";
            menu2.style.opacity = "0";
            menu3.style.top = "35px";
            body[0].style.height = "auto";
            body[0].style.overflow = "visible";
        }else{
            menu.style.left = "0px";
            menu2.style.visibility = "visible";
            menu2.style.opacity = "1";
            menu3.style.top = "20px";
            body[0].style.height = "100vh";
            body[0].style.overflow = "hidden";
        }
    }

    const expandir = () => {
        let doc = document.getElementById("subMenu2");
        if(doc.style.height === "0px"){
            doc.style.height = "auto";
            doc.style.borderBottom = "1px solid black";
            doc.style.marginBottom = "10px";
        }else{
            doc.style.height = "0px";
            doc.style.borderBottom = "0px solid black";
            doc.style.marginBottom = "0px";
        }
    }

    const abrirCart = () => {
        let menu = document.getElementById("cart");
        let menu2 = document.getElementById("fondoNegro2");
        let menu3 = document.getElementById("cerrar2");
        let body = document.getElementsByTagName("body");
        if(menu.style.right === "0px"){
            menu.style.right = "-360px";
            menu2.style.visibility = "hidden";
            menu2.style.opacity = "0";
            menu3.style.top = "35px";
            body[0].style.height = "auto";
            body[0].style.overflow = "visible";
        }else{
            menu.style.right = "0px";
            menu2.style.visibility = "visible";
            menu2.style.opacity = "1";
            menu3.style.top = "20px";
            body[0].style.height = "100vh";
            body[0].style.overflow = "hidden";
        }
    }

    const redireccionar2 = (categoria) => {
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        setIde(categoria.id);
        localStorage.setItem("categoria", JSON.stringify(categoria));
        history.push(`/productos/${categoria.slug}`);
    }

    const abrircuenta = () => {
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        history.push("/micuenta");
    }

    const redireccionar3 = (ruta) => {
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        history.push(ruta);
    }

    const buscarProducto = (event) => {
        console.log(event);
        var code = event.keyCode || event.which;
        if(code === 13){
            history.push(`/search/${search}`);
        }
    }

    return ( 
        <>
            <header id="header1">
                <div className="container-flex">
                <LazyLoad><img src ="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="logo"/></LazyLoad>
                    <div className="search">
                        <input value={search} onChange={onChange} name="search" id="search" placeholder="Buscar Productos..." onKeyPress={buscarProducto} />
                        <SearchIcon className="icono" />
                    </div>
                    <div className="options">
                        <div className="option" onClick={() => abrircuenta()}>
                            <PermIdentityIcon />
                            <span>Mi Cuenta</span>
                        </div>
                        {/* <div className="option">
                            <HelpIcon />
                            <span>Preguntas Frecuentes</span>
                        </div> */}
                        <div className="option" onClick={abrirCart}>
                            <ShoppingCartIcon />
                            <span>Carrito</span>
                        </div>
                    </div>
                </div>
            </header>
            <header className="mobile">
                <div className="hamburguesa" onClick={() => abrirCerrarMenu()}>
                    <DehazeIcon className="iconHamburguesa" />
                </div>
                <div className="logoMobile">
                    <img src ="https://admin.stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="logo"/>
                </div>
                <div className="carritoMobile" onClick={abrirCart}>
                    <LocalMallIcon className="iconoBolsa"/>
                </div>
            </header>
            <nav>
                <div className="container-flex-btw">
                    <div className="menu">
                        <Link onClick={() => redireccionar3("/")}>
                            Inicio
                        </Link>
                        {/* <Link to="/salonlook/index" class="productosMas">Salon Look</Link> */}
                        {/* <div class="productosM">
                            <ExpandMoreIcon class="moreIcon" />
                            <div class="productosVarios">
                                <Link to="/salonlook/salon">Todo Saloon Look</Link>
                                <Link to="/salonlook/invitados">Invitados internacionales</Link>
                                <Link to="/salonlook/index">Batalla de barberos</Link>
                                <Link to="/salonlook/index">Compra tu entrada</Link>
                            </div>
                        </div> */}
                        <div class="productosM">
                            <Link to="/productos/0" class="productosMas">Productos</Link>
                            <ExpandMoreIcon class="moreIcon" />
                            <div class="productosVarios">
                                <Link to="/productos/0">Todos</Link>
                                <a onClick={() => redireccionar2(categoriass[0])}>Accesorios barbería</a>
                                <a onClick={() => redireccionar2(categoriass[1])}>Buffalo Men's</a>
                                <a onClick={() => redireccionar2(categoriass[2])}>Carros ayudantes</a>
                                <a onClick={() => redireccionar2(categoriass[3])}>Climazón</a>
                                <a onClick={() => redireccionar2(categoriass[4])}>Filos Dorco</a>
                                <a onClick={() => redireccionar2(categoriass[5])}>Lavapelo</a>
                                <a onClick={() => redireccionar2(categoriass[6])}>RedOne</a>
                                <a onClick={() => redireccionar2(categoriass[7])}>Sillón Barbería</a>
                                <a onClick={() => redireccionar2(categoriass[8])}>Sillón Peluquería</a>
                            </div> 
                        </div>
                        <Link to="/quienessomos">Quienes Somos</Link>
                        {/* <Link to="/cursos">Curso Inicial Barbería</Link> */}
                        {/* <Link to="/">Red One USA</Link> */}
                        <Link to="/contacto">Contacto</Link>
                        {/* <Link to="/cotizador">Cotizador de Envíos</Link> */}
                        {/* <Link to="/signUp">Rggistro</Link> */}
                        {/* <Link to="/signIn">Iniciar sesion</Link> */}
                    </div>
                    <div className="carrito" onClick={ () => abrirCart()}>
                        <span>
                            ${format(total)}
                        </span>
                        <LocalMallIcon/>
                    </div>
                </div>
            </nav>
            <div class="fondoNegro"  id="fondoNegro">
                <CloseIcon class="cerrarMenu" id="cerrar" onClick={() => abrirCerrarMenu()}/>
                <div class="navMobile" id="menu2">
                    <div class="buscador">
                        <SearchIcon className="searchInput" /> 
                        <input type="text" placeholder="Buscar Productos..." name="search" onChange={onChange} onKeyPress={buscarProducto} />
                    </div>
                    <div class="subMenu">
                        <Link onClick={() =>redireccionar3("/")}>Inicio</Link>
                        {/* <Link onClick={() =>redireccionar3("/salonlook/index")}>Salón Look</Link> */}
                        {/* <div class="productosMobiles" onClick={expandir}>
                            <div class="product-flex">
                                <ExpandMoreIcon />
                            </div>
                            <div className="subMenu2" id="subMenu2">
                                <Link onClick={ () => redireccionar3("/salonlook/salon")}>Todo Salón Look</Link>
                                <Link onClick={ () => redireccionar3("/salonlook/invitados")}>Invitados inernacionales</Link>
                            </div>
                        </div> */}
                        <div class="productosMobiles" onClick={expandir}>
                            <div class="product-flex">
                                <Link>Productos</Link>
                                <ExpandMoreIcon />
                            </div>
                            <div className="subMenu2" id="subMenu2">
                                <Link onClick={() => redireccionar2({id:0})}>Todos los productos</Link>
                                <a onClick={() => redireccionar2(categoriass[0])}>Accesorios barbería</a>
                                <a onClick={() => redireccionar2(categoriass[1])}>Buffalo Men's</a>
                                <a onClick={() => redireccionar2(categoriass[2])}>Carros ayudantes</a>
                                <a onClick={() => redireccionar2(categoriass[3])}>Climazón</a>
                                <a onClick={() => redireccionar2(categoriass[4])}>Filos Dorco</a>
                                <a onClick={() => redireccionar2(categoriass[5])}>Lavapelo</a>
                                <a onClick={() => redireccionar2(categoriass[6])}>RedOne</a>
                                <a onClick={() => redireccionar2(categoriass[7])}>Sillón Barbería</a>
                                <a onClick={() => redireccionar2(categoriass[8])}>Sillón Peluquería</a>
                            </div>
                        </div>
                        <a onClick={() =>redireccionar3("/quienessomos")}>Quienes Somos</a>

                        {/* <Link onClick={() =>redireccionar3("/cursos")}>Curso Inicial de Barbería</Link> */}
                        {/* <Link to="/">Red One USA</Link> */}
                        <Link onClick={() =>redireccionar3("/contacto")}>Contacto</Link>
                    </div>
                    <div class="links">
                        <span>Links de ayuda</span>
                        <Link onClick={() =>redireccionar3("/micuenta")}>Mi Cuenta</Link>
                        <Link to="/">Servicio al cliente</Link>
                    </div>
                    <div class="links">
                        <span>WhatsApp de ventas</span>
                        <a href="https://wa.me/56972321555" target="_blank" className="a">+569 72321555 <WhatsAppIcon className="wspIcon" /> </a>
                    </div>
                    <div class="links">
                        <span>Social</span>
                        <a href="https://www.facebook.com/stulzel" target="_blank" className="a">Facebook <FacebookIcon className="fcbIcon"/> </a>
                        <a href="https://www.instagram.com/stulzel_cl/" target="_blank" className="a">Instagram <InstagramIcon className="insIcon"/> </a>
                    </div>
                </div>
            </div>
            <MenuScreen
                onAdd={onAdd}
                limpiarCarrito = {limpiarCarrito}
                eliminarProducto = {eliminarProducto}
                productes = {productes}
                abrirCart = {abrirCart}
                total = {total}
            />
        </> 
    );
}
 
export default HeaderPage;