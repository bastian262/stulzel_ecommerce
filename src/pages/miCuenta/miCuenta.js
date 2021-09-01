import React,{useEffect, useState} from 'react';
import DetalleMiCuenta from './detalleMiCuenta';
import Login from './login';


const MiCuenta = () => {
    const variable = JSON.parse(localStorage.getItem("usuario"));
    const [state, setState] = useState(true);
    
    useEffect(() => {
        if(variable != null){
            setState(false);
        }
    }, []);
    return ( <>
        {state === true ? 
            <Login />
        :
            <DetalleMiCuenta
                usuario={variable}
            />
        }
        
    
    </> );
}
 
export default MiCuenta;