import { GitHubActionsTypes } from '../types/types';

export const gitHubRequest = () => ({
  type: GitHubActionsTypes.GITHUB_REQUEST,
});

export const gitHubSuccess = (data: Array<any>) => ({
  type: GitHubActionsTypes.GITHUB_SUCCESS,
  payload: data,
});

export const gitHubError = (error: Record<any, any>) => ({
  type: GitHubActionsTypes.GITHUB_ERROR,
  payload: error,
});
