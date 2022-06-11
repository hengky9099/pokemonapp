import {USER_DATA} from '../screens/register/redux/action';

const initialState = {
  _user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        _user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
