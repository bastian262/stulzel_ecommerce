import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useForm } from '../../hooks/useForm';
import { postCustomer } from '../../api/customer';
import { emailValidation } from '../../utils/formValidation';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SignUp = () => {  
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [mensaje, setMensaje] = useState("");
    // const [mensaje2, setMensaje2] = useState("");
    const [values, onChange, setValues] = useForm({
        correo: '',
        password: ''
    });
    const {correo, password} = values;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen2(false);
    };
    const signUpPost = async () => {
        if(emailValidation(correo)){
            if(password.trim().length >= 4){
                const data = {
                    email: correo,
                    password
                }
                const resultado = await postCustomer(data);
                if(resultado.id>0){
                    setOpen2(true);
                    setMensaje("Usuario agregado correctamente");
                }else{
                    setOpen(true);
                    setMensaje("Hubo un error inesperado");
                }
                console.log(resultado);
            }else{
                setMensaje("Ingrese una clave válida");
                setOpen(true);
            }
        }else{
            setMensaje("Ingrese un correo electrónico válido");
            setOpen(true);
        }
    }
    return (<>
        <span class="span">Registrarse</span>
        <div class="campo">
            <input 
                type="text" 
                placeholder="Correo Electrónico"
                name="correo"
                id="correo"
                value={correo}
                onChange={onChange}
            />
        </div>
        <div class="campo">
            <input 
                type="text"
                placeholder="Contraseña" 
                name="password"
                id="password"
                value={password}
                onChange={onChange}
            />
        </div>
        <div class="campo">
            <strong>Subscribirse a nuestro newsletter</strong>
            <input type="checkbox" name="" id="" class="check" />
        </div>
        <div class="boton">
            <button onClick={signUpPost}>Registrarse</button>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {mensaje}
            </Alert>
        </Snackbar>
        <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose2} severity="success">
                {mensaje}
            </Alert>
        </Snackbar>
    </>  );
}
 
export default SignUp;