import * as types from '../types';

export function navPagePath(payload) {
  return {
    type: types.NAV_PAGE,
    payload,
  };
}
