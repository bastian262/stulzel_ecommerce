import React,{useState} from 'react';
// import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {  purple } from '@material-ui/core/colors';
import {useForm} from '../../hooks/useForm'
import VideocamIcon from '@material-ui/icons/Videocam';
import { useHistory } from "react-router-dom";

// import {useFormValidation} from '../../hooks/useFormValidation'
import { Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Button from '@material-ui/core/Button';
import {signIn} from '../../api/signUp';
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
const SignIn = () => {
    const history = useHistory();
    const [loading, setloading] = useState(false);
    const classes = useStyles();
    const [values ,onChange ] = useForm({
        correo:'',
    });
        // const [ formValid,inputValidation] = useFormValidation({
        //     nombre: false,
        //     correo: false,
        //     telefono: false
        // });

    const {correo } = values;

    const SignIn = async () => {

        setloading(true);

            const data = {
                correo,
            }
            const resultado = await signIn(data);
            console.log(resultado);
            if(resultado.ok){
                
                localStorage.setItem("nombreUsuario",resultado.user.nombre); 

                history.push('/webinar')
            }else{
                notification["error"]({
                    message:resultado.message
                });
            }
        
        setloading(false);
    }
    const antIcon = <LoadingOutlined spin />;
    return (
        <>
        <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
            <div class="card">
                <h2 className="tituloSolicitud" >Ingresa al webinar <VideocamIcon className="icono" /> </h2>
                <form onChange={onChange} action="">
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
                        <ColorButton onClick={() => SignIn()} variant="contained" color="primary" className={classes.margin}>
                            INGRESAR
                        </ColorButton>
                    </div>
                </form>
            </div> 
        </Spin>
        </>
      );
}
 
export default SignIn;