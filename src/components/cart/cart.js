import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { useFormat } from '../../hooks/useFormat';

import { useHistory } from 'react-router';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Cart = ({onAdd,productes, limpiarCarrito, eliminarProducto, abrirCart, total}) => {
    const history = useHistory();
    const [format] = useFormat();
    const redireccionarCheckout = () => {
        
        let body = document.getElementsByTagName("body");
        body[0].style.height = "auto";
        body[0].style.overflow = "visible";
        history.push("/checkout");
    }
    return ( 
        <>  
            <div class="fondoNegro2" id="fondoNegro2"> 
                <CloseIcon class="cerrarMenu" id="cerrar2" onClick={() => abrirCart()}/>
                <div class="cart" id="cart">
                    <div class="titulo">
                        <h2>Carrito de compras</h2>
                    </div>
                    {productes.length === 0 ? 
                        <div class="cartEmpty">
                            <AddShoppingCartIcon class="iconoCarrito" />
                            <h2>No hay productos en el carrito</h2>
                        </div>
                        :
                        <>
                        <div class="productosCarrito">
                            {productes.map((element) => {
                                return (
                                    <div class="contenedor">
                                        <CloseIcon class="eliminarItem" onClick={() => eliminarProducto(element.id)} />
                                        <div className="cantidad2">
                                            <span>{element.cantidad}</span>
                                            <ExpandMoreIcon className="more" onClick={()=> onAdd(element,-1)} />
                                            <ExpandLessIcon className="less" onClick={()=> onAdd(element)}/>
                                        </div>
                                        <div class="nombre">
                                            <span class="nombre2">
                                                {element.nombre}
                                            </span> 
                                            <span class="cantidad"> 
                                                {element.cantidad} x ${element.precio}
                                            </span>
                                        </div>
                                        <div class="imagen">
                                            <img src={element.url} alt="imagenCarrito" width="50" />
                                        </div>
                                    </div>
                                )
                            })
                                
                            }
                            
                        </div>
                        <div class="subtotal">
                            <strong class="finalizar">
                                subtotal :
                            </strong>
                            <span class="limpiarCarrito">
                                ${format(total)}
                            </span>
                        </div>
                        <div class="botones">
                            <button class="finalizar" onClick={() => redireccionarCheckout()}>
                                Finalizar Compra
                            </button>
                            <button class="limpiarCarrito" onClick={() => limpiarCarrito ()}>
                                Limpiar Carrito
                            </button>
                        </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}
 
export default Cart;