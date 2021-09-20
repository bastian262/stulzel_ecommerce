import React from 'react';
import NavBar from '../../components/nav/nav';
import Footer1 from '../../components/footer/Footer1';
import Footer2 from '../../components/footer/Footer2';
const Curso = () => {
    return ( 
        <>
            <div class="fondo">
                <NavBar />
                <div class="contenedor">
                    <h2>Cursos de Barbería</h2>
                </div>
                <div class="contenedor-fluido">
                    <div class="row">
                        <span class="title">STULZEL EDUCACIÓN</span>
                        <span class="subtitle">CURSO DE BARBERÍA NIVEL BÁSICO</span>
                        <span class="parraf">Más de 1400 alumnos egresados desde nuestras aulas.</span>
                        <span class="parraf">Curso certificado por el Estado de Chile a través de SENCE</span>
                        <div class="buttons">
                            <button>Solicita Más Info</button>
                            <button>Ver Video</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
            <Footer2 />
        </>
    );
}
 
export default Curso;