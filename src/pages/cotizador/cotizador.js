import React,{useEffect, useState} from 'react';
import Header from '../../components/nav/nav'
import { Spin } from 'antd';
import { getProductos, getProductosById } from '../../api/productos';
import { postCotizar } from '../../api/destinos';
import destinos from '../../api/destinos.json';
import { useCart } from '../../hooks/useCart';
import { Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import CloseIcon from '@material-ui/icons/Close';
// import httpBuildQuery from 'http-build-query';
const { Option } = Select;


    function onFocus() {
    console.log('focus');
    }

    function onSearch(val) {
    console.log('search:', val);
    }

const CotizadorPage = () => {
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
        const result = await getProductosById(productoId);
        console.log(result)
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
                console.log(data2)
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
                <div class="titulo">
                    <h2>Cotizador de envios</h2>
                </div>
                <div class="row">
                    <div class="col-2">
                        <span>Destino:</span>
                        <Select
                        showSearch
                        style={{ width: 300 }}
                        placeholder="Selecciona un destino por favor"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
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
                        <div class="col-2">
                            <Select
                                showSearch
                                style={{ width: 300 }}
                                placeholder="Selecciona un producto por favor"
                                optionFilterProp="children"
                                onChange={onChange2}
                                onSearch={onSearch}
                                onFocus={onFocus}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    productosState.map((element, i) =>  <Option value={element.id}>{element.name}</Option>)
                                }
                            </Select>
                            <input value={cantidad} onChange={onChangeInput} type="number" placeholder="Ingrese cantidad"/>
                        </div>
                        <div class="col-2">
                            <button onClick={()=>obtenerProducto()}>Agregar</button>
                        </div>
                    </div>
                </Spin>
                <div class="row">
                    <div class="col-1">
                        <table>
                            <tr>
                                <th>
                                    Imagen
                                </th>
                                <th>
                                    Nombre Producto
                                </th>
                                <th>
                                    Cantidad
                                </th>
                                <th>
                                    opcion
                                </th>
                            </tr>
                            <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
                                {productosItem.length > 0 ?
                                    productosItem.map((element,i) => {
                                        return(
                                            <>
                                                <tr>
                                                    <td> <img width="120" src={element.images[0].src} alt={element.name} /> </td>
                                                    <td>{element.name}</td>
                                                    <td>{cantidades[i]}</td>
                                                    <td><CloseIcon onClick={() => eliminarArticulo(element)}/></td>
                                                </tr>
                                            </>
                                        );
                                    })
                                    
                                :
                                    null
                                }
                            </Spin>

                        </table>
                    </div>
                </div>
                <div class="row">
                    <span>${totalCotizacion}</span>
                </div>
                    
            </div>
        </> 
    );
}
 
export default CotizadorPage;