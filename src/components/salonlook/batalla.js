import React, {useState} from 'react';
import batallas from '../../assets/img/batallas.png';
import {useHistory} from 'react-router-dom'
import atentos from '../../assets/img/atentos.png';
const Batalla = () => {
    const [batalla, setBatalla] = useState("Inscríbete aquí");
    const history = useHistory()
    const expanderBatalla = () => {
        let doc = document.getElementById("batallas");
        if(doc.style.maxHeight == "0px"){
            setBatalla("Ocultar");
            doc.style.maxHeight = "7500px";
        }else{
            setBatalla("Inscríbete aquí");
            doc.style.maxHeight = "0px";
        }
    }
    const redirect = ( ) => {
        history.push('/battle');
    }
    return ( 
        <>
            <div class="bannerL batalla" id="batalla">
                <div class="containerSalon">
                    <span>Batalla de Barberos</span>
                    <button className="black" onClick={ () => redirect() }> {batalla}</button>
                </div>
            </div>
             <div class="contenedorCollapse" id="batallas" style={{maxHeight: "0px"}}>
                <div class="contenedor">
                    <img src={batallas} alt="" className="batallas" />
                    <div class="letras">
                        <span>SI VIVISTE UNA BATALLA DE BARBEROS EN CHILE, PREPÁRATE PARA UNA BATALLA EPICA EN UN EVENTO TRANSMITIDO AL MUNDO.</span>
                        <span>TIENES QUE ESTAR ATENTO A LA PROGRAMACIÓN Y PUEDES REVISAR TODA LA <strong>INFORMACIÓN</strong> NECESARIA DESDE ESTE <strong>15 DE OCTUBRE</strong> AQUI EN ESTE MISMO LUGAR.</span>
                        <span>LAS <strong>INSCRIPCIONES</strong> PARA LA BATALLA QUE STULZEL TIENE PARA TI EN EL PRÓXIMO SALON LOOK SE ABRIRÁN <strong>ENTRE EL 25 Y EL 30 DE OCTUBRE DE 2021.</strong></span>
                        <span>EL <strong>INICIO OFICIAL </strong>DE LA BATALLA DE BARBEROS SERÁ EL <strong>5 DE NOVIEMBRE DE 2021.</strong> </span>
                    </div>
                    <img src={atentos} alt="" className="batallas" />
                    <div class="info">
                        <span>INFORMACIÓN Y BASES: <strong>15.10.21</strong></span>
                        <span>INSCRIPCIONES: DEL <strong>25.10.21</strong> AL <strong>30.10.21</strong></span>
                        <span>INICIO OFICIAL: <strong>05.11.21</strong></span>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Batalla;