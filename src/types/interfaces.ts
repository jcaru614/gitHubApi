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
  payload: Record<any, any>;
}

export interface GitHubSpinnerAction extends Action {
  type: GitHubActionsTypes.GITHUB_SPINNER;
  payload: boolean;
}

export type GitHubActionsType =
  | GitHubRequestAction
  | GitHubErrorAction
  | GitHubSuccesstAction
  | GitHubSpinnerAction;

export interface InitialReducerState {
  commits: Array<any>;
  error: Record<any, any>;
  spinner: boolean;
}
