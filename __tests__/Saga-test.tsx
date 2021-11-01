import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { getCommitsFromAPI } from '../src/services/saga';
import { requestCommits } from '../src/services/requests';
import { gitHubSpinner, gitHubSuccess } from '../src/services/actions';
import { GitHubActionsTypes } from '../src/types/types';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockData = [
  {
    sha: 'd79b25da26f6c898f5d59cd1c11a987536a7d48c',
    commit: {
      author: {
        date: '2021-10-30T15:11:34.000+08:00',
        name: 'jcaru614',
        email: '68509393+Niebelungen-D@users.noreply.github.com',
      },
      message: 'commit',
    },
  },
  {
    sha: 'a79b25da26f6c898f5d523kf82jvjsa987536a7d48d',
    commit: {
      author: {
        date: '2021-10-30T15:11:34.000+08:00',
        name: 'Niebelungen',
        email: '68509393+Niebelungen-D@users.noreply.github.com',
      },
      message: 'commit',
    },
  },
];

const mockPayload: any = {
  type: GitHubActionsTypes.GITHUB_REQUEST,
  payload: { userText: 'jcaru614', repoText: 'my_portfolio' },
};

describe('Saga Test', () => {
  test('Saga spinner is tested', async () => {
    return expectSaga(getCommitsFromAPI, requestCommits)
      .run(1000)
      .then((results) => {
        expect(results.effects.put[0].payload.action).toEqual(gitHubSpinner(true));
      });
  });

  test('Saga calls the requested api', async () => {
    return testSaga(getCommitsFromAPI, mockPayload).next().next().call(requestCommits, mockPayload);
  });

  test('Saga success is tested', async () => {
    return testSaga(getCommitsFromAPI, mockPayload)
      .next()
      .next()
      .call(requestCommits, mockPayload)
      .next(mockData)
      .put(gitHubSuccess(mockData));
  });
});
