import api from '../utils/api';

const CommentsApi = {
  getAll: () =>
    api({
      method: 'get',
      url: '/Comments',
    }),
  getById: ({ id }) =>
    api({
      method: 'get',
      url: `/Comments/${id}`,
    }),
  create: ({ commentMessage, contentId, ownerId }) =>
    api({
      method: 'post',
      url: '/Comments',
      data: { commentMessage, contentId, ownerId },
    }),
  update: ({ id, commentMessage }) =>
    api({
      method: 'put',
      url: `/Comments/${id}`,
      data: { commentMessage },
    }),
  delete: ({ id }) =>
    api({
      method: 'delete',
      url: `/Comments/${id}`,
    }),
  hide: ({ id }) =>
    api({
      method: 'put',
      url: `/Comments/hide/${id}`,
    }),
  unhide: ({ id }) =>
    api({
      method: 'put',
      url: `/Comments/unhide/${id}`,
    }),
  like: ({ id }) =>
    api({
      method: 'put',
      url: `/Comments/like/${id}`,
    }),
  unlike: ({ id }) =>
    api({
      method: 'put',
      url: `/Comments/unlike/${id}`,
    }),
};

export default CommentsApi;
