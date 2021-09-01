
import { basePathWoocommerce, consumerKey, consumerSecret } from './config';


export function getOrderByCustomer(id) {

    const url = `${basePathWoocommerce}orders?customer=${id}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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