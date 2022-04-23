import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';

import userReducer from './user';

const PERSISTED_KEYS = {
  states: ['user'],
  namespace: 'app',
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(save(PERSISTED_KEYS)),
  preloadedState: load(PERSISTED_KEYS),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
