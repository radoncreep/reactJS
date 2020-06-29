import axios from 'axios';

// this method should be for instantiating the axios class 
// like const instance = new Axios({...passing the obj value from the create method})

const instance = axios.create({ // This creates an indtance of the axios object
    baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// we could also add interceptors here
// instance.interceptors.request

export default instance;

// The instance set up assumes the default set up in the index.js file
// but will overwrite anything which it sets up in the instance itself