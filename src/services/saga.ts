import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { fetchCommits } from './fetch';
import { gitHubError, gitHubRequest, gitHubSuccess } from './actions';
import { GITHUB_ERROR, GITHUB_REQUEST, GITHUB_SUCCESS } from './constants';

function* getCommits() {
  console.log('getRepo Saga');
  yield takeLatest(GITHUB_REQUEST, getCommitsFromAPI);
}

function* getCommitsFromAPI(action: any): any {
  console.log('getRepo Saga action', action);
  try {
    const data: any = yield call(fetchCommits as any, action.payload);
    console.log('getRepoFromAPI Saga data', data);
    yield put(gitHubSuccess(data));
  } catch (e: any) {
    yield put(gitHubError(e));
  }
}

export default function* rootSaga() {
  yield all([getCommits()]);
}
