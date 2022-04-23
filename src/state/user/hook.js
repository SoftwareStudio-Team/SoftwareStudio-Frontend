import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLogin, fetchLogout } from '.';

export const useUser = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const login = useCallback(
    ({ username, password }) => dispatch(fetchLogin({ username, password })),
    [dispatch],
  );

  const logout = useCallback(() => dispatch(fetchLogout()), [dispatch]);

  return {
    user,
    login,
    logout,
  };
};
