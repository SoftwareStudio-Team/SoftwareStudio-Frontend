import api from '../utils/api';

const UserApi = {
  login: ({ username, password }) =>
    api({
      method: 'post',
      url: '/Auth/login',
      data: {
        username,
        password,
      },
    }),
  logout: () =>
    api({
      method: 'get',
      url: '/Auth/logout',
    }),
};

export default UserApi;
