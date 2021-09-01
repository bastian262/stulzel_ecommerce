import { basePathWoocommerce, consumerKey, consumerSecret } from './config';


export function getCategorias() {
    const url = `${basePathWoocommerce}products/categories?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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

export function getCategoriasById(id) {
    const url = `${basePathWoocommerce}products/categories/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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