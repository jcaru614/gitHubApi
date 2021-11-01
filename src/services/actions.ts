import { GitHubActionsTypes } from '../types/types';

export const gitHubRequest = (data: Record<any, any>) => ({
  type: GitHubActionsTypes.GITHUB_REQUEST,
  payload: data,
});

export const gitHubSuccess = (data: Array<any>) => ({
  type: GitHubActionsTypes.GITHUB_SUCCESS,
  payload: data,
});

export const gitHubError = (error: Record<any, any>) => ({
  type: GitHubActionsTypes.GITHUB_ERROR,
  payload: error,
});

export const gitHubSpinner = (spinner: boolean) => ({
  type: GitHubActionsTypes.GITHUB_SPINNER,
  payload: spinner,
});
