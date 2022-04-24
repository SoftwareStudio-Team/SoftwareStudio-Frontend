import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLogin, fetchUpdate, fetchLogout } from '.';

export const useUser = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const login = useCallback(
    ({ username, password }) => dispatch(fetchLogin({ username, password })),
    [dispatch],
  );

  const update = useCallback(
    ({ firstName, lastName, birthDate }) =>
      dispatch(fetchUpdate({ id: user?.id, firstName, lastName, birthDate })),
    [dispatch],
  );

  const logout = useCallback(() => dispatch(fetchLogout()), [dispatch]);

  return {
    user,
    reducers: {
      login,
      update,
      logout,
    },
  };
};
