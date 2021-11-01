import { call, put, takeLatest, all } from 'redux-saga/effects';
import { requestCommits } from './requests';
import { gitHubError, gitHubSuccess, gitHubSpinner } from './actions';
import { GitHubActionsTypes } from '../types/types';

function* getCommits() {
  yield takeLatest(GitHubActionsTypes.GITHUB_REQUEST, getCommitsFromAPI);
}

export function* getCommitsFromAPI(action: any): any {
  yield put(gitHubSpinner(true));
  try {
    const data: any = yield call(requestCommits as any);
    yield put(gitHubSuccess(data));
  } catch (e: any) {
    yield put(gitHubError(e));
  }
}

export default function* rootSaga() {
  yield all([getCommits()]);
}
