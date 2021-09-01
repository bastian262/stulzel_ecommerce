import React, { useState } from 'react';
import FormBilling from './formBilling';
import FormShipping from './formShipping';

const Direcciones = ({customer}) => {

    const[opcion, setopcion] = useState(1);
    return ( 
        <>
        <div className="direcciones">
            {opcion == 1 ? 
                <>
                    <span>Las siguientes direcciones se utilizarán por defecto en la página de pago.</span>
                    <div className="raw">
                        <div className="mitad">
                            <div className="titulo">
                                <h2>Dirección de facturación</h2>
                                <button onClick={() => setopcion(2)}> Editar </button>
                            </div>
                            <div className="dato">
                                <span className="span">{customer.billing.company}</span>
                                <span className="span">{customer.billing.first_name} {customer.billing.last_name }</span>
                                <span className="span">{customer.billing.address_1}</span>
                                <span className="span">{customer.billing.city}</span>
                                <span className="span">{customer.billing.state}</span>
                                <span className="span">{customer.billing.postcode}</span>
                                <span className="span">{customer.billing.phone}</span>
                                <span className="span">{customer.billing.email}</span>
                                <span className="span">Rut: {customer.meta_data[47].value}</span>
                                <span className="span">Dirección de la calle: {customer.meta_data[48].value}</span>
                                <span className="span">Numero de la calle: {customer.meta_data[49].value}</span>
                                <span className="span">Numero de Departamento / Local / Parcela / Sitio: {customer.meta_data[50].value}</span>
                                <span className="span">Comuna: {customer.meta_data[40].value}</span>
                                <span className="span">Teléfono 2: {customer.meta_data[51].value}</span>
                                <span className="span">¿Boleta o factura?: {customer.meta_data[52].value}</span>
                                <span className="span">¿Usar mismos datos ingresados anteriormente?: {customer.meta_data[53].value == 1 ? "Si" : "No"}</span>
                                {customer.meta_data[53].value == 2 ?
                                    <>
                                        <span className="span">Nombre o razón social: {customer.meta_data[54].value}</span>
                                        <span className="span">Rut: {customer.meta_data[55].value}</span>
                                        <span className="span">Dirección: {customer.meta_data[56].value}</span>
                                        <span className="span">Teléfono: {customer.meta_data[57].value}</span>
                                        <span className="span">Giro: {customer.meta_data[58].value}</span>
                                    </>
                                :
                                    null
                                }
                            </div>
                        </div>
                        <div className="mitad">
                            <div className="titulo">
                                <h2>Dirección de envío</h2>
                                <button onClick={() => setopcion(3)}> Editar </button>
                            </div>
                            <div className="dato">
                                <span className="span">{customer.shipping.company}</span>
                                <span className="span">{customer.shipping.first_name} {customer.billing.last_name }</span>
                                <span className="span">{customer.shipping.address_1}</span>
                                <span className="span">{customer.shipping.city}</span>
                                <span className="span">{customer.shipping.state}</span>
                                <span className="span">{customer.shipping.postcode} {customer.shipping.city}</span>
                            </div>
                        </div>
                    </div>
                </>
                : null
            }

            {opcion == 2 ? 
                <FormBilling
                    customer={customer}
                />
                :null
            }

            {opcion == 3 ? 
            
                <FormShipping
                    customer={customer}
                />
                :null
            }
        </div>
            
        </> 
    );
}
 
export default Direcciones;