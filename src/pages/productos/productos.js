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
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from 'jquery';
// import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import { getProductosById3, getProductosById2, getProductosById  } from '../../api/productos';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import { useFormat } from '../../hooks/useFormat';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useForm } from '../../hooks/useForm';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Producto = () => {
    const history = useHistory();
    const {id} = useParams();
    const classes = useStyles();
    var localS = JSON.parse(localStorage.getItem("carrito"));
    // const productoS = JSON.parse(localStorage.getItem("producto"));
    var localFinal = localS == null ? [] : localS;
    const [productoTemporal, setProductoTemporal] = useState({
        name:''
    });
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total,open, severity, mensaje, handleClose] = useCart(localFinal);
    // const [,,,,,,redireccionar ] = useProduct();
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [format] = useFormat();
    const [imagenes, setImagenes] = useState([]);
    const [relacionados, setRelacionados] = useState([]);
    const [opciones, setOpcion] = useState(1);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        // metodo();
        obtenerProducto(id);
    },[]);
    
    useEffect(() => {
        obtenerRelacionados();
        obtenerImagenes();
    }, [productoTemporal]);
    useEffect(() => {
        // metodo();
        obtenerProducto(id);
    }, [id]);
    // const [values, onChange,] = useForm({
    //     quantity:1
    // });

    // const {quantity} = values;
    useEffect(() => {   
        if(productoTemporal.name != ''){
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
        }
    },[opciones, productoTemporal]);

    // const metodo = () => {
    //     console.log(1)
    //     $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    //     $('.quantity').each(function() {
    //         var spinner = $(this),
    //             input = spinner.find('input[type="number"]'),
    //             btnUp = spinner.find('.quantity-up'),
    //             btnDown = spinner.find('.quantity-down'),
    //             min = input.attr('min'),
    //             max = input.attr('max');

    //         btnUp.click(function() {
    //             var oldValue = parseFloat(input.val());
    //             var newVal;
    //             if (oldValue >= max) {
    //              newVal = oldValue;
    //             } else {
    //              newVal = oldValue + 1;
    //             }
    //             spinner.find("input").val(newVal);
    //             spinner.find("input").trigger("change");
    //         });
    //         btnDown.click(function() {
    //             var oldValue = parseFloat(input.val());
    //             var newVal;
    //             if (oldValue <= min) {
    //              newVal = oldValue;
    //             } else {
    //              newVal = oldValue - 1;
    //             }
    //             spinner.find("input").val(newVal);
    //             spinner.find("input").trigger("change");
    //         });

    //     });
    //     console.log(2)

    // }
    const obtenerProducto = async (ide) => {
        setLoading2(true);
        const resultado = await getProductosById(ide);
        console.log(resultado);
        if(resultado){
            setProductoTemporal(resultado[0]);
        }else{
            window.location.href = '/';
        }
        setLoading2(false);
    }
    // const urlImagen = productoS.images[0].src;
    const obtenerRelacionados = async () => {
        setLoading(true);
        // var product = JSON.parse(localStorage.getItem("producto"));
        if(productoTemporal.name != ''){
            const relacionados2 = productoTemporal.related_ids;
            console.log(relacionados2)
            const arrayTemporal = []; 
            if(relacionados2.length > 0){
                for (let index = 0; index < relacionados2.length; index++) {
                    const element = relacionados2[index];
                    if(index < 4){
                        const resultado = await getProductosById2(element);
                        arrayTemporal.push(resultado);
                    }
                }
                setRelacionados(arrayTemporal);
                setLoading(false);
            }
        }else{
            setLoading(false);
        }
    }
    const obtenerImagenes = () => {
        // var product = JSON.parse(localStorage.getItem("producto"));
        if(productoTemporal.name != ''){

            const images = productoTemporal.images;
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
    }   
    const cambiarProducto = (producto) => {
        history.push(`/producto/${producto.slug}`);
        setProductoTemporal(producto);
    }
    const descuento = Math.trunc(((productoTemporal.price * 100)/ productoTemporal.regular_price) - 100);
    const obtenerDatos = () => {
        if(quantity>0){
            onAdd(productoTemporal, parseInt(quantity));
        }
        
    }
    const onChangeQuantity = (cantidad) => {
        console.log(productoTemporal.stock_quantity)
        if(cantidad > productoTemporal.stock_quantity || cantidad < 1){

        }else{
            setQuantity(cantidad)
        }
    } 
    return ( 
        <>
            <Helmet>
                <title>{productoTemporal.name}</title>
                <meta name="description" content="Contacto" />
            </Helmet>
            <div className="fondo">
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                {productoTemporal.name != '' ?
                    <>
                        <div className="fondoGris" id="principal">
                            <div class="container" >
                                <div class="galeria">
                                    <ImageGallery items={imagenes} />
                                </div>
                                <div class="detalles">
                                    <span className="oferta">??OFERTA!</span>
                                    <span className="tituloProducto">{productoTemporal.name}</span>
                                    <div className="precios">
                                        <span class="precioTotal">${format(productoTemporal.regular_price)}</span>
                                        <span class="precioOferta">${format(productoTemporal.price)}</span>
                                        {descuento>0 ? <span class="descuento">{descuento}%</span> : null} 
                                    </div>
                                    <span className="shortDescription" dangerouslySetInnerHTML={{__html : productoTemporal.short_description }}></span>
                                    {productoTemporal.stock_status === "instock" ? <h2 className="haystock">HAY EXISTENCIAS</h2> : <h2 className="nohaystock">AGOTADO</h2>} 
                                    <div class="counter">
                                        <div className="gris">
                                            <VisibilityIcon /><span>7 Personas est??n viendo este producto</span>
                                        </div>
                                    </div>
                                    {productoTemporal.stock_status === "instock" ?
                                    <div class="addCart">
                                        <div class="quantity">
                                            <AddIcon className="more" onClick={() => onChangeQuantity(quantity + 1)}/> 
                                            <RemoveIcon className="less" onClick={() => onChangeQuantity(quantity - 1)}/> 
                                            <input type="number" min="1" max={productoTemporal.stock_quantity} step="1" value={quantity} id="quantity" name="quantity"/>
                                        </div>
                                        <button onClick={obtenerDatos}>Agregar al carrito</button>
                                    </div> : null}
                                    <div class="agregarDeseos">
                                    <FavoriteBorderIcon/> <strong>Agregar a lista de deseos</strong>
                                    </div>
                                    <strong className="envioGratis">Env??o gratis por compras por sobre $50.000 IVA incluido para env??os en Santiago</strong>
                                    <div className="datos">
                                        <CheckCircleOutlineOutlinedIcon className="iconoCheck" />
                                        <span>Despachos y env??os en menos de 24 Hrs</span>
                                    </div>
                                    <div className="datos">
                                        <CheckCircleOutlineOutlinedIcon className="iconoCheck" />
                                        <span>Garant??a de 3 meses por Da??os de Fabrica</span>
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
                                    <span id="descripcion" onClick={() => setOpcion(1)}>Descripci??n</span>
                                </div>
                                <div class="">
                                    <span id="informacion" onClick={() => setOpcion(2)}>Informaci??n adicional</span>
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
                                    {productoTemporal.rating_count === 0 ? 
                                        <>
                                            <span className="span">No hay valoraciones a??n</span>
                                            <br />
                                            <h2 className="span">S?? el primero en valorar <strong>"{productoTemporal.name}"</strong></h2> <br />
                                            <span className="letras"> 
                                                Tu puntuaci??n: 
                                                <Box component="fieldset" mb={3} borderColor="transparent">
                                                {/* <Typography component="legend">Valoraci??n</Typography> */}
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
                                                Tu valoraci??n: 
                                            </span> <br />
                                            {/* <TextareaAutosize aria-label="minimum height" minRows={10} placeholder="Minimum 2 rows" />; */}
                                            <textarea className="span area" rows="6" placeholder ="Ingresa la valoraci??n del producto aqu??"/>
                                            <Button variant="contained" color="primary">
                                                Enviar
                                            </Button>
                                        </>
                                    :  
                                        <>
                                            <span>Cantidad de valoraciones: {productoTemporal.rating_count}</span> <br/>
                                            <span>valoraci??n promedio: {productoTemporal.average_rating}</span>
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
                            <Backdrop className={classes.backdrop} open={loading}>
                                <CircularProgress color="inherit" />
                            </Backdrop>
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
                    </>
                :
                    <Backdrop className={classes.backdrop} open={loading2}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }
                
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={severity}>
                        {mensaje}
                    </Alert>
                </Snackbar>
            </div>
                <BtnWhatsApp />
                <Footer1 />
                <Footer2 />
        </>     
    );
}
 
export default Producto;