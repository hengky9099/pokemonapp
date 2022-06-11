export const USER_DATA = 'USER_DATA';
export const ALL_DATA = 'ALL_DATA';

export const setDataUser = payload => {
  return {
    type: USER_DATA,
    payload: payload,
  };
};
