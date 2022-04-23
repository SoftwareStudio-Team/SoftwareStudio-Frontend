import axios from 'axios';

export default (config) => {
  return axios
    .create({
      baseURL: 'https://161.246.6.18:8880/api',
      withCredentials: true,
    })
    .request(config);
};
