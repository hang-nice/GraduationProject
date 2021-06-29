// const baseUrl = '192.168.178.1:3000';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           An object containing either "data" or "err"
//  */
// export default function request (url, options) {
//     return fetch(url, options)
//         .then(checkStatus)
//         .then(parseJSON)
//         .then(data => ({ data }))
//         .catch(err => ({ err }));
// }

export function getRequest(url, params) {
    fetch(`http://192.168.178.1:3000/${url}`).then(response => {
        console.log();
    });
}

export function postRequest(url, params) {
    const user = { username: 'Johnaa', age: 18 };
    fetch(`http://192.168.178.1:3000/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(res => {
        console.log(res);
    });
}
