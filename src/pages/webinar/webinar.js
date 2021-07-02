import React, {useState} from 'react';
import { makeQuestion } from '../../api/questions';
import { Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Webinar = () => {
    const [question, setquestion] = useState("");
    const [loading, setloading] = useState(false);

    const onChange = (e) => {
        const {value} = e.target;
        setquestion(value);
    }
    
    const crearPregunta = async () => {
        setloading(true);
        const nombre = localStorage.getItem("nombreUsuario");
        console.log(nombre);
            if(question.length > 2){
                const data = {
                    nombre,
                    pregunta: question
                }
                const resultado = await makeQuestion(data);
                console.log(resultado);
                if(resultado.ok){
                    notification["success"]({
                        message:"Pregunta enviada"
                    });
                }else{
                    notification["error"]({
                        message:"Pregunta no enviada"
                    });
                }
            }else{
                notification["error"]({
                    message:"Ingrese pregunta porfavor"
                });
            }
        
        setloading(false)
    }
    const antIcon = <LoadingOutlined spin />;

    return ( 
        <>
            <div className="fondo">
                <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
                    <div className="contenedorStreaming">
                        <div className="streaming">
                            <iframe title="streaming" width="560" height="315" className="transmission" src="https://vimeo.com/event/751925/embed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="pregunta">
                            <div className="inputs">
                                <input 
                                    type="text" 
                                    className="inputRojo" 
                                    placeholder="Ingresa tu pregunta" 
                                    value={question}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="boton">
                                <button onClick={() => crearPregunta()}>
                                    Enviar pregunta
                                </button>
                            </div>
                        </div>
                    </div>
                </Spin>
            </div>

        </>
     );
}
 
export default Webinar;