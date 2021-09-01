import React, {useState} from 'react';
import { useForm } from '../../hooks/useForm';
import { putCustomer } from '../../api/customer';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const DatosPersonales = () => {
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [severity, setSeverity] = useState("success");
    const [values, onChange, setvalues] = useForm({
        email:usuario.email,
        first_name:usuario.firstName,
        last_name:usuario.lastName,
        display_name: usuario.displayName,
        passwordActual:'',
        password1:'',
        password2:''
    });

    const {email, first_name, last_name, display_name, password1, password2, passwordActual } = values;
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const submit = async () => {
        if(passwordActual == '')
        {
            const data = {
                email,
                first_name,
                last_name,
                display_name
            }
            const resultado = await putCustomer(usuario.id, data);
            if(resultado.id > 0){
                setOpen(true);
                setMensaje("Cliente actualizado correctamente");
                setSeverity("success");
            }else{
                setOpen(true);
                setMensaje("No se pudo actualizar el cliente");
                setSeverity("error");
            }
        }else{
            if(usuario.password == passwordActual){
                if(password1 == password2){
                    const data = {
                        email,
                        first_name,
                        last_name,
                        display_name,
                        password: password1
                    }
                    const resultado = await putCustomer(usuario.id, data);
                    if(resultado.id > 0){
                        setOpen(true);
                        setMensaje("Cliente actualizado correctamente");
                        setSeverity("success");
                    }else{
                        setOpen(true);
                        setMensaje("No se pudo actualizar el cliente");
                        setSeverity("error");
                    }
                }else{
                    setOpen(true);
                    setMensaje("La nueva contraseña no coincide");
                    setSeverity("error");
                }
            }else{
                setSeverity("error");
                setOpen(true);
                setMensaje("Las contraseñas no coinciden");
            }   
        }
    }   

    return ( 
        <>
        <div className="direcciones">

            <div className="form">
                <h2>Detalles de la cuenta</h2>
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
                        <label>Apellidos*</label>
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
                    <label>Nombre visible *</label>
                    <input 
                        type="text" 
                        value={display_name}
                        name="display_name"
                        id="display_name"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Correo Electronico *</label>
                    <input 
                        type="text" 
                        value={email}
                        name="email"
                        id="email"
                        onChange={onChange}
                    />
                </div>
                <h2>Cambio de contraseña</h2>
                <div className="campo">
                    <label>Contraseña actual (déjalo en blanco para no cambiarla)</label>
                    <input 
                        type="text" 
                        value={passwordActual}
                        name="passwordActual"
                        id="passwordActual"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Nueva contraseña (déjalo en blanco para no cambiarla)</label>
                    <input 
                        type="text" 
                        value={password1}
                        name="password1"
                        id="password1"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <label>Confirmar nueva contraseña (déjalo en blanco para no cambiarla)</label>
                    <input 
                        type="text" 
                        value={password2}
                        name="password2"
                        id="password2"
                        onChange={onChange}
                    />
                </div>
                <div className="campo">
                    <button className="btn" onClick={() => submit()}>Actualizar datos</button>
                </div>
            </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {mensaje}
            </Alert>
        </Snackbar>
        
        </> 
    );
}
 
export default DatosPersonales;