import React,{useState} from 'react';
import { putCustomer } from '../../api/customer';
import { useForm } from '../../hooks/useForm';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Button } from 'antd';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormShipping = ({customer}) => {
    const data = {
       company: customer.shipping.company,
       first_name: customer.shipping.first_name,
       last_name: customer.shipping.address_1,
       city: customer.shipping.city,
       state: customer.shipping.state,
       address: customer.shipping.address_1,
       postcode: customer.shipping.postcode
    }
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const [values, onChange, setvalues] = useForm(data);

    const {company, first_name, last_name, city, state, postcode,address} = values;
    
    const updateShipping = async () => {
        setLoading(true);
        const data = {
            shipping:{
                company,
                first_name,
                last_name,
                city,
                state,
                address_1:address,
                postcode,
            }
        }

        const resultado = await putCustomer(customer.id, data);
        console.log(resultado);
        if(resultado.id>0){
            setOpen(true);
            setMensaje("Cliente actualizado correctamente");
        }else{
            setOpen(true);
            setMensaje("No se pudo actualizar datos");
        }
        setLoading(false);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <div className="form">
                <h2>Direccion de envío</h2>
                <div className="campo">
                    <div className="mitad">
                        <label>Nombre*</label>
                        <input 
                            type="text" 
                            value={first_name} 
                            name="first_name"
                            id="first_name"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mitad">
                        <label>Apellido*</label>
                        <input 
                            type="text" 
                            value={last_name} 
                            name="last_name"
                            id="last_name"
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="campo">
                    <label>Nombre de la empresa *</label>
                    <input 
                        type="text" 
                        value={company}
                        name="company"
                        id="company"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Direccion de la calle*</label>
                    <input 
                        type="text" 
                        value={address}
                        name="address"
                        id="address"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Localidad / Ciudad*</label>
                    <input 
                        type="text" 
                        value={city}
                        name="city"
                        id="city"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Codigo Postal*</label>
                    <input 
                        type="text" 
                        value={postcode}
                        name="postcode"
                        id="postcode"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <Button className="btn" type="primary" loading={loading} onClick={() => updateShipping()}>
                        Guardar dirección
                    </Button>
                    {/* <button className="btn" onClick={() => updateShipping()}>Guardar dirección</button> */}
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {mensaje}
                </Alert>
            </Snackbar>
        </>
      );
}
 
export default FormShipping;