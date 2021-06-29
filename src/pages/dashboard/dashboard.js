import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../api/signUp';
import { Table, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


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
      title: 'Acción',
      dataIndex: 'action',
    }
  ];
const Dashboard = () => {
    const [usuarios, setusuarios] = useState([]);
    const [loading, setloading] = useState(false);
    const [cambio, setcambio] = useState(false);

    useEffect(() => {
        setInterval(() => {
            getUsuarios();  
        }, 5000);
        getUsuarios();  

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
                            action:(  <button onClick={() => eliminarUser(element._id)}> Eliminar </button> )
                    }
                    array.push(data);
                });
                setusuarios(array);
            }
        }
        setloading(false);

    } 
    const antIcon = <LoadingOutlined spin />;

    return (
        <>
            <Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
                <div class="fondo">
                    <div class="row">
                        <img src="" alt="" />
                    </div>
                    <div class="row">
                        <div>Personas Inscritas {usuarios.length} </div>
                        <div>Iniciaron sesion</div>
                    </div>
                    <div class="row">
                        <div class="col1">
                            <Table columns={columns} dataSource={usuarios} />
                        </div>
                        <div class="col2">

                        </div>
                    </div>
                </div>
            </Spin>

    
        </>  
    );
}
 
export default Dashboard;