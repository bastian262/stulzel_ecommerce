import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ReactPixel from 'react-facebook-pixel';
import { useForm } from '../../hooks/useForm';
import { postCustomer } from '../../api/customer';
import { emailValidation } from '../../utils/formValidation';
import { browserName } from "react-device-detect";
import Sha256 from 'sha256';
import { postEvento, geoLocalizacion } from '../../api/apiConversion';
import { Button } from 'antd';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SignUp = () => {  
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        if(emailValidation(correo)){
            if(password.trim().length >= 4){
                const data = {
                    email: correo,
                    password
                }
                const resultado = await postCustomer(data);
                if(resultado.id>0){

                    const resultado2 = await geoLocalizacion();
                    if(resultado2.ip.length > 0){
                        const dateTime = Date.now();
                        const timestamp = Math.floor(dateTime / 1000);
                        const date = {
                            data : [{
                                "event_name": "CompleteRegistration",
                                "event_time": timestamp,
                                "action_source": "website",
                                "event_source_url":"https://www.stulzel.com/micuenta",
                                "user_data": {
                                    "em": [
                                        Sha256(correo)
                                    ],
                                    "client_ip_address":resultado2.ip,
                                    "client_user_agent": browserName
                                }
                            }]
                        }
                        
                        const result = await postEvento(date);
                        console.log(result);
                    }
                    const options = {
                        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
                        debug: false, // enable logs
                    };
                    const advancedMatching = { em: 'bastianorellanaf@gmail.com' };
                    ReactPixel.init("495580404127215",advancedMatching,options);
                    ReactPixel.track("CompleteRegistration");
                    setOpen2(true);
                    setMensaje("Usuario agregado correctamente");
                }else{
                    setOpen(true);
                    setMensaje("Hubo un error inesperado");
                }
            }else{
                setMensaje("Ingrese una clave válida");
                setLoading(true);
                setOpen(true);
            }
        }else{
            setMensaje("Ingrese un correo electrónico válido");
            setOpen(true);
        }
        setLoading(false);

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
            {/* <button onClick={() => signUpPost()}>Registrarse</button> */}
            <Button type="primary" loading={loading} onClick={() => signUpPost()}>
                Registrarse
            </Button>
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