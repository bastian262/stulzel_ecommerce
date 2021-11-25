import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, getAssistants as onGetAssistants } from '../../api/signUp';
import { getQuestions } from '../../api/questions';
import { Table, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import XLSX from 'xlsx'
import { ExportSheet } from 'react-xlsx-sheet'

const columns = [
    {
      title: 'Nombre',
      dataIndex: 'full_name',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
    },
    {
      title: 'Telefono',
      dataIndex: 'whatsapp',
    },
    {
        title: 'Instagram',
        dataIndex: 'instagram',
    },
    {
      title: 'Categoría',
      dataIndex: 'action',
    },
    {
        title: 'Votos',
        dataIndex: 'votes',
    }
  ];
  const columns2 = [
    {
      title: 'Nombre',
      dataIndex: 'fullName',
    },
    {
      title: 'Whatsapp',
      dataIndex: 'whatsapp',
    },
    {
        title: 'Rut',
        dataIndex: 'rut',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Rol',
        dataIndex: 'rol',
    },
    {
        title: 'Rubro',
        dataIndex: 'rubro',
    },
    {
        title: 'Entrada',
        dataIndex: 'entrada',
    },
    {
        title: 'region',
        dataIndex: 'region',
    },
  ];
const Dashboard = () => {
    const [usuarios, setusuarios] = useState([]);
    const [assistants, setAssistants] = useState([]);
    const [loading, setloading] = useState(false);
    const [cambio, setcambio] = useState(false);

    useEffect(() => {
        getAssistants();
        getUsuarios();  
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
                            full_name:element.fullName,
                            email:element.email,
                            whatsapp:element.whatsapp,
                            instagram:element.instagram,
                            action:element.category,
                            votes:element.votes,
                    }
                    array.push(data);
                });
                setusuarios(array);
            }
        }
        setloading(false);
    } 


    const getAssistants = async ( ) => {
        setloading(true);
        const resultado = await onGetAssistants();
        console.log(resultado);
        if(resultado.ok){
            if (resultado.user.length > 0) {
                const array = [];
                resultado.user.forEach((element, index) => {
                    
                    const data = {
                            key: element._id,
                            fullName:element.fullName,
                            whatsapp:element.whatsapp,
                            email: element.email,
                            rut:element.rut,
                            rol:element.rol,
                            rubro:element.heading,
                            entrada:element.num_entrada,
                            region:element.region,
                    }
                    array.push(data);
                });
                setAssistants(array);
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
                        <div class="card2">Barberos inscritos para la batalla <p>{usuarios.length}</p>  </div>
                        {/* <div class="card2">Iniciaron sesion <p>0</p></div> */}
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
                        <div class="card2">Total entradas vendidas: <p>{assistants.length}</p>  </div>
                    </div>
                    <div class="row">
                        <div class="col1">
                            <div class="card4">preguntas 
                                <Table 
                                    id="tablaUsuarios"
                                    key="keyloca"
                                    columns={columns2} 
                                    dataSource={assistants} 
                                />
                            </div>

                        </div>
                        <div class="botonDescarga">
                            <ExportSheet
                                header={columns2}
                                fileName={`ssistentes`}
                                dataSource={assistants}
                                xlsx={XLSX} 
                            >
                                <button> Exportar Asistentes </button> 
                            </ExportSheet>
                             
                        </div>
                    </div>
                </div>
            </Spin>

    
        </>  
    );
}
 
export default Dashboard;