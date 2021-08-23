import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { useProduct } from '../../hooks/useProduct
import { useCart } from '../../hooks/useCart';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import NavBar from '../../components/nav/nav';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button';

import $ from 'jquery';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import { getProductosById } from '../../api/productos';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useFormat } from '../../hooks/useFormat';

const Producto = () => {
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const productoS = JSON.parse(localStorage.getItem("producto"));
    const [productoTemporal, setProductoTemporal] = useState(productoS);
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total] = useCart(localS);
    // const [,,,,,,redireccionar ] = useProduct();
    const [format] = useFormat();
    const [imagenes, setImagenes] = useState([]);
    const [relacionados, setRelacionados] = useState([]);
    const [opciones, setOpcion] = useState(1);
    useEffect(() => {
        metodo();
        obtenerImagenes();
        obtenerRelacionados();
    },[]);

    useEffect(() => {
        var desc = document.getElementById("descripcion");
        var info = document.getElementById("informacion");
        var valo = document.getElementById("valoracion");
        if(opciones === 1 )
        {
            desc.classList.remove("spanInactivo");
            desc.classList.add("spanActivo");
            info.classList.remove("spanActivo");
            info.classList.add("spanInactivo");
            valo.classList.remove("spanActivo");
            valo.classList.add("spanInactivo");
        }else if(opciones === 2){
            desc.classList.remove("spanActivo");
            desc.classList.add("spanInactivo");
            info.classList.remove("spanInactivo");
            info.classList.add("spanActivo");
            valo.classList.remove("spanActivo");
            valo.classList.add("spanInactivo");
        }else{
            desc.classList.remove("spanActivo");
            desc.classList.add("spanInactivo");
            info.classList.remove("spanActivo");
            info.classList.add("spanInactivo");
            valo.classList.remove("spanInactivo");
            valo.classList.add("spanActivo");
        }
    },[opciones]);

    const metodo = () => {
        $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
        $('.quantity').each(function() {
            var spinner = $(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.click(function() {
                var oldValue = parseFloat(input.val());
                var newVal;
                if (oldValue >= max) {
                 newVal = oldValue;
                } else {
                 newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.click(function() {
                var oldValue = parseFloat(input.val());
                var newVal;
                if (oldValue <= min) {
                 newVal = oldValue;
                } else {
                 newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

        });
    }

    // const urlImagen = productoS.images[0].src;
    const obtenerRelacionados = async () => {
        var product = JSON.parse(localStorage.getItem("producto"));
        const relacionados = product.related_ids;
        const arrayTemporal = []; 
        if(relacionados.length > 0){
            for (let index = 0; index < relacionados.length; index++) {
                const element = relacionados[index];
                if(index < 4){
                    const resultado = await getProductosById(element);
                    arrayTemporal.push(resultado);
                }
            }
            setRelacionados(arrayTemporal);
        }

    }
    const obtenerImagenes = () => {
        var product = JSON.parse(localStorage.getItem("producto"));
        const images = product.images;
        const array = [];
        images.forEach(element => {
            const data = {
                original: element.src,
                thumbnail: element.src,
            }
            array.push(data);
        });
        console.log(array);
        setImagenes(array);
    }   
    const cambiarProducto = (producto) => {
        
        setProductoTemporal(producto);
        localStorage.setItem("producto", JSON.stringify(producto));
        obtenerImagenes();
        obtenerRelacionados();
        window.location.href = "#principal"
        // window.location.replace('');
    }
    const descuento = Math.trunc(((productoTemporal.price * 100)/ productoTemporal.regular_price) - 100);

    return ( 
        <>
            <div className="fondo">
                <NavBar
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div className="fondoGris" id="principal">
                    <div class="container" >
                        <div class="galeria">
                            <ImageGallery items={imagenes} />
                        </div>
                        <div class="detalles">
                            <span className="oferta">¡OFERTA!</span>
                            <span className="tituloProducto">{productoTemporal.name}</span>
                            <div className="precios">
                                <span class="precioTotal">${format(productoTemporal.regular_price)}</span>
                                <span class="precioOferta">${format(productoTemporal.price)}</span>
                                <span class="descuento">{descuento}%</span>
                            </div>
                            <span className="shortDescription" dangerouslySetInnerHTML={{__html : productoTemporal.short_description }}></span>
                            {productoTemporal.stock_status === "instock" ? <h2 className="haystock">HAY EXISTENCIAS</h2> : <h2 className="nohaystock">AGOTADO</h2>} 
                            <div class="counter">
                                <div className="gris">
                                    <VisibilityIcon /><span>7 Personas están viendo este producto</span>
                                </div>
                            </div>
                            {productoTemporal.stock_status === "instock" ?
                            <div class="addCart">
                                <div class="quantity">
                                    <input type="number" min="1" max={productoTemporal.stock_quantity} step="1" value="1" />
                                </div>
                                <button>Agregar al carrito</button>
                            </div> : null}
                            <div class="agregarDeseos">
                               <FavoriteBorderIcon/> <strong>Agregar a lista de deseos</strong>
                            </div>
                            <strong className="envioGratis">Envío gratis por compras por sobre $50.000 IVA incluido para envíos en Santiago</strong>
                            <div className="datos">
                                <CheckCircleOutlineOutlinedIcon className="iconoCheck" />
                                <span>Despachos y envíos en menos de 24 Hrs</span>
                            </div>
                            <div className="datos">
                                <CheckCircleOutlineOutlinedIcon className="iconoCheck" />
                                <span>Garantía de 3 meses por Daños de Fabrica</span>
                            </div>
                            <div class="contorno">
                                <div>
                                    <strong>Pagos en el sitio seguros</strong>
                                    <img src="https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/07/trust-symbols_a.jpg" alt="commercegurus"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="descripcion">
                    <div class="botones">
                        <div class="">
                            <span id="descripcion" onClick={() => setOpcion(1)}>Descripción</span>
                        </div>
                        <div class="">
                            <span id="informacion" onClick={() => setOpcion(2)}>Información adicional</span>
                        </div>
                        <div class="">
                            <span id="valoracion" onClick={() => setOpcion(3)}>Valoraciones</span>
                        </div>
                    </div>
                    {opciones === 1 ?
                        <div class="descripcion2">
                            <span className="shortDescription" dangerouslySetInnerHTML={{__html : productoTemporal.description }}></span>
                        </div>
                    : null
                    }
                     {opciones === 2 ?
                        <div class="descripcion2">
                            <span>Peso :    {productoTemporal.weight}</span> <br />
                            <span>Dimensiones :    {productoTemporal.dimensions.length} x {productoTemporal.dimensions.width} x {productoTemporal.dimensions.height} CM </span>
                        </div>
                    : null
                    }
                     {opciones === 3 ?
                        <div class="descripcion2">
                            {productoS.rating_count === 0 ? 
                                <>
                                    <span className="span">No hay valoraciones aún</span>
                                    <br />
                                    <h2 className="span">Sé el primero en valorar <strong>"{productoTemporal.name}"</strong></h2> <br />
                                    <span className="letras"> 
                                        Tu puntuación: 
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                        {/* <Typography component="legend">Valoración</Typography> */}
                                            <Rating
                                                name="customized-empty"
                                                defaultValue={0}
                                                precision={0.5}
                                                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                            />
                                        </Box>
                                    </span>
                                     
                                    <br />
                                    <span className="span letras">
                                        Tu valoración: 
                                    </span> <br />
                                    {/* <TextareaAutosize aria-label="minimum height" minRows={10} placeholder="Minimum 2 rows" />; */}
                                    <textarea className="span area" rows="6" placeholder ="Ingresa la valoración del producto aquí"/>
                                    <Button variant="contained" color="primary">
                                        Enviar
                                    </Button>
                                </>
                            :  
                                <>
                                    <span>Cantidad de valoraciones: {productoTemporal.rating_count}</span> <br/>
                                    <span>valoración promedio: {productoTemporal.average_rating}</span>
                                </>
                            }
                        </div>
                    : null
                    }   

                </div>
                <div className="categoria2">
                    <span className="nameCategoria">Categoria: </span><span className="nameCategoria2">{productoTemporal.categories[0].name}</span>
                </div>
                <section className="productos">
                    <h2>
                        Productos relacionados
                    </h2>
                    <div className="raw"> 
                        {relacionados.map((element) => {
                            const imagen = element.images.length > 0? element.images[0].src : "";
                            return (
                                <div className="columnas">
                                    <div className="card">   
                                        <img src={imagen} alt="" onClick={() => cambiarProducto(element)} />
                                        <div className="detalles" onClick={() => cambiarProducto(element)}>
                                            <span className="titulo">
                                                {element.name}
                                            </span>
                                            <span className="regularPrice">
                                                ${format(element.regular_price)}
                                            </span>
                                            <span className="price">
                                                ${format(element.price)}
                                            </span>
                                        </div>
                                        <div className="booton">
                                            <button onClick={() => onAdd(element)}>
                                                Agregar al carrito
                                            </button>
                                        </div>
                                    </div>  
                                </div>
                            )
                        })}
                    </div>  
                </section>
                <Footer1 />
                <Footer2 />
            </div>
        </>     
    );
}
 
export default Producto;