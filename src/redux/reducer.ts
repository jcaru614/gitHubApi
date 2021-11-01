import { GitHubActionsTypes } from '../types/types';
import { GitHubActionsType, InitialReducerState } from '../types/interfaces';

const initialState: InitialReducerState = {
  commits: [],
  error: {},
  spinner: false,
};

const reducer = (state = initialState, action: GitHubActionsType) => {
  switch (action.type) {
    case GitHubActionsTypes.GITHUB_REQUEST:
      return state;
    case GitHubActionsTypes.GITHUB_SUCCESS:
      return { ...state, commits: action.payload, spinner: false };
    case GitHubActionsTypes.GITHUB_SPINNER:
      return { ...state, spinner: action.payload };
    case GitHubActionsTypes.GITHUB_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default reducer;
