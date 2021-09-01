import { basePathWoocommerce, consumerKey, consumerSecret } from './config';

export function getProductByPrice(prices,id) {

    const url = `${basePathWoocommerce}products?category=${id}&min_price=${prices[0] * 10000}&max_price=${prices[1] * 10000}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    console.log(url);
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


export function getProductosByOrder(value, id, orden = "desc") {

    const url = `${basePathWoocommerce}products?category=${id}&orderby=${value}&order=${orden}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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

export function getProductos10(page = 1) {

    const url = `${basePathWoocommerce}products?per_page=10&page=${page}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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

export function getProductos8() {

    const url = `${basePathWoocommerce}products?per_page=8&page=1&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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


export function getProductosByCategoryId(id, page = 1) {

    const url = `${basePathWoocommerce}products?category=${id}&per_page=9&page=${page}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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