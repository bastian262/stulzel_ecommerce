import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { useFormat } from '../../hooks/useFormat';
import 'moment/locale/es';

moment.locale('es');
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const MisPedidos = ({pedidos}) => {
    const [format] = useFormat();
    const [state,setState] = useState(false);
    const [pedido,setPedido] = useState({});
    const classes = useStyles();
    const llenarPedido = (ped) => {
        setPedido(ped);
        setState(true);
    }
    return (
        <>
            {!state ? 
                pedidos.length>0 ? 
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Pedido</TableCell>
                                <TableCell align="right">Fecha</TableCell>
                                <TableCell align="right">Estado</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {pedidos.map((pedidos) => {
                                var estado;
                                switch (pedidos.status) {
                                    case "on-hold": estado = "En espera"
                                        break;
                                    case "pending": estado = "Pendiente de pago"
                                        break;
                                    case "cancelled": estado = "Cancelado"
                                        break;
                                    case "processing": estado = "Procesando"
                                        break;
                                    case "completed": estado = "Completado"
                                        break;
                                    case "failed": estado = "Fállida"
                                        break;
                                    case "refunded": estado = "Reembolsada"
                                        break;
                                    default:  estado = "En espera"
                                         break;
                                }
                                return (
                                    <TableRow key={pedidos.id}>
                                    <TableCell component="th" scope="row">
                                        # {pedidos.id}
                                    </TableCell>
                                    <TableCell align="right">{moment(pedidos.date_created).format('ll')}</TableCell>
                                    <TableCell align="right">{estado}</TableCell>
                                    <TableCell align="right">{pedidos.total}</TableCell>
                                    <TableCell align="right"><a onClick={() => llenarPedido(pedidos)}>Ver</a></TableCell>
                                    </TableRow>
                                );
                            })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                :
                    <h2>No hay pedidos aún</h2>
        
        :
            <>
            {pedido.id > 0 ? 
                <div className="detallePedidos">
                        <span>El pedido #{pedido.id} se realizó el {moment(pedido.date_created).format('LL')} y está actualmente En espera.</span>
                        <div className="cuadro">
                            <h2>Detalles del pedido</h2>
                            {pedido.line_items.map((element,i) => {
                                return (<>
                                    {i===0?
                                    <>
                                        <div className="division">
                                            <strong>Producto</strong>
                                        </div>
                                        <div className="division">
                                            <strong>Total</strong>
                                        </div>
                                    </>
                                    :
                                    null
                                    }
                                        <div className="division pad">
                                            <span>{element.name}</span>
                                        </div>
                                        <div className="division">
                                            <span>${format(element.total)}</span>
                                        </div>
                                    </>
                                );
                            })}
                            <div className="wololo">

                            </div>
                            <div className="raw">
                                <div className="division pad">
                                    <strong>Subtotal</strong>
                                </div>
                                <div className="division">
                                    <span>${format(pedido.total)}</span>
                                </div>
                            </div>
                            {pedido.shipping_lines.length>0?
                                <div className="raw">
                                    <div className="division pad">
                                        <strong>Envío</strong>
                                    </div>
                                    <div className="division">
                                        <span>{pedido.shipping_lines[0].method_title} ${pedido.shipping_lines[0].total}</span>
                                    </div>
                                </div>
                            :
                                null
                            }
                            <div className="raw">
                                <div className="division pad">
                                    <strong>Método de pago</strong>
                                </div>
                                <div className="division">
                                    <span>{pedido.payment_method_title}</span>
                                </div>
                            </div>
                            <div className="raw">
                                <div className="division pad">
                                    <strong>Total</strong>
                                </div>
                                <div className="division">
                                    <span>${format(pedido.total)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="raw">
                            <div className="division">
                                <h2>Dirección de facturación</h2>
                                <span>{pedido.billing.first_name} {pedido.billing.last_name}</span>
                                <span>{pedido.billing.address_1}</span>
                                <span>{pedido.billing.city}</span>
                                <span>{pedido.billing.state}</span>
                                <span>{pedido.billing.postcode}</span>
                                <span>{pedido.billing.phone}</span>
                                <span>{pedido.billing.email}</span>
                            </div>
                            <div className="division">
                                <h2>Dirección de envío</h2>
                                <span>{pedido.shipping.first_name} {pedido.billing.last_name}</span>
                                <span>{pedido.shipping.address_1}</span>
                                <span>{pedido.shipping.city}</span>
                                <span>{pedido.shipping.state}</span>
                                <span>{pedido.shipping.postcode}</span>
                                <span>{pedido.shipping.country}</span>
                                <span>{pedido.shipping.email}</span>
                            </div>
                        </div>
                </div>
            :
             null
            }
            </>
        }

        </>  
    );
}
 
export default MisPedidos;