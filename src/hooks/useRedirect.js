export const useRedirect = () => {
    const redirectWhatsApp = (numero) => {
        const url = `https://wa.me/${numero}`; 
        window.location.href = url;
    }
    const redireccionarInstagram = () => {
        window.location.href = "https://www.instagram.com/stulzel_cl/";
    }
    const redireccionarFacebook = () => {
        window.location.href = "https://www.facebook.com/stulzel";
    }
    const redireccionarEntrada = () => {
        window.location.href = "https://ticketplus.cl/events/salon-look-santiago-2021?referal_name=barberos";
    }
    return [redirectWhatsApp, redireccionarInstagram, redireccionarFacebook, redireccionarEntrada]
}