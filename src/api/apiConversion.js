import {accessToken,pixel } from './config';

export function postEvento(data) {
    console.log(data);
    const url = `https://graph.facebook.com/v11.0/${pixel}/events?access_token=${accessToken}`;
    const params = {
        method: "POST",
        body:JSON.stringify(data),
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

export function geoLocalizacion() {
    const url = `https://api.ipify.org?format=json`;
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