import { basePathWoocommerce, consumerKey, consumerSecret } from './config';


export function getTarifa(destino) {

    const url = `${basePathWoocommerce}tarifa?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const params = {
        method: "POST",
        body: JSON.stringify(destino),
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