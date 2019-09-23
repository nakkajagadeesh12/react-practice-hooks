import axios from 'axios';
import { baseURL } from './environment'
let axiosInstance;
const IntiServer = () => {
  axiosInstance = getAPIClient(baseURL);
  axiosInstance.interceptors.request.use(request => {
   
    return request;
  });
  axiosInstance.interceptors.response.use(response => {
    return response;
  })
}
const getAPIClient = (baseURL) => {
  console.log("BaseURL-->", baseURL);
  let config = {
    baseURL: `${baseURL}/`,
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 60000
  }
  return axios.create(config);
}
const createEndPoint = (url) => {
  const ret = {
    url,
    request: reqConfig => axiosInstance.request({ url, ...reqConfig }),
    getData: reqConfig => axiosInstance.get(url,{ ...reqConfig }),
    post: reqConfig => axiosInstance.post({ url, ...reqConfig }),
  }
  return ret;
}
const EndPoints = {
  myURL: createEndPoint('https://localhost:3000'),
  getURLMethod: createEndPoint('todos')
}
export { EndPoints, IntiServer }