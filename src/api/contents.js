import api from '../utils/api';

const ContentsApi = {
  getAll: () =>
    api({
      method: 'get',
      url: '/Contents',
    }),
  getById: ({ id }) =>
    api({
      method: 'get',
      url: `/Contents/${id}`,
    }),
  create: ({ title, contentMarkdown, createDate }) =>
    api({
      method: 'post',
      url: '/Contents',
      data: { title, contentMarkdown, createDate },
    }),
  update: ({ id, title, contentMarkdown }) =>
    api({
      method: 'put',
      url: `/Contents/${id}`,
      data: { title, contentMarkdown },
    }),
  delete: ({ id }) =>
    api({
      method: 'delete',
      url: `/Contents/${id}`,
    }),
  like: ({ id }) =>
    api({
      method: 'put',
      url: `/Contents/like/${id}`,
    }),
  unlike: ({ id }) =>
    api({
      method: 'put',
      url: `/Contents/unlike/${id}`,
    }),
};

export default ContentsApi;
