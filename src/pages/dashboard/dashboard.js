import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../api/signUp';
import { getQuestions } from '../../api/questions';
import { Table, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import XLSX from 'xlsx'
import { ExportSheet } from 'react-xlsx-sheet'

const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
    },
    {
      title: 'Telefono',
      dataIndex: 'telefono',
    },
    {
        title: 'Dirección',
        dataIndex: 'direccion',
    },
    {
      title: 'Acción',
      dataIndex: 'action',
    }
  ];
  const columns2 = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
    },
    {
      title: 'Pregunta',
      dataIndex: 'pregunta',
    },
  ];
const Dashboard = () => {
    const [usuarios, setusuarios] = useState([]);
    const [questions, setquestions] = useState([]);
    const [loading, setloading] = useState(false);
    const [cambio, setcambio] = useState(false);

    useEffect(() => {
        setInterval(() => {
            getUsuarios();  
        }, 25000);
        getUsuarios();  
        setInterval(() => {
            getQuestions2();  
        }, 5000);
        // eslint-disable-next-line
    }, []);

    const eliminarUser = async (ide) => {

        setloading(true);
        const resultado = await deleteUser(ide);
        if(resultado.ok){
            setcambio(!cambio);
            notification["success"]({
                message:resultado.msg
            });
        }else{
            notification["success"]({
                message:resultado.msg
            });
        }
        setloading(false);

    }
    

    const getUsuarios = async ( ) => {
        setloading(true);
        const resultado = await getUsers();
        console.log(resultado);
        if(resultado.ok){
            if (resultado.user.length > 0) {
                const array = [];
                resultado.user.forEach((element, index) => {
                    
                    const data = {
                            key: element._id,
                            nombre:element.nombre,
                            correo:element.correo,
                            telefono:element.telefono,
                            direccion:element.direccion,
                            action:(  <button onClick={() => eliminarUser(element._id)}> Eliminar </button> )
                    }
                    array.push(data);
                });
                setusuarios(array);
            }
        }
        setloading(false);
    } 


    const getQuestions2 = async ( ) => {
        setloading(true);
        const resultado = await getQuestions();
        console.log(resultado);
        if(resultado.ok){
            if (resultado.preguntas.length > 0) {
                const array = [];
                resultado.preguntas.forEach((element, index) => {
                    
                    const data = {
                            key: element._id,
                            nombre:element.nombre,
                            pregunta:element.pregunta,
                    }
                    array.push(data);
                });
                setquestions(array);
            }
        }
        setloading(false);
    } 
    const antIcon = <LoadingOutlined spin />;

    return (
        <>
            <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
                <div class="fondo">
                    <div class="row negro">
                        <img src="https://stulzel.com/wp-content/uploads/2021/05/cropped-Recurso-2-8.png" alt="" />
                    </div>
                    <div class="row flex">
                        <div class="card2">Personas Inscritas <p>{usuarios.length}</p>  </div>
                        <div class="card2">Iniciaron sesion <p>0</p></div>
                    </div>
                    <div class="row">
                        <div class="col1">
                            <Table 
                                id="tablaUsuarios"
                                key="keyloca"
                                columns={columns} 
                                dataSource={usuarios} 
                            />
                        </div>
                        <div class="botonDescarga">
                            <ExportSheet
                                header={columns}
                                fileName={`usuarios`}
                                dataSource={usuarios}
                                xlsx={XLSX} 
                            >
                                <button> Exportar Usuarios </button> 
                            </ExportSheet>
                             
                        </div>
                    </div>
                    <div class="row flex">
                        <div class="card2">Total preguntas: <p>{questions.length}</p>  </div>
                    </div>
                    <div class="row">
                        <div class="col1">
                            <div class="card4">preguntas 
                                <Table 
                                    id="tablaUsuarios"
                                    key="keyloca"
                                    columns={columns2} 
                                    dataSource={questions} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>

    
        </>  
    );
}
 
export default Dashboard;