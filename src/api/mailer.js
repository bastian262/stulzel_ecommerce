import { basePathMailer, apiKeyMailer } from './config';


export const postSuscription = (data) => {

    const url = `${basePathMailer}/subscribers`;

    const params = {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "x-mailerlite-apikey": apiKeyMailer
        }
    }

    return fetch(url, params)
    .then(resp => {
        return resp.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    });

}


export const getSuscription = () => {
    const url = `${basePathMailer}/subscribers`;

    const params = {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "x-mailerlite-apikey": apiKeyMailer
        }
    }

    return fetch(url, params)
    .then(resp => {
        return resp.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    });
}   