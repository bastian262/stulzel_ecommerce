import React,{useState} from 'react';
// import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {  purple } from '@material-ui/core/colors';
import {useForm} from '../../hooks/useForm'
import VideocamIcon from '@material-ui/icons/Videocam';
// import {useFormValidation} from '../../hooks/useFormValidation'
import { Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Button from '@material-ui/core/Button';
import {signUp} from '../../api/signUp';
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor:"#000",
      '&:hover': {
        backgroundColor: "#2c2c2c",
      },
    },
  }))(Button);
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: 0,
      width: "100%"
    },
  }));
const SignUp = () => {
    const [loading, setloading] = useState(false);
    const classes = useStyles();
    const [values ,onChange ] = useForm({
        nombre:'',
        correo:'',
        telefono:'',
        direccion:'',
    });
        // const [ formValid,inputValidation] = useFormValidation({
        //     nombre: false,
        //     correo: false,
        //     telefono: false
        // });

    const {nombre, correo , telefono, direccion} = values;

    const SignUp = async () => {

        setloading(true);
        console.log(nombre);
        console.log(telefono);
        if(nombre.length < 2){
            notification["error"]({
                message:"Ingrese minimo un nombre y un apellido por favor"
            });
        }else if(telefono.length < 8){
            notification["error"]({
                message:"Ingrese un telefono valido"
            });
        }else{
            const data = {
                nombre,
                correo: correo.toLowerCase(),
                telefono,
                direccion
            }
            console.log(data);

            const resultado = await signUp(data);

            console.log(resultado);

            if(resultado.ok){
                notification["success"]({
                    message: `FELICITACIONES

                    TU INSCRIPCIÓN SE HA REALIZADO CON EXITO, EN UNOS MOMENTOS RECIBIRÁS UN MAIL CON LOS DETALLES DE LA ACTIVIDAD.
                    
                    POR FAVOR REVISA TU CARPETA DE SPAM SINO LLEGA EL MAIL A TU BANDEJA PRINCIPAL`
                });
            }else{
                notification["error"]({
                    message: "Este correo ya fue registrado"
                });
            }
        }
        setloading(false);
    }
    const antIcon = <LoadingOutlined spin />;
    return (
        <>
        <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
            <div class="card">
                <h2 className="tituloSolicitud" >Solicitud de inscripcion webinar <VideocamIcon className="icono" /> </h2>
                <form onChange={onChange} action="">
                    <div class="col">
                        <input 
                            type="text"
                            id="outlined-basic" 
                            label="Nombre Completo" 
                            placeholder="Nombre Completo" 
                            className="inputRojo"
                            name="nombre"  
                            value={nombre}

                        />
                    </div>
                    <div class="col">
                        <input 
                            type="text"
                            id="outlined-basic" 
                            placeholder="Correo electronico" 
                            className="inputRojo"
                            name="correo"  
                            value={correo}

                        />
                    </div>
                    <div class="col">
                        <input 
                            type="text"
                            id="outlined-basic" 
                            placeholder="WhatsApp" 
                            className="inputRojo"
                            name="telefono"  
                            value={telefono}

                        />
                    </div>
                    <div class="col">
                        <input 
                            type="text"
                            id="outlined-basic" 
                            placeholder="Dirección" 
                            className="inputRojo"
                            name="direccion"  
                            value={direccion}
                        />
                    </div>
                    <div class="col">
                        <ColorButton onClick={() => SignUp()} variant="contained" color="primary" className={classes.margin}>
                            REGISTRAR
                        </ColorButton>
                    </div>
                    <div class="col2">
                        <span>Ya estás registrado? </span> <a href="https://stulzel.com/webinar/" target="_blank" rel="noreferrer"> Haz Click Aquí</a>
                    </div>
                </form>
            </div> 
        </Spin>
        </>
      );
}
 
export default SignUp;