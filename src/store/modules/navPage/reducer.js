import * as types from '../types';

const initialState = {
  navPage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NAV_PAGE: {
      const newState = { ...state };
      newState.navPage = action.payload;
      return newState;
    }

    default: {
      return state;
    }
  }
};
