import React,{useState} from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { loginCustomer } from '../../api/customer';
function Alert(props) {
return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SignIn = () => {

    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const history = useHistory();
    const [values, onChange, setValue ] = useForm({
        username:'',
        password:''
    }); 
    const {username, password} = values;

    const post = async () => {
        if(username.trim().length >= 2){
            if(password.trim().length >= 4){
                const data = {
                    username,
                    password
                }
                const resultado = await loginCustomer(data);
                console.log(resultado);
                if(resultado.statusCode == 200){
                    console.log(1);
                    const data = {
                        displayName:resultado.data.displayName,
                        email:resultado.data.email,
                        firstName:resultado.data.firstName,
                        id:resultado.data.id,
                        lastName:resultado.data.lastName,
                        nicename:resultado.data.nicename,
                        token: resultado.data.token,
                        password
                    }
                    localStorage.setItem("usuario", JSON.stringify(data));
                    history.goBack();
                    history.push("/micuenta");
                }else{
                    setMensaje("Credenciales inválidas");
                    setOpen(true);
                }
            }else{
                setMensaje("Ingrese una clave válida");
                setOpen(true);
            }
        }else{
            setMensaje("Ingrese un correo electrónico o nombre de usuario válido");
            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (    
        <>
            <span class="span">Acceder</span>
            <div class="campo">
                <input 
                    type="text" 
                    placeholder="Nombre de usuario o correo electrónico *"
                    name="username"
                    id="username"
                    value={username}
                    onChange={onChange}
                />
            </div>
            <div class="campo">
                <input 
                    type="text" 
                    placeholder="Contraseña *" 
                    name="password"
                    id="password"
                    onChange={onChange}
                    value={password}
                />
            </div>
            <div class="campo">
                <strong>Recuerdame</strong>
                <input type="checkbox" name="" id="" class="check" />
            </div>
            <div class="boton">
                <button onClick={() => post()}>Acceder</button>
            </div>
            <div class="forgive">
                <a>¿Olvidaste tu contraseña?</a>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {mensaje}
                </Alert>
            </Snackbar>
        </>  
    );
}
 
export default SignIn;