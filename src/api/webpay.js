// import { basePathWoocommerce, consumerKey, consumerSecret } from './config';
var urlDev = "http://localhost:27017";

export function crearTransaccion(buyOrder,sessionId,amount) {
    const url = `${urlDev}api/createTransaction?buyOrder=${buyOrder}&sessionId=${sessionId}&amount=${amount}`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, params)
        .then(resp => {
            return resp.json();
        }).then(result => {
            return result;
        }).catch(err => {
            return err.message;
        });
}
