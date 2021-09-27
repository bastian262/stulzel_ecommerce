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
    return [redirectWhatsApp, redireccionarInstagram, redireccionarFacebook]
}