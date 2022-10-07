import axios from 'axios';

// axios.defaults.baseURL = 'http://10.110.18.181';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://10.110.18.181:8080',
});

export default api;
