import React from 'react';

const Escritorio = ({usuario}) => {
    return ( 
        <>
            <span className="span">Hola <strong>{usuario.displayName}</strong>  (¿No eres tu <strong>{usuario.displayName}</strong>? Cerrar Sesión) </span>
            <span className="span">Desde el panel de control de tu cuenta puedes ver tus pedidos recientes, gestionar tus direcciones de envío y facturación y editar tu contraseña y los detalles de tu cuenta.</span>
        </> 
    );
}
 
export default Escritorio;