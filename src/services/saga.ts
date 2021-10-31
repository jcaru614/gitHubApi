import { call, put, takeLatest, all } from 'redux-saga/effects';
import { requestCommits } from './requests';
import { gitHubError, gitHubSuccess } from './actions';
import { GitHubActionsTypes } from '../types/types';

function* getCommits() {
  yield takeLatest(GitHubActionsTypes.GITHUB_REQUEST, getCommitsFromAPI);
}

function* getCommitsFromAPI(action: any): any {
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
