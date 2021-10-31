import { Action } from 'redux';
import { GitHubActionsTypes } from './types';

export interface GitHubRequestAction extends Action {
  type: GitHubActionsTypes.GITHUB_REQUEST;
}

export interface GitHubSuccesstAction extends Action {
  type: GitHubActionsTypes.GITHUB_SUCCESS;
  payload: Array<any>;
}

export interface GitHubErrorAction extends Action {
  type: GitHubActionsTypes.GITHUB_ERROR;
  payload: Array<any>;
}

export type GitHubActionsType = GitHubRequestAction | GitHubErrorAction | GitHubSuccesstAction;

export interface InitialReducerState {
  commits: Array<any>;
  error: Record<any, any>;
}
