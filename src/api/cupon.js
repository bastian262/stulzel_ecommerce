import { basePathWoocommerce, consumerKey, consumerSecret } from './config';


export function getCupon(code) {
    const url = `${basePathWoocommerce}coupons?code=${code}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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