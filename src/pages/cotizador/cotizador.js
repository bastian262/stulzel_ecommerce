import React,{useEffect, useState} from 'react';
import Header from '../../components/nav/nav'
import { Spin } from 'antd';
import { getProductos, getProductosById3 } from '../../api/productos';
import { postCotizar } from '../../api/destinos';
import destinos from '../../api/destinos.json';
import { useCart } from '../../hooks/useCart';
import { Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { useFormat } from '../../hooks/useFormat';
import svg from '../../assets/svg.svg'
// import httpBuildQuery from 'http-build-query';
const { Option } = Select;


    function onFocus() {
    console.log('focus');
    }

    function onSearch(val) {
    console.log('search:', val);
    }

const CotizadorPage = () => {
    const [format] = useFormat();
    const [productosState, setproductosState] = useState([]);
    const [destinoId, setdestinoId] = useState(0);
    const [productoId, setproductoId] = useState(0);
    const [totalCotizacion, setTotalCotizacion] = useState(0);
    const [productosItem, setProductosItem] = useState([]);
    const [cantidades, setCantidades] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(localS);


    useEffect(() => {
        obtenerProductos();
    }, [])


    const onChange = (value) => {
        setdestinoId(value);
    }
    const onChange2 = (value) => {
        setproductoId(value);
    }
    const onChangeInput = (value) => {
        setCantidad(value.target.value);
    }
    
    const eliminarArticulo = (prod) => {
        var articulos2 = productosItem.filter(e => e.name === prod.name);
        setTotalCotizacion(totalCotizacion - articulos2[0].cost)
        var articulos = productosItem.filter(e => e.name !== prod.name);
        setProductosItem(articulos);
    }

    const obtenerProductos = async () => {
        setLoading2(true);
        const result = await getProductos();
        setproductosState(result);
        setLoading2(false);
    } 
    const obtenerProducto = async () => {
        setLoading(true);
        const result = await getProductosById3(productoId);
        if(result.id > 0){
            setCantidades([
                ...cantidades,
                cantidad
            ]);
            const data ={
                height :  result.dimensions.height === "" ? 10 : result.dimensions.height * cantidad,
                width: result.dimensions.width === "" ? 10 : parseFloat(result.dimensions.width),
                length: result.dimensions.length === "" ? 10 : parseFloat(result.dimensions.length),
                weight: result.weight === "" ? 5 : result.weight * cantidad,
                destination: parseInt(destinoId),
            }
            const resultado2 = await postCotizar(data);
            if(resultado2.cost>0){
                const totalParcial = resultado2.cost + totalCotizacion;
                const data2 = Object.assign(result, {cost:resultado2.cost, totalParcial})
                setProductosItem([
                    ...productosItem,
                    data2
                ]);
                setTotalCotizacion(totalParcial);
            }
        }
        setLoading(false);
    } 
    const antIcon = <LoadingOutlined spin />;

    return ( 
        <>
            <div className="fondo">
                <Header
                    onAdd={onAdd}
                    limpiarCarrito = {limpiarCarrito}
                    eliminarProducto = {eliminarProducto}
                    productes = {productes}
                    total = {total}
                />
                <div className='contenedor'>
                    <div class="row">
                        <div class="titulo">
                            <h2>Cotizador de envios</h2>
                        </div>
                        <div class="cotizador">
                            <span className='tituloCotizador'>Destino:</span>
                            <Select
                            showSearch
                            // style={{ width: 300 }}
                            placeholder="Selecciona un destino por favor"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            className='selectCotizdor'
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                destinos.map((element, i) => {
                                    return ( <Option value={element.id}>{element.nombre}</Option> );
                                })
                            }
                        </Select>
                        </div>
                    </div>
                    <Spin spinning={loading2} size="large" tip="Cargando..." indicator={antIcon}>
                        <div class="row">
                            <div class="cotizador">
                                <span className='tituloCotizador'>Producto:</span>
                                <Select
                                    showSearch
                                    // style={{ width: 300 }}
                                    placeholder="Selecciona un producto por favor"
                                    optionFilterProp="children"
                                    onChange={onChange2}
                                    onSearch={onSearch}
                                    className='selectCotizdor'
                                    onFocus={onFocus}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {
                                        productosState.map((element, i) =>  <Option value={element.id}>{element.name}</Option>)
                                    }
                                </Select>
                                <input className='inputCotizdor' value={cantidad} onChange={onChangeInput} type="number" placeholder="Ingrese cantidad"/>
                                <div className='rowBtnCotizador'>
                                    <button onClick={()=>obtenerProducto()}>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </Spin>
                    <div class="row">
                        <div class="cotizador">
                            <table>
                                <thead>
                                    <tr className='trColtizador'>
                                        <th className='imagenCol'>
                                            
                                        </th>
                                        <th className='articuloCol2'>
                                            Artículo 
                                        </th>
                                        <th className='cantidadCol'>
                                            Cantidad
                                        </th>
                                        <th className='costoCol'>
                                            Costo Envío
                                        </th>
                                        <th className='cantidadCol'></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
                                        {productosItem.length > 0 ?
                                            productosItem.map((element,i) => {
                                                return(
                                                    <>
                                                        <tr className='trColtizador'>
                                                            <td className='imagenCol'> <img width="100" src={element.images[0].src} alt={element.name} /> </td>
                                                            <td className='articuloCol2'><span>{element.name}</span></td>
                                                            <td className='cantidadCol'><span>{cantidades[i]}</span></td>
                                                            <td className='costoCol'><span>${format(element.cost)}</span></td>
                                                            <td className='cantidadCol'><HighlightOffIcon className='iconoCloseCotizador' onClick={() => eliminarArticulo(element)}/></td>
                                                        </tr>
                                                    </>
                                                );
                                            })
                                            
                                        :
                                        <tr className='trColtizador'>
                                            <td> <span> Aún no hay productos agregados</span> </td>
                                        </tr>
                                            
                                        }
                                    </Spin>
                                </tbody>
                                <tbody>
                                        
                                    <tr className='trColtizador' style={{borderBottom: '0px'}}>
                                        <td className='imagenCol'> <img width="50" src={svg} alt="asd" />  </td>
                                        <td className='articuloCol2'><strong>Costo total envío</strong></td>
                                        <td className='cantidadCol'><span></span></td>
                                        <td className='costoCol'><span>${format(totalCotizacion)}</span></td>
                                        <td className='cantidadCol'><CheckCircleOutlineOutlinedIcon className='iconoCheckCotizador'/></td>
                                    </tr>
                                     
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                    
            </div>
        </> 
    );
}
 
export default CotizadorPage;