import { GITHUB_REQUEST, GITHUB_ERROR, GITHUB_SUCCESS } from './constants';

export const gitHubRequest = () => ({
  type: GITHUB_REQUEST,
  //   payload: data,
});

export const gitHubSuccess = (data: Array<any>) => ({
  type: GITHUB_SUCCESS,
  payload: data,
});

export const gitHubError = (data: Array<any>) => ({
  type: GITHUB_ERROR,
  payload: data,
});
