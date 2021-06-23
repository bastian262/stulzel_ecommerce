import React,{useEffect, useState} from 'react';
import Header from '../../components/nav/nav'
import { makeStyles } from '@material-ui/core/styles';
import { Spin } from 'antd';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { getProductos, getProductosById } from '../../api/productos';
import { postCotizar} from '../../api/destinos';
import destinos from '../../api/destinos.json';
import { Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { FormatListBulletedTwoTone } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';

const { Option } = Select;


    function onFocus() {
    console.log('focus');
    }

    function onSearch(val) {
    console.log('search:', val);
    }
    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        },
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        },
    }));
const CotizadorPage = () => {
    const [destinosState, setdestinosState] = useState([]);
    const [productosState, setproductosState] = useState([]);
    const [destinoId, setdestinoId] = useState(0);
    const [productoId, setproductoId] = useState(0);
    const [productosItem, setProductosItem] = useState([]);
    const [cantidades, setCantidades] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const classes = useStyles();


    useEffect(() => {
        setdestinosState(destinos);
        obtenerProductos();
    }, [])


    const onChange = (value) => {
        setdestinoId(value);
    }
    const onChange2 = (value) => {
        setproductoId(value);
    }
    const onChangeInput = (value) => {
        console.log(value.target.value);
        setCantidad(value.target.value);
    }
    

    const obtenerProductos = async () => {
        setLoading2(true);
        const result = await getProductos();
        console.log(result);
        setproductosState(result);
        setLoading2(false);

    } 

    const obtenerProducto = async () => {
        setLoading(true);
        const result = await getProductosById(productoId);
        console.log(result);
        if(result.id > 0){
            setProductosItem([
                ...productosItem,
                result
            ]);
            setCantidades([
                ...cantidades,
                cantidad
            ]);
            
            const data = {
                key: "FREE-479481FEE7-853835A855236957B3D6-FD9",
                height: result.dimensions.height === "" ? 10 : result.dimensions.height * cantidad,
                width: result.dimensions.width === "" ? 10 : result.dimensions.width,
                length: result.dimensions.length === "" ? 10 : result.dimensions.length,
                weight: result.dimensions.weight === "" ? 5 : result.dimensions.weight * cantidad,
                origen: 1,
                destino: destinoId,
                support: 0,
            }

            const resultado2 = await postCotizar(data);
            console.log(resultado2);
        }
        setLoading(false);

    } 

    const antIcon = <LoadingOutlined spin />;

    return ( 
        <>
            <div className="fondo">
                <Header/>
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
                                                <td><CloseIcon/></td>
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
                    <button>Cotizar</button>
                </div>
                    
            </div>
        </> 
    );
}
 
export default CotizadorPage;