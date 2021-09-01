import {useEffect, useState} from 'react';

export const useCart = ( initial = []) => {
    const [productes, setProductos] = useState(initial);
    const [total, setTotal] = useState(0);
    const onAdd = (producto, cantidad = 1) => {
        var localS = localStorage.getItem("carrito");
        setProductos(JSON.parse(localS));
        
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
    // const modificarCantidad = ( id, cantidad ) => {
    //     if(productes.length === 0){
    //         var productosTemporal = JSON.parse(localStorage.getItem("carrito"));

    //         if(productosTemporal === null){

    //         }else{
    //             setProductos(productosTemporal);
    //         }

    //     }
    //     productes.forEach(element => {
    //         if(element.id === id){

    //         }
    //     });
        
    // }
    const limpiarCarrito = () => { 
        localStorage.removeItem("carrito");
        setTotal(0);
        setProductos([]);
    }

    return [onAdd, limpiarCarrito, eliminarProducto, productes, total];
} 