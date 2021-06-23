import { basePathWoocommerce, consumerKey, consumerSecret } from './config';


export function getProductos() {

    const url = `${basePathWoocommerce}products?per_page=100&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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

export function getProductosById(id) {

    const url = `${basePathWoocommerce}products/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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