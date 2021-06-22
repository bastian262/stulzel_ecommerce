import React from 'react';
import { useState } from 'react';
import NavBar from '../components/nav/nav'
import redone from '../assets/img/redone.png'
const HomeScreen = () => {
    return (
        <div className="fondo">
            <NavBar/>
            <div className="header">
                <div className="border">
                    <div className="row-flex">
                        <div className="col-1">
                            <img src={redone}  />
                        </div>
                        <div className="col-2">
                            <span className="titulo1">
                                Si eres Barbería
                                o Salón de belleza <br/> y te haces distribuidor obtendrás un
                            </span>
                            {/* <span className="tituloGrande"></span>    */}
                            <span className="titulo2">
                            20% DE BONIFICACIÓN <br/> Y ENVÍO GRATIS
                            </span>
                            <span className="titulo1">
                                a la sucursal del courier
                                más cercano a tu domicilio.
                            </span>
                            <div className="button">
                                <button>Envianos un WhatsApp Aquí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="topSales">
                <div className="raw">
                    <div className="col">
                        <div className="mitad1">
                            <span >
                                
                            </span>
                        </div>
                        <div className="mitad2">
                            <img src="https://stulzel.com/wp-content/uploads/2021/01/SILLONES-2020-6C-scaled-1-600x664.jpg" />
                        </div>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
                <div className="raw">
                    <div className="col">
                    
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </section>
        </div>
    
    );
    
}

export default HomeScreen;


