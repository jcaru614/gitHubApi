import { GITHUB_REQUEST, GITHUB_ERROR, GITHUB_SUCCESS } from './constants';

const initialState: any = {
  commits: [],
};

const reducer = (state = initialState, action: any) => {
  console.log('reducer ', action);
  switch (action.type) {
    case GITHUB_REQUEST:
      return state;
    case GITHUB_SUCCESS:
      return { ...state, commits: action.payload };
    default:
      return state;
  }
};
export default reducer;
