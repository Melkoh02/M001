// src/api/client.ts
import axios, {AxiosHeaders} from 'axios';
import Config from 'react-native-config';
import rootStore from '../lib/stores/rootStore.ts';

const client = axios.create({
  baseURL: Config.API_BASE_URL,
});

client.interceptors.request.use(
  config => {
    const token = rootStore.userStore.accessToken;
    if (token) {
      const headers = new AxiosHeaders(config.headers);
      headers.set('Authorization', `Bearer ${token}`);
      config.headers = headers;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default client;
