import React from 'react';
import suscribe from '../../assets/img/suscribe.jpg';
import {useForm} from '../../hooks/useForm';
import {postSuscription, getSuscription} from '../../api/mailer';
const Popup = () => {
    const [values, onChange,] = useForm({
        name:'',
        email:'',
        phone: ''
    });
    const {name, email, phone} = values;

    const susbribirse = async ( ) => {
        if(name.lenght < 2){

        }else if(email.lenght <2){

        }else if(phone.lenght < 7){

        }else{
            const data = {
                name,
                email,
                fields: [
                    {
                        phone
                    },
                ]
            }
            const resultado = await getSuscription();
            console.log(resultado);
            if(resultado.id > 0){
                // salio bien
            }else{
                // salio mal
            }
        }
    }

    return ( 
        <>
            <div className="fondoOpaco">
                <div className="popup">
                    <div className="headerPop">
                        <img src={suscribe}  alt ="suscribe" />
                    </div>
                    <div className="content">
                        <h3>Suscribete a</h3>
                        <h2>Nuestro Newsletter</h2>
                        <span>No te pierdas de nuevos productos y grandes ofertas</span>
                        <form className="form">
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={name} 
                                onChange={onChange} 
                            /> 
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                value={email} 
                                onChange={onChange} 
                            /> 
                            <input 
                                type="text" 
                                name="phone" 
                                id="phone" 
                                value={phone} 
                                onChange={onChange} 
                            /> 
                        </form>
                            <button onClick={() => susbribirse()}> Suscribirse </button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Popup;