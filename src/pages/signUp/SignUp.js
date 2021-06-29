import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {  purple } from '@material-ui/core/colors';
import {useForm} from '../../hooks/useForm'
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
        telefono:''
    });
        // const [ formValid,inputValidation] = useFormValidation({
        //     nombre: false,
        //     correo: false,
        //     telefono: false
        // });

    const {nombre, correo , telefono} = values;

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
                correo,
                telefono
            }
            
            const resultado = await signUp(data);
            if(resultado.ok){
                notification["success"]({
                    message:resultado.message
                });
            }else{
                notification["error"]({
                    message:"Error inesperado"
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
                <form onChange={onChange} action="">
                    <div class="col">
                        <TextField 
                            id="outlined-basic" 
                            label="Nombre Completo" 
                            variant="outlined" 
                            className="inputReact"
                            name="nombre"
                            value={nombre}
                            // onChange={inputValidation}
                            
                        />
                    </div>
                    <div class="col">
                        <TextField 
                            id="outlined-basic"
                            label="Correo electronico"
                            variant="outlined" 
                            className="inputReact"
                            name="correo"
                            value={correo}
                            // onChange={inputValidation}
                        />
                    </div>
                    <div class="col">
                        <TextField 
                            id="outlined-basic" 
                            label="WhatsApp" 
                            variant="outlined" 
                            className="inputReact"
                            name="telefono"
                            value={telefono}
                            // onChange={inputValidation}


                        />
                    </div>
                    <div class="col">
                        <ColorButton onClick={() => SignUp()} variant="contained" color="primary" className={classes.margin}>
                            REGISTRAR
                        </ColorButton>
                    </div>
                </form>
            </div> 
        </Spin>
        </>
      );
}
 
export default SignUp;