import {useEffect, useState} from 'react';
import { browserName } from "react-device-detect";
import ReactPixel from 'react-facebook-pixel';
import { postEvento, geoLocalizacion } from '../api/apiConversion';
export const useCart = ( initial = []) => {
    const [productes, setProductos] = useState(initial);
    const [total, setTotal] = useState(0);
    const onAdd = async (producto, cantidad = 1) => {
        var localS = localStorage.getItem("carrito");
        setProductos(JSON.parse(localS));
        const options = {
            autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
            debug: false, // enable logs
        };
        const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
        ReactPixel.init("495580404127215",advancedMatching,options);
        ReactPixel.track("AddToCart");
        var filtrado = productes.filter(e => e.id === producto.id);
        
        if(filtrado.length == 1){
            var array = [];
            productes.forEach((element) => {
                if(element.id == producto.id){
                    if(element.cantidad + cantidad == 0){
                        
                    }
                    else
                    {
                        if(element.stockStatus == "instock"){
                            if(element.manejaStock){
                                if(cantidad + element.cantidad > element.stockDisponible){
                                
                                }else{
                                    element.cantidad += cantidad;
                                }
                            }else{
                                element.cantidad += cantidad;
                            }
                        }
                        
                    }
                }
                array.push(element);
            });
            setProductos(array);
        }else{
            if(producto.stock_status == "instock"){
                const resultado2 = await geoLocalizacion();
                console.log(resultado2);
                if(resultado2.ip.length > 0){
                    const dateTime = Date.now();
                    const timestamp = Math.floor(dateTime / 1000);
                    const date = 
                    {data : 
                        [{
                            "event_name": "AddToCart",
                            "event_time": timestamp,
                            "action_source": "website",
                            "event_source_url":"https://www.stulzel.com/",
                            "user_data": {
                                "client_ip_address":resultado2.ip,
                                "client_user_agent": browserName
                            }
                        }]
                    }
                    const resultado = await postEvento(date);
                    console.log(resultado);
                }

                const data = {
                    id: producto.id,
                    nombre: producto.name,
                    url: producto.images[0].src,
                    precio: producto.price,
                    stockDisponible:producto.stock_quantity,
                    manejaStock:producto.manage_stock,
                    cantidad:cantidad,
                    stockStatus:producto.stock_status,
                    dimension: producto.dimensions,
                    peso: producto.weight
                }
                if(localS != null){
                    setProductos([...productes, data]);
                }else{
                    setTotal(data.precio);
                    setProductos(data);
                }
            }
        }
    };

    useEffect(() => {
        localStorage.setItem("carrito",JSON.stringify(productes));
        setTotal(0);
        var contador = 0;
        productes.forEach((element) => {
            contador = contador + (parseInt(element.precio) * element.cantidad);
        })
        setTotal(contador);
    }, [productes]);

    const eliminarProducto = ( id ) => {
        if(productes.length === 0){
            var productosTemporal = JSON.parse(localStorage.getItem("carrito"));

            if(productosTemporal === null){

            }else{
                setProductos(productosTemporal);
            }

        }

        
        var productsTemporales = productes.filter((e) => e.id !== id);
        setProductos(productsTemporales);
        
    }

    const limpiarCarrito = () => { 
        localStorage.removeItem("carrito");
        setTotal(0);
        setProductos([]);
    }

    return [onAdd, limpiarCarrito, eliminarProducto, productes, total];
} 