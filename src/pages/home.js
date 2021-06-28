import React,{useState, useEffect} from 'react';
import NavBar from '../components/nav/nav'
import { getProductos10 } from '../api/productos';
import redone from '../assets/img/redone.png'
const HomeScreen = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        const result = await getProductos10();
        console.log(result);
        setProductos(result);
    }

    return (
        <div className="fondo">
            <NavBar/>
            <div className="header">
                <div className="border">
                    <div className="row-flex">
                        <div className="col-1">
                            <img src={redone} alt="logo"  />
                        </div>
                        <div className="col-2">
                            <span className="titulo1">
                                Si eres Barbería
                                o Salón de belleza <br/> y te haces distribuidor obtendrás un
                            </span>
                            {/* <span className="tituloGrande"></span>    */}
                            <span className="titulo2">
                            20% DE BONIFICACIÓN <br/> Y ENVÍO GRATIS
                            </span>
                            <span className="titulo1">
                                a la sucursal del courier
                                más cercano a tu domicilio.
                            </span>
                            <div className="button">
                                <button>Envianos un WhatsApp Aquí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="topSales">
                <div className="raw">
                    <div className="tituloProductosDestacados"> Productos Destacados </div>
                </div>
                <div className="raw">
                    <div className="col">
                        <div className="mitad1">
                            <span className="titulo">
                                Sillon de Barbería
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Modelo Aviador
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $279.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <img src="https://stulzel.com/wp-content/uploads/2021/01/SILLONES-2020-6C-scaled-1-600x664.jpg" alt="stulzel" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mitad1">
                            <span className="titulo">
                                Sillon de Barbería
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Modelo Praga
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $359.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <img src="https://stulzel.com/wp-content/uploads/2021/01/SILLONES-2020-4B-scaled-1-600x752.jpg" alt="stulzel" />
                        </div>
                    </div>
                </div>
                <div className="raw">
                    <div className="col">
                        <div className="mitad1">
                            <span className="titulo">
                                Sillon de Peluquería
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Escocia White
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $169.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <img src="https://stulzel.com/wp-content/uploads/2020/12/sillonEscociaWhiteNuevo.jpg" alt="stulzel" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mitad1">
                            <span className="titulo">
                                Lavapelo
                            </span>
                            <br/>
                            <span className="tituloProducto">
                                Premiun Black
                            </span>
                            <br/>
                            <span className="tituloPrecio">
                                Precio $299.990
                            </span>
                            <button>Compra Aquí</button>
                        </div>
                        <div className="mitad2">
                            <img src="	https://stulzel.com/wp-content/uploads/2021/05/premiun_black.jpg" alt="stulzel" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mayorista">
                <div className="raw"> 
                    <div className="titulo">   
                        <h3> TE INVITAMOS A SER MAYORISTA </h3> 
                        <h3> DE PRODUCTOS STULZEL Y AUMENTAR </h3>  
                        <h3> LAS GANANCIAS DE TU NEGOCIO </h3> 
                        <div className="logos">  
                            <div className="">
                                <img src="" alt="logo1"/>  
                            </div>  
                        </div>    
                    </div>  
                </div>  
            </section>
            <section className="productos">
                    <h1>
                        Productos Destacados
                    </h1>
                <div className="raw"> 
                   
                    {productos.map((element) => {
                        const imagen = element.images.length > 0? element.images[0].src : "";
                        return (
                            <div className="columnas">
                                <div className="card">   
                                    <img src={imagen} alt="" />
                                    <div className="detalles">
                                        <span className="titulo">
                                            {element.name}
                                        </span>
                                        <span className="regularPrice">
                                        ${element.regular_price}
                                        </span>
                                        <span className="price">
                                            ${element.price}
                                        </span>
                                    </div>
                                    <div className="booton">
                                        <button>
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>  
                            </div>
                        )
                    })}
                    
                </div>  
            </section>
        </div>
    
    );
    
}

export default HomeScreen;


