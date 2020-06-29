import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// SETTING DEFAULT CONFIGURATION TO BE USED APPLICATION WIDE
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request)
    // Edit  request config before returning it by adding headers for example
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
    console.log(response);
    // Edit response config before returning to component ??  
    return response; // return to use in the then block
}, error => {
    console.log(error);
    return Promise.reject(error);
})
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
