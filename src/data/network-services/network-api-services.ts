import { Axios, AxiosResponse } from "axios";

const NetworkApiServices = new Axios()

NetworkApiServices.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
})

// Add a response interceptor
NetworkApiServices.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error: AxiosResponse) {
    // Do something with response error
    switch (error.status) {
        case 400:
            throw Promise.reject(error.data.body.toString());
        case 401:
        case 403:
            throw Promise.reject(error.data.body.toString());
        case 500:
        default:
            throw Promise.reject(
                'Error occured while communication with server' +
                ` with status code : ${error.data.statusCode}`);
    }
});

export default NetworkApiServices