import api from '../utils/api';

const AccountsApi = {
  getAll: () =>
    api({
      method: 'get',
      url: '/Accounts',
    }),
  getById: ({ id }) =>
    api({
      method: 'get',
      url: `/Accounts/${id}`,
    }),
  create: ({ username, password, firstName, lastName, birthDate }) =>
    api({
      method: 'post',
      url: '/Accounts',
      data: {
        username,
        password,
        firstName,
        lastName,
        birthDate,
      },
    }),
  update: ({ id, firstName, lastName, birthDate }) =>
    api({
      method: 'put',
      url: `/Accounts/${id}`,
      data: { firstName, lastName, birthDate },
    }),
  delete: ({ id }) =>
    api({
      method: 'delete',
      url: `/Accounts/${id}`,
    }),
  ban: ({ id }) =>
    api({
      method: 'put',
      url: `/Accounts/ban/${id}`,
    }),
  unban: ({ id }) =>
    api({
      method: 'put',
      url: `/Accounts/unban/${id}`,
    }),
};

export default AccountsApi;
