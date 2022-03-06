import { basePathWoocommerce, consumerKey, consumerSecret } from './config';

export function getProductByPrice(prices,id) {
    var url;
    if(id == 0){
        url = `${basePathWoocommerce}products?category=${id}&min_price=${prices[0] * 10000}&max_price=${prices[1] * 10000}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    }else{
        url = `${basePathWoocommerce}products?category=${id}&min_price=${prices[0] * 10000}&max_price=${prices[1] * 10000}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    }
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
    var url;
    if(id == 0){
        url = `${basePathWoocommerce}products?orderby=${value}&order=${orden}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    }
    else
    {
        url = `${basePathWoocommerce}products?category=${id}&orderby=${value}&order=${orden}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    }

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

    const url = `${basePathWoocommerce}products?per_page=100&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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
    const url = `${basePathWoocommerce}products?status=publish&per_page=10&page=${page}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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

export function getProductos8(page) {

    const url = `${basePathWoocommerce}products?status=publish&per_page=8&page=${page}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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
export function getProductosById3(id) {

    const url = `${basePathWoocommerce}products/${id}?status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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

    const url = `${basePathWoocommerce}products?slug=${id}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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
export function getProductosById2(id) {

    const url = `${basePathWoocommerce}products/${id}?status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
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
    var url;
    console.log(id);
    if(id == 0){
    
        url = `${basePathWoocommerce}products?status=publish&per_page=9&page=${page}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    }else{
        url = `${basePathWoocommerce}products?category=${id}&status=publish&per_page=9&page=${page}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    }
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
export function getCategoryBySlug(slug) {
  
    const url = `${basePathWoocommerce}products/categories?slug=${slug}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
   
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
export function getProductBySearch(search){
    const url = `${basePathWoocommerce}products?search=${search}&status=publish&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=50`;

    const params = {
        method:'GET',
        header:{
            "Content-Type" : "application/json"
        }
    }

    return fetch(url,params)
        .then(resp => {
            return resp.json();
        }).then(result => {
            return result;
        }).catch(err => {
            return err.message
        });
}