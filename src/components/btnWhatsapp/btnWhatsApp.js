import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ChatIcon from '@material-ui/icons/Chat';
import { useRedirect } from '../../hooks/useRedirect';
const BtnWhatsApp = () => {
    const [redirectWhatsApp] = useRedirect();
    return ( 
        <>
            <div className="btnWhatsApp" onClick={() => redirectWhatsApp("56972321555")}>
                <div className="fixedButton">
                    <WhatsAppIcon className="icono" /> 
                </div>
                <div className="mas">
                    <span> <ChatIcon className="icono2" /> ¿Necesitas Ayuda? </span>
                </div>
            </div>
        </>


    );
}
 
export default BtnWhatsApp;