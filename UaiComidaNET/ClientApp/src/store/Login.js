const loginType = 'LOGIN';
const logoutType = 'LOGOUT';
const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const initialState = { count: 0, logged: false };

export const actionCreators = {
  login: () => ({ type: loginType }),
  logout: () => ({ type: logoutType }),
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === loginType) {
    return { ...state, logged: true };
  }

  if (action.type === logoutType) {
    return { ...state, logged: false };
  }

  return state;
};