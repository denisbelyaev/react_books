import 'isomorphic-fetch';

const API_BASE_URL = 'http://127.0.0.1:8000';
const PROXY_ROOT = '/api/v1';

const queryString = (params) => {
    return '?' + Object.keys(params).map((key) =>
            [key, params[key]].join('=')
        ).join('&');
}

const callApi = (options) => {
    // body, method, headers
    var {url, params} = options;

    var requestUrl = API_BASE_URL + PROXY_ROOT + url;
    if(params) {
        requestUrl += queryString(options.params);
    }
    // headers['Accept'] = 'application/json';
    // headers['Content-Type'] = 'application/json';
    console.log("------------------------------- callApi with options", options)

    return Promise.resolve(options.body)
        .then(response => {
            return response;
        })
    // return fetch(requestUrl, {...options, headers})
    //     .then(response => response.json())
};

export default callApi;
