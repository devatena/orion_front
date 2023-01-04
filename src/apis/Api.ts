import axios from 'axios';

const Api = axios.create ({
     baseURL: 'http://localhost:8000/api', //colocar alguma env var, se quiser
   //  baseURL: 'https://mopservicos.xyz/api/',
 });

axios.defaults.withCredentials = true;

export default Api;