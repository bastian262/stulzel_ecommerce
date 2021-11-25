import React, {useState, useEffect} from 'react';
import NavBar from '../../components/nav/nav'
import { getUsers, deleteUser, getAssistants as onGetAssistants, vote } from '../../api/signUp';
import imagen4 from '../../assets/img/logo123.png'

import { useCart } from '../../hooks/useCart';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
import BtnWhatsApp from '../../components/btnWhatsapp/btnWhatsApp';
import salonlook from '../../assets/img/salonlook.png'
import imagen from '../../assets/img/sbatle2.png'
import SearchIcon from '@material-ui/icons/Search';
import { Button, Modal, notification } from 'antd';
import logo from '../../assets/img/logo.png'
import LazyLoad from 'react-lazyload';

const ListadoParticipantes = () => {
    var localS = JSON.parse(localStorage.getItem("carrito"));
    const varFInal = localS === null? [] : localS;
    const [onAdd,limpiarCarrito, eliminarProducto, productes,total, ] = useCart(varFInal);
    const [usuarios, setusuarios] = useState([]);
    const [idUsuario, setIdUsuario] = useState(0);
    const [usuarios2, setusuarios2] = useState([]);
    const [loading, setloading] = useState(false);
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(1);
    const [userCategory, setUserCategory] = useState(1);
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [fullName, setFullName] = useState("");
    useEffect(() => {
        getUsuarios();  
    }, []);
    const getUsuarios = async ( ) => {
        setloading(true);
        const resultado = await getUsers();
        console.log(resultado);
        if(resultado.ok){
            if (resultado.user.length > 0) {
                setusuarios(resultado.user);
                setusuarios2(resultado.user);
            }
        }
        setloading(false);
    } 
    const filtrarParticipantes = (value) => {
        const valor = value.toLowerCase();
        if(value){
            setusuarios(usuarios.filter(e => e.fullName.toLowerCase().indexOf(valor) !== -1));
        }else{
            setusuarios(usuarios2);
        }
    }
    const abrirModal = (id) => {
        setIdUsuario(id);
        setUserCategory(category);
        setOpen(true);
    } 

    const votar = async () => {
        let emailValid = email.split("@");

        if(emailValid.length == 2){
            let secondPart = emailValid[1].split(".");
            if(secondPart.length >= 2){
                if(secondPart[1].length >= 2){
                    if(fullName.length > 2){
                        if(whatsapp.length>8){
                            const data = {
                                email,
                                whatsapp,
                                fullName,
                                category
                            }
                            const result = await vote(idUsuario, data);
                            if(result.ok){
                                setOpen(false);
                                setEmail("");
                                setWhatsapp("");
                                setFullName("");
                                getUsuarios();
                                notification["success"]({
                                    message: result.msg,
                                });
                            }else{
                                notification["error"]({
                                    message: result.msg,
                                });
                            }
                        }else{
                            notification["error"]({
                                message: "Ingrese un whatsapp válido",
                            });
                        }

                    }else{
                        notification["error"]({
                            message: "Ingrese un nombre válido",
                        });
                    }
                }else{
                    notification["error"]({
                        message: "Ingrese un correo válido",
                    });
                }
            }else{
                notification["error"]({
                    message: "Ingrese un correo válido",
                });
            }
        }else{
            notification["error"]({
                message: "Ingrese un correo válido",
            });
        }
    }

    return ( <> 
        <div className="fondo">
            <NavBar
                onAdd={onAdd}
                limpiarCarrito = {limpiarCarrito}
                eliminarProducto = {eliminarProducto}
                productes = {productes}
                total = {total}
            />
             <div className="headerBatle">
                <img src={imagen} alt="logobatlewhite" />
                <img className="salonlook" src={salonlook} alt="logobatlewhite" />
            </div>
            <div className="contenedor">
                <div className="row">
                    <h3 className="h3">¿Por quién votas?</h3>

                    <div className="inputaso">
                        <input type="text" name="search" id="search" onChange={e => filtrarParticipantes(e.target.value)} placeholder="Ingrese el nombre de su barbero" />
                        <SearchIcon className="icon" />
                    </div>

                    <div className="categories">
                        <div><button className={category == 1 ? "focusButton" : null } onClick={() => setCategory(1)}>Fade Master</button></div>
                        <div><button className={category == 2 ? "focusButton" : null }  onClick={() => setCategory(2)}>Old School</button></div>
                        <div><button className={category == 3 ? "focusButton" : null }  onClick={() => setCategory(3)}>New Trends</button></div>
                        <div><button className={category == 4 ? "focusButton" : null }  onClick={() => setCategory(4)}>Freestyle</button></div>
                    </div>
                    {
                        category == 1 ? 
                            <div className="tituloBatalla"><h2>Fade Master</h2></div>
                        :
                        null
                    }
                    {
                        category == 2 ? 
                            <div className="tituloBatalla"><h2>Old School</h2></div>
                        :
                        null
                    }
                    {
                        category == 3 ? 
                            <div className="tituloBatalla"><h2>New Trends</h2></div>
                        :
                        null
                    }
                    {
                        category == 4 ? 
                            <div className="tituloBatalla"><h2>Freestyle</h2></div>
                        :
                        null
                    }
                    {usuarios.filter(e => e.category == category).length > 0 ?
                            <div className="tabla">
                                {usuarios.filter(e => e.category == category).map((e ) => {
                                    let categoria = "";
                                    switch (e.category) {
                                        case 1:
                                            categoria = "Fade Master"
                                            break;
                                        case 2:
                                            categoria = "Old School"
                                            break;
                                        case 3:
                                            categoria = "New Trends"
                                            break;
                                        case 4:
                                            categoria = "Freestyle"
                                            break;
                                        default:
                                            break;
                                    }

                                    return (
                                        <>
                                            <div className="participante">
                                                <div className="imagenesParti">
                                                   <LazyLoad> <img src={e.imageCompetitor} /> </LazyLoad>
                                                   <LazyLoad><img src={e.imageHaircut}/></LazyLoad>
                                                </div>
                                                <div className="name">
                                                    <span>{e.fullName}</span>
                                                </div>
                                                <div className="insta">
                                                    <span>{e.instagram}</span>
                                                </div>
                                                <div className="insta">
                                                    <span>{categoria}</span>
                                                </div>
                                                <div className="votes">
                                                    <button onClick={() => abrirModal(e._id)}>Votar</button>
                                                    <div>
                                                        {e.votes}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            :
                            <h2  style={{textAlign:'center', marginTop:'50px'}}>No hay coincidencias con el nombre ingresado</h2>
                    }   

                </div>
            </div>
        </div>
        <Footer1 />
        <Footer2 />
        <BtnWhatsApp />
        <Modal title="" visible={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
            <div className="headerSign headerSign2">
                <div>
                    <img src={imagen4} width="120" />
                    <span>VOTACIÓN</span>
                </div>
            </div>
            <div className="votacion">
                <div className="formulario">
                    <span className="title">
                    Para que tu voto tenga validez solo debes ingresar tu correo
                    y tu barber@ preferido estará cada vez más cerca
                    de llegar a la GRAN FINAL de STULZEL BATTLE 2021.
                    </span>
                    <form>
                        <div className="campo">
                            <input type="text" value={fullName} name="fullName" onChange={e => setFullName(e.target.value)} placeholder="Nombre Completo"/>
                        </div>
                        <div className="campo">
                            <input type="text" value={whatsapp} name="whatsapp" onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp"/>
                        </div>
                        <div className="campo">
                            <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                    </form>
                    <div className="campo campoBtn">
                        <button onClick={() => votar()}>VOTAR</button>
                    </div>
                </div>
            </div>
            <div className="footerSign">
                <img src={logo} width="90" />
                <div className="field2">
                    {/* <Button htmlType="submit">Enviar</Button> */}
                </div>
            </div>
            {/* <FormComponent setOpen={setOpen} /> */}
        </Modal>
    </> );
}
 
export default ListadoParticipantes;