import { basePathWoocommerce, consumerKey, consumerSecret, basePathWoocommerceLogin } from './config';


export function postCustomer(customer) {

    const url = `${basePathWoocommerce}customers?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const params = {
        method: "POST",
        body: JSON.stringify(customer),
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


export function loginCustomer(customer) {

    const url = `${basePathWoocommerceLogin}`;
    const params = {
        method: "POST",
        body: JSON.stringify(customer),
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


export function getCustomer(id) {

    const url = `${basePathWoocommerce}customers/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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


export function putCustomer(id, customer) {

    const url = `${basePathWoocommerce}customers/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const params = {
        method: "PUT",
        body: JSON.stringify(customer),
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