import React, {useEffect, useState} from 'react';
import NavBar from '../../components/nav/nav';
import { useCart } from '../../hooks/useCart';
import { useParams } from 'react-router';
import { useFormat } from '../../hooks/useFormat';
import { useProduct } from '../../hooks/useProduct';
import { useCategory } from '../../hooks/useCategory';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Footer1 from '../../components/footer/Footer1';
import MenuItem from '@material-ui/core/MenuItem';
import Footer2 from '../../components/footer/Footer2';
import Slider from '@material-ui/core/Slider';
import Rating from '@material-ui/lab/Rating';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
// import { getProductosByCategoryId } from '../../api/productos';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import CloseIcon from '@material-ui/icons/Close';
import ReactPixel from 'react-facebook-pixel';
import { postEvento, geoLocalizacion } from '../../api/apiConversion';
import { browserName } from "react-device-detect";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

function valuetext(value) {
    return `$${value}`;
}


const ListadoProducto = () => {

    const classes = useStyles();
    const {id} = useParams();
    var categorias = JSON.parse(localStorage.getItem("categorias"));
    var categoria = JSON.parse(localStorage.getItem("categoria"));
    var topSales = JSON.parse(localStorage.getItem("topSales"));
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [productos,,loading,,getProductByCategoryId2,redireccionar,getProductsByPrice2,getProductsByOrden2,getProductByCategoryId3,hasMore, setHasMore] = useProduct();
    const [,,redireccionar2,] = useCategory();
    // const [state, setState] = useState();
    const [orderBy , setOderBy] = useState("popularity");
    const [value, setValue] = useState([1, 70]);
    const [page, setPage] = useState(1);
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total,open, severity, mensaje, handleClose ] = useCart(localS);
    const [format] = useFormat();
    useEffect(() => {
        pixelaso();
        getProductByCategoryId2(id);
    }, []);
    useEffect(() => {
        getProductByCategoryId2(id);
        setPage(1);
        setHasMore(true);
    }, [id]);
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    const nextPage = () => {
        console.log("dale");
        const pageNew = page + 1;
        setPage(pageNew);
        getProductByCategoryId3(id,pageNew);
    }
    const urlImagen = id == 0 ?  "":categoria.image.src;

    const handleChange2 = (event) => {
        var valor = "desc";
        var valorOrdn = event.target.value;
        if(event.target.value === "price"){
            valor = "asc";
        }else if(event.target.value === "priceDesc"){
            valor = "desc";
            valorOrdn = "price";
        }
        setOderBy(valorOrdn);
        getProductsByOrden2(valorOrdn, id , valor);
    };
    const abrirFiltros = () => {
        let doc = document.getElementById("filtros");
        let doc2 = document.getElementById("fondoNegro3");
        let doc3 = document.getElementById("cerrar3");
        let body = document.getElementsByTagName("body");
        if(doc.style.left === "0px"){
            doc.style.left = "-290px"
            doc2.style.visibility = "hidden";
            doc2.style.opacity = "0";
            doc3.style.top = "35px";
            body[0].style.height = "auto";
            body[0].style.overflow = "visible";
        }else{
            doc.style.left = "0px";
            doc2.style.visibility = "visible";
            doc2.style.opacity = "1";
            doc3.style.top = "20px";
            body[0].style.height = "100vh";
            body[0].style.overflow = "hidden";
        }
    }

    const pixelaso = async () => {
        const options = {
            autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
            debug: false, // enable logs
        };
        const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
        ReactPixel.init("495580404127215",advancedMatching,options);
        ReactPixel.track("ViewContent");
        const resultado2 = await geoLocalizacion();
        if(resultado2.ip.length > 0){
            const dateTime = Date.now();
            const timestamp = Math.floor(dateTime / 1000);
            const date = {
                data : [{
                    "event_name": "ViewContent",
                    "event_time": timestamp,
                    "action_source": "website",
                    "event_source_url":"https://www.stulzel.com/producto",
                    "user_data": {
                        "client_ip_address":resultado2.ip,
                        "client_user_agent": browserName
                    }
                }]
            }
            await postEvento(date);
        }
    }

    return ( 
        <>
            <div className="fondo">
                <NavBar
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div class="contenedor">
                    <div className="fondoNegro" id="fondoNegro3">
                        <CloseIcon class="cerrarMenu" id="cerrar3" onClick={() => abrirFiltros()} />
                    </div>
                    <div class="col-2" id="filtros">
                        <strong>Ver por categorías</strong>
                            {categorias.map((element) => {
                                const clase = element.id == id? "strong" : "light";
                                return (
                                    <>
                                        <div class="categoria" onClick={() => redireccionar2(element)}>
                                            <span className={clase}>{element.name}</span>
                                            <span className="count">({element.count})</span>
                                        </div>
                                    </>
                                )
                            })}
                        <div class="filtroPrecio">
                            <strong>Filtrar por precio</strong>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                min={0.1}
                                max={70}
                                scale={(x) => x * 10000}
                                getAriaValueText={valuetext}
                            />
                            <div className="botonFiltro">
                                <button onClick={() => getProductsByPrice2(value, id)}>Filtrar</button>
                                <span>
                                    precio : ${format( value[0] * 10000)} - ${format(value[1] * 10000)}
                                </span>
                            </div>
                        </div>
                        <div class="masVendido">
                            <strong>Lo más vendido</strong>
                            {topSales.map((element, i) => {
                                const imagenUrl = element.images.length > 0 ? element.images[0].src : "";
                                return (
                                    <>
                                        {i <= 4 ? 
                                            <div class="item" onClick={() => redireccionar(element)}>
                                                <div className="parte1">
                                                    <span className="primero">{element.name} </span>
                                                    <span className="rating"><Rating name="disabled" value={5} disabled /></span>
                                                    <div className="precioRegular">
                                                        <span className="whats">${format(element.regular_price)}</span>
                                                        <span className="linea">-</span>
                                                        <strong>${format(element.price)}</strong>
                                                    </div>
                                                </div>
                                                <div className="parte2">
                                                    <img src={imagenUrl} alt="" width="50" />
                                                </div>
                                            </div>
                                            :
                                            null
                                        }
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div class="col-4">
                        {id == 0 ? 
                            null
                        :
                            <h2>{categoria.name}</h2>
                        } 
                        {id == 0 ? 
                            null
                            :
                            <img className="banner" src={urlImagen} alt="bannerID"/>
                        }
                        <div class="filtros">
                            <div className="showFiltros">
                                <button onClick={abrirFiltros}>Mostrar Filtros</button>
                            </div>
                            <FormControl className="form">
                                {/* <InputLabel id="demo-simple-select-label">Ordenar por precio: alto a bajo</InputLabel> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={orderBy}
                                    onChange={handleChange2}
                                >
                                    <MenuItem value={"popularity"}>Ordenar por popularidad</MenuItem>
                                    <MenuItem value={"rating"}>Ordenar por clasificación media</MenuItem>
                                    <MenuItem value={"date"}>Ordenar por las últimas</MenuItem>
                                    <MenuItem value={"price"}>Ordenar por precio: bajo a alto</MenuItem>
                                    <MenuItem value={"priceDesc"}>Ordenar por precio: alto a bajo</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div class="productos2">
                            <Backdrop className={classes.backdrop} open={loading}>
                                <CircularProgress color="inherit" />
                            </Backdrop>
                            {/* <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
                                <CircularProgress color="inherit" />
                            </Backdrop> */}
                        <div className="raw" id="scrollableDiv"> 
                            <InfiniteScroll
                                style={{overflow: "hidden"}}
                                dataLength={productos.length}
                                next={() => nextPage()}
                                hasMore={hasMore}
                                endMessage={<div className="circularProgress"></div>}
                                loader={<div className="circularProgress"><CircularProgress /></div> }
                            >
                                {productos.map((element) => {
                                    const imagen = element.images.length > 0? element.images[0].src : "";
                                    const descuento = Math.trunc(((element.price * 100)/ element.regular_price) - 100);
                                    return (
                                        <div className="columnas">
                                            <div className="card">   
                                                <img src={imagen} alt="" onClick={() => redireccionar(element)} />
                                                <div className="detalles" onClick={() => redireccionar(element)}>
                                                    <span className="titulo">
                                                        {element.name}
                                                    </span>
                                                    {element.regular_price > element.price ?
                                                    
                                                        <span className="regularPrice">
                                                            ${format(element.regular_price)}
                                                        </span>
                                                            :
                                                            null
                                                    }
                                                    <span className="price">
                                                        ${format(element.price)}
                                                    </span>
                                                    <span className="price" style={{color: element.stock_status === "instock" ? "green" : "red" }}>
                                                        {element.stock_status === "instock" ? "En stock" : "Sin stock"}
                                                    </span>
                                                </div>
                                                <div className="booton">
                                                    <button onClick={() => onAdd(element)}>
                                                        Agregar al carrito
                                                    </button>
                                                </div>
                                                {element.regular_price > element.price ?
                                                    <div className="circulo">
                                                        {descuento}%
                                                    </div>
                                                        :
                                                    null
                                                }
                                                   
                                            </div>  
                                        </div>
                                    )
                                })}
                            </InfiniteScroll>
                            
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {mensaje}
                </Alert>
            </Snackbar>
            <Footer1 />
            <Footer2 />
        </> 
    );
}
 
export default ListadoProducto;