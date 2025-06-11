import axios from 'axios';

export default function createHttpClient({ storeId }) {
  const instance = axios.create({
    baseURL: `https://usekitcart.com/api/shop/${storeId}/`,
    headers: {
      Accept: 'application/json',
    },
  });

  instance.interceptors.request.use((config) => {
    if (config.useAuth && instance.token) {
      config.headers.Authorization = `Bearer ${instance.token}`;
    }
    return config;
  });

  instance.setToken = (token) => {
    instance.token = token;
  };

  instance.clearToken = () => {
    delete instance.token;
  };

  instance.token = null;

  return instance;
}
