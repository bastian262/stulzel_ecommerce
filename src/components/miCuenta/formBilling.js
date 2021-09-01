import React, {useState, useEffect} from 'react';
import {useForm} from '../../hooks/useForm';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { putCustomer } from '../../api/customer';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const FormBilling = ({customer}) => {

    const data = {
        company:customer.billing.company,
        first_name:customer.billing.first_name,
        last_name:customer.billing.last_name,
        address_1:customer.billing.address_1,
        city:customer.billing.city,
        state:customer.billing.state,
        postcode:customer.billing.postcode,
        phone:customer.billing.phone,
        email:customer.billing.email,
        rut:customer.meta_data[47].value,
        address:customer.meta_data[48].value,
        number:customer.meta_data[49].value,
        numberDepa:customer.meta_data[50].value,
        comuna:customer.meta_data[40].value,
        phone2:customer.meta_data[51].value,
        boletaFactura:customer.meta_data[52].value,
        same:customer.meta_data[53].value,
        razon:customer.meta_data[54].value,
        rut2:customer.meta_data[55].value,
        direccion2:customer.meta_data[56].value,
        telefono2:customer.meta_data[57].value,
        correo:'',
        giro:customer.meta_data[58].value,
    }
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const [values, onChange, setValues] = useForm(data);
    const {razon,rut2,direccion2, telefono2,correo,giro,company, first_name, last_name, address_1, city, state, postcode, phone, email, rut, address, number, numberDepa, comuna, phone2, boletaFactura, same} = values;
    const booleano = customer.meta_data[53].value == 1 ? true : false;
    const [value, setValue] = useState(boletaFactura);
    const [checked, setChecked] = useState(booleano);


    useEffect(() => {
        var igual;
        if(checked){
            igual = 1;
            setValues({...values, ["same"]:igual});
        }else{
            igual = 2;
            setValues({...values, ["same"]:igual});
        }
    }, [checked]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleChange2 = (event) => {
        setChecked(event.target.checked);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const updateUser = async () => {
        var array = [];
        const data1 = {
            id:customer.meta_data[47].id,
            key:customer.meta_data[47].key,
            value:rut
        }
        const data2 = {
            id:customer.meta_data[48].id,
            key:customer.meta_data[48].key,
            value:address
        }
        const data3 = {
            id:customer.meta_data[49].id,
            key:customer.meta_data[49].key,
            value:number
        }
        const data4 = {
            id:customer.meta_data[50].id,
            key:customer.meta_data[50].key,
            value:numberDepa
        }
        const data5 = {
            id:customer.meta_data[51].id,
            key:customer.meta_data[51].key,
            value:phone2
        }
        const data6 = {
            id:customer.meta_data[40].id,
            key:customer.meta_data[40].key,
            value:comuna
        }
        const data7 = {
            id:customer.meta_data[52].id,
            key:customer.meta_data[52].key,
            value:boletaFactura
        }
        const data8 = {
            id:customer.meta_data[53].id,
            key:customer.meta_data[53].key,
            value:same
        }
        array.push(data1);
        array.push(data2);
        array.push(data3);
        array.push(data4);
        array.push(data5);
        array.push(data6);
        array.push(data7);
        array.push(data8);
        if(checked){
            const data = {
                billing:{
                    first_name,
                    last_name,
                    address_1,
                    city,
                    state,
                    postcode,
                    phone,
                    email,
                },
                meta_data: array,
            }
            console.log(data);
            const resultado = await putCustomer(customer.id, data);
            console.log(resultado);
            if(resultado.id > 0){
                setOpen(true);
                setMensaje("Cliente actualizado correctamente");
            }else{
                setOpen(true);
                setMensaje("No se pudo actualizar datos");
            }
        }else{
            const data9 = {
                id:customer.meta_data[54].id,
                key:customer.meta_data[54].key,
                value:razon
            }
            const data10 = {
                id:customer.meta_data[55].id,
                key:customer.meta_data[55].key,
                value:rut2
            }
            const data11 = {
                id:customer.meta_data[56].id,
                key:customer.meta_data[56].key,
                value:direccion2
            }
            const data12 = {
                id:customer.meta_data[57].id,
                key:customer.meta_data[57].key,
                value:telefono2
            }
            const data13 = {
                id:customer.meta_data[58].id,
                key:customer.meta_data[58].key,
                value:giro
            }
            array.push(data9);
            array.push(data10);
            array.push(data11);
            array.push(data12);
            array.push(data13);

            const data = {
                billing:{
                    first_name,
                    last_name,
                    address_1,
                    city,
                    state,
                    postcode,
                    phone,
                    email,
                },
                meta_data: array,
            }
            const resultado = await putCustomer(customer.id, data);
            if(resultado.id > 0){
                setOpen(true);
                setMensaje("Cliente actualizado correctamente");
            }else{
                setOpen(true);
                setMensaje("No se pudo actualizar datos");
            }
        }
    }

    return ( 
        <>
            <div className="form">
                <h2>Direccion de facturación</h2>
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
                    <label>Rut *</label>
                    <input 
                        type="text" 
                        value={rut}
                        name="rut"
                        id="rut"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Dirección de la calle *</label>
                    <input 
                        type="text" 
                        value={address}
                        name="address"  
                        id="address"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Numeración de la calle *</label>
                    <input 
                        type="text" 
                        value={number}
                        name="number"
                        id="number"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Numero de Departamento / Local / Parcela / Sitio</label>
                    <input 
                        type="text" 
                        value={numberDepa}
                        name="numberDepa"
                        id="numberDepa"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Comuna *</label>
                    <input 
                        type="text" 
                        value={comuna}
                        name="comuna"
                        id="comuna"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Ciudad *</label>
                    <input 
                        type="text" 
                        value={city}
                        name="city"
                        id="city"
                        onChange={onChange}
                    />
                </div>
                
                <div className="campo">
                    <label>Codigo postal *</label>
                    <input 
                        type="text" 
                        value={postcode}
                        name="postcode"
                        id="postcode"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Teléfono *</label>
                    <input 
                        type="text" 
                        value={phone}
                        name="phone"
                        id="phone"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Teléfono 2 *</label>
                    <input 
                        type="text" 
                        value={phone2}
                        name="phone2"
                        id="phone2"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Correo electrónico *</label>
                    <input 
                        type="text" 
                        value={email}
                        name="email"
                        id="email"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <FormControl component="fieldset">
                        <label>¿Boleta o Factura?</label>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="boleta" control={<Radio color="primary" />} label="Boleta" />
                            <FormControlLabel value="factura" control={<Radio color="primary" />} label="Factura" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="campo">
                    <label>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange2}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            color="primary"
                        />
                        ¿Usar los mismos datos ingresados anteriormente?
                    </label>
                </div>
                {!checked?
                    <>
                        <div className="campo">
                            <div className="mitad">
                                <label>Nombre o Razón social*</label>
                                <input 
                                    type="text" 
                                    value={razon} 
                                    name="razon"
                                    id="razon"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mitad">
                                <label>Rut*</label>
                                <input 
                                    type="text" 
                                    value={rut2} 
                                    name="rut2"
                                    id="rut2"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="campo">
                            <label>Dirección *</label>
                            <input 
                                type="text" 
                                value={direccion2}
                                name="direccion2"
                                id="direccion2"
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo">
                            <label>Teléfono *</label>
                            <input 
                                type="text" 
                                value={telefono2}
                                name="telefono2"
                                id="telefono2"
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo">
                            <label>Correo Electrónico *</label>
                            <input 
                                type="text" 
                                value={correo}
                                name="correo"
                                id="correo"
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo">
                            <label>Giro *</label>
                            <input 
                                type="text" 
                                value={giro}
                                name="giro"
                                id="giro"
                                onChange={onChange}
                            />
                        </div>
                    </>
                : null}
                <div className="campo">
                    <button className="btn" onClick={() => updateUser()}>Guardar dirección</button>
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
 
export default FormBilling;