import React from 'react';
import '../../App.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HeaderPage = () => {

    const abrirCerrarMenu = () => {
        let menu = document.getElementById("menu2");
        let menu2 = document.getElementById("fondoNegro");
        let menu3 = document.getElementById("cerrar");
        let body = document.getElementsByTagName("body");

        console.log(menu);
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

    return ( <>
        <header id="header1">
            <div className="container-flex">
                <img src ="https://stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="logo"/>

                <div className="search">
                    <input value="" placeholder="Buscar Productos..."/>
                    <SearchIcon className="icono" />
                </div>
                <div className="options">
                    <div className="option">
                        <PermIdentityIcon />
                        <span>Mi Cuenta</span>
                    </div>
                    <div className="option">
                        <HelpIcon />
                        <span>Preguntas Frecuentes</span>
                    </div>
                    <div className="option">
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
                <img src ="https://stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="logo"/>
            </div>
            <div className="carritoMobile">
                <LocalMallIcon className="iconoBolsa"/>
            </div>
        </header>
        <nav>
            <div className="container-flex-btw">
                <div className="menu">
                    <Link to="/">
                        Inicio
                    </Link>
                    
                    <Link to="/">Quienes Somos</Link>
                    <div class="productosM">
                        <Link to="/" class="productosMas">Productos</Link>
                        <ExpandMoreIcon class="moreIcon" />
                        <div class="productosVarios">
                            <Link to="/">Todos</Link>
                            <Link to="/">Red One</Link>
                            <Link to="/">Buffalo Men's</Link>
                            <Link to="/">Sillones</Link>
                            <Link to="/">Lavapelos</Link>
                            <Link to="/">Carros Ayudantes</Link>
                            <Link to="/">Accesorios de barbería</Link>
                        </div>
                    </div>
                    <Link to="/">Curso Inicial Barbería</Link>
                    <Link to="/">Red One USA</Link>
                    <Link to="/">Contacto</Link>
                    <Link to="/cotizador">Cotizador de Envíos</Link>
                    {/* <Link to="/signUp">Rggistro</Link> */}
                    {/* <Link to="/signIn">Iniciar sesion</Link> */}
                </div>
                <div className="carrito">
                    <span>
                        $213.00
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
                    <input type="text" placeholder="Buscar Productos..." />
                </div>
                <div class="subMenu">
                    <Link to="/">Inicio</Link>
                    <Link to="/">Quienes Somos</Link>
                    <div class="productosMobiles" onClick={expandir}>
                        <div class="product-flex">
                            <Link to="/">Productos</Link>
                            <ExpandMoreIcon />
                        </div>
                        <div className="subMenu2" id="subMenu2">
                            <Link to="/">Todos</Link>
                            <Link to="/">Red One</Link>
                            <Link to="/">Buffalo Men's</Link>
                            <Link to="/">Sillones</Link>
                            <Link to="/">Lavapelos</Link>
                            <Link to="/">Carros Ayudantes</Link>
                            <Link to="/">Accesorios de barbería</Link>
                        </div>
                    </div>
                    <Link to="/">Curso Inicial de Barbería</Link>
                    <Link to="/">Red One USA</Link>
                    <Link to="/">Contacto</Link>
                </div>
                <div class="links">
                    <span>Links de ayuda</span>
                    <Link to="/">Mi Cuenta</Link>
                    <Link to="/">Servicio al cliente</Link>
                </div>
                <div class="links">
                    <span>WhatsApp de ventas</span>
                    <a href="/">+569 72321555 </a>
                </div>
                <div class="links">
                    <span>Social</span>
                    <a href="/">Facebook </a>
                    <a href="/">Instagram </a>
                </div>
            </div>
        </div>

    </> );
}
 
export default HeaderPage;