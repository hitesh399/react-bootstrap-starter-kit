export const GET_USER_PROFILE = 'GET_USER_PROFILE';

export const getUserProfile = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      const user = {
        id: 1,
        name: 'Hitesh Kumar',
        role: 'admin',
      };
      setTimeout(() => {
        dispatch({
          type: GET_USER_PROFILE,
          payload: { user },
        });
        resolve(user);
      }, 1000);
    });
  };
};
