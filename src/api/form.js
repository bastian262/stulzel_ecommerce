import { basePathForm, apiVersion } from "./config";

export function signUpApi(data) {
    const url = `${basePathForm}/${apiVersion}/sign-up`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
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

export function signUpAssistantApi(data) {
    const url = `${basePathForm}/${apiVersion}/sign-up-assistans`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
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

export function putCompetitorImageApi(image, id) {
	const url = `${basePathForm}/${apiVersion}/user-competitor-image/${id}`;

	const formData = new FormData();
	formData.append("image", image, image.name);

	const params = {
		method: "PUT",
		body: formData,
	};

	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function putHaircutImageApi(image, id) {
	const url = `${basePathForm}/${apiVersion}/user-haircut-image/${id}`;

	const formData = new FormData();
	formData.append("image", image, image.name);

	const params = {
		method: "PUT",
		body: formData,
	};

	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function getUserImageApi(image) {
	const url = `${basePathForm}/${apiVersion}/user-image/${image}`;

	return fetch(url)
		.then((response) => {
			return response.url;
		})
		.catch((err) => {
			return err.message;
		});
}