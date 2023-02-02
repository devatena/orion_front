import axios from 'axios';

const Api = axios.create ({
   //   baseURL: 'http://localhost:8000/api'
    baseURL: 'https://orion.atenaagencia.com/orion_back/public/api',
 });

axios.defaults.withCredentials = true;

export default Api;